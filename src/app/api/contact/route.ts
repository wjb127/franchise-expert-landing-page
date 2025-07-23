import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  console.log('=== API Route 시작 ===');
  
  try {
    const body = await request.json();
    console.log('요청 받은 데이터:', body);
    
    const { name, phone, message, type } = body;
    
    // 입력 검증
    if (!name || !phone) {
      console.log('필수 필드 누락:', { name: !!name, phone: !!phone });
      return NextResponse.json(
        { error: '이름과 전화번호는 필수입니다.' },
        { status: 400 }
      );
    }

    // Supabase에 데이터 저장
    const supabaseData = {
      name: name.trim(),
      phone: phone.trim(),
      message: message || null,
      type: type || 'quick_contact'
    };
    
    console.log('Supabase로 전송할 데이터:', supabaseData);
    console.log('환경변수 확인:');
    console.log('- SUPABASE_URL:', SUPABASE_URL ? '✅ 설정됨' : '❌ 없음');
    console.log('- SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_KEY ? '✅ 설정됨' : '❌ 없음');
    console.log('- SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? '✅ 설정됨' : '❌ 없음');
    
    // API 키 선택 로직
    const apiKey = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY;
    const keyType = SUPABASE_SERVICE_KEY ? 'SERVICE_ROLE_KEY (RLS 우회 가능)' : 'ANON_KEY (RLS 적용됨)';
    
    console.log('사용할 API 키:', keyType);
    console.log('API 키 길이:', apiKey ? apiKey.length : 0);
    console.log('API 키 시작 부분:', apiKey ? apiKey.substring(0, 20) + '...' : 'N/A');

    if (!apiKey) {
      console.error('❌ Supabase API 키가 설정되지 않았습니다!');
      return NextResponse.json(
        { 
          error: 'Supabase API 키가 설정되지 않았습니다.',
          details: 'SUPABASE_SERVICE_ROLE_KEY 또는 NEXT_PUBLIC_SUPABASE_ANON_KEY를 확인해주세요.'
        },
        { status: 500 }
      );
    }

    // 첫 번째 시도: SERVICE_ROLE_KEY 또는 ANON_KEY 사용
    console.log('🚀 Supabase API 호출 시작');
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions`, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(supabaseData)
    });

    console.log('Supabase 응답 상태:', response.status);
    console.log('Supabase 응답 헤더:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase 오류 응답:', errorText);
      
      // RLS 오류인 경우 추가 대안 시도
      if (response.status === 401 && errorText.includes('row-level security')) {
        console.log('🔄 RLS 정책 오류 감지 - 대안 방법 시도');
        
        // 대안 1: RLS 우회를 위한 직접 INSERT (service_role 사용)
        if (SUPABASE_SERVICE_KEY) {
          console.log('🔧 SERVICE_ROLE_KEY로 RLS 우회 시도');
          
          const alternativeResponse = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions`, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_SERVICE_KEY,
              'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=representation',
              'Role': 'service_role' // 명시적으로 service_role 지정
            },
            body: JSON.stringify(supabaseData)
          });
          
          console.log('대안 시도 응답 상태:', alternativeResponse.status);
          
          if (alternativeResponse.ok) {
            const result = await alternativeResponse.json();
            console.log('✅ 대안 방법으로 성공!', result);
            console.log('=== API Route 성공 완료 ===');
            
            return NextResponse.json({
              success: true,
              message: '상담 신청이 성공적으로 접수되었습니다.',
              data: result
            });
          } else {
            const altErrorText = await alternativeResponse.text();
            console.error('대안 방법도 실패:', altErrorText);
          }
        }
        
        // 구체적인 RLS 오류 메시지
        console.error('❌ RLS 정책 문제 - Supabase SQL Editor에서 다음을 실행해주세요:');
        console.error(`
=== RLS 문제 해결 SQL ===
-- 1. 기존 정책 모두 삭제
DROP POLICY IF EXISTS "Allow anonymous inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "enable_insert_for_all_users" ON kmong_1_contact_submissions;

-- 2. 새로운 정책 생성
CREATE POLICY "enable_insert_for_all_users" ON kmong_1_contact_submissions
    FOR INSERT 
    TO public, anon, authenticated, service_role
    WITH CHECK (true);

-- 3. 또는 RLS 완전 비활성화 (임시)
-- ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;
========================
        `);
        
        return NextResponse.json(
          { 
            error: 'RLS 정책 오류: 데이터 삽입 권한이 없습니다.',
            details: errorText,
            solution: 'Supabase SQL Editor에서 RLS 정책을 수정해주세요. 콘솔 로그를 확인하세요.',
            status: response.status
          },
          { status: response.status }
        );
      }
      
      // 다른 오류들 처리
      let errorMessage = 'Supabase 저장 중 오류가 발생했습니다.';
      
      if (response.status === 401) {
        errorMessage = '인증 오류: API 키를 확인해주세요.';
      } else if (response.status === 403) {
        errorMessage = '접근 권한 오류입니다.';
      } else if (response.status >= 500) {
        errorMessage = 'Supabase 서버 오류입니다.';
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: errorText,
          status: response.status
        },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('✅ Supabase 성공 응답:', result);
    console.log('=== API Route 성공 완료 ===');

    return NextResponse.json({
      success: true,
      message: '상담 신청이 성공적으로 접수되었습니다.',
      data: result
    });

  } catch (error) {
    console.error('=== API Route 오류 ===');
    console.error('오류 타입:', error?.constructor?.name);
    console.error('오류 메시지:', error instanceof Error ? error.message : error);
    console.error('오류 스택:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { 
        error: '서버 내부 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 