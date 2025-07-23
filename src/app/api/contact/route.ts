import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
    console.log('사용 중인 API 키:', SUPABASE_SERVICE_KEY ? 'SERVICE_KEY' : 'ANON_KEY');
    console.log('Supabase URL:', SUPABASE_URL);

    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
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
      
      // 구체적인 오류 메시지 분석
      let errorMessage = 'Supabase 저장 중 오류가 발생했습니다.';
      
      if (response.status === 401) {
        if (errorText.includes('row-level security')) {
          errorMessage = 'RLS 정책 오류: 데이터 삽입 권한이 없습니다.';
          console.error('RLS 정책 문제 - 다음 SQL을 Supabase에서 실행해주세요:');
          console.error(`
CREATE POLICY "Allow anonymous inserts" ON kmong_1_contact_submissions
FOR INSERT 
WITH CHECK (true);
          `);
        } else {
          errorMessage = '인증 오류: API 키를 확인해주세요.';
        }
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
    console.log('Supabase 성공 응답:', result);
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