import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function GET(request: NextRequest) {
  console.log('=== Admin API Route 시작 ===');
  
  try {
    const { searchParams } = new URL(request.url);
    const days = searchParams.get('days');
    
    // API 키 선택
    const apiKey = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY;
    const keyType = SUPABASE_SERVICE_KEY ? 'SERVICE_ROLE_KEY (RLS 우회)' : 'ANON_KEY (RLS 적용)';
    
    console.log('사용할 API 키:', keyType);
    console.log('API 키 길이:', apiKey ? apiKey.length : 0);
    
    if (!apiKey) {
      console.error('❌ Supabase API 키가 설정되지 않았습니다!');
      return NextResponse.json(
        { error: 'Supabase API 키가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    if (days) {
      // 특정 기간의 제출 수 조회
      console.log(`📊 최근 ${days}일 제출 수 조회 시작`);
      
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - parseInt(days));
      const isoDate = startDate.toISOString();

      const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions?select=id&created_at=gte.${isoDate}`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Supabase 응답 상태 (카운트):', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase 오류 응답 (카운트):', errorText);
        
        if (response.status === 401 && errorText.includes('row-level security')) {
          console.error('❌ RLS 정책 문제 - SELECT 권한 없음');
          return NextResponse.json(
            { 
              error: 'RLS 정책 오류: 데이터 조회 권한이 없습니다.',
              details: errorText,
              solution: 'Supabase에서 SELECT 정책을 추가해주세요.'
            },
            { status: response.status }
          );
        }
        
        return NextResponse.json(
          { error: `데이터 조회 실패: ${response.status}`, details: errorText },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log(`✅ 제출 수 조회 성공: ${data.length}건`);
      
      return NextResponse.json({
        success: true,
        count: data.length
      });
      
    } else {
      // 모든 연락처 제출 데이터 조회
      console.log('📋 전체 제출 데이터 조회 시작');
      
      const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions?select=*&order=created_at.desc`, {
        method: 'GET',
        headers: {
          'apikey': apiKey,
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Supabase 응답 상태 (전체):', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Supabase 오류 응답 (전체):', errorText);
        
        if (response.status === 401 && errorText.includes('row-level security')) {
          console.error('❌ RLS 정책 문제 - SELECT 권한 없음');
          console.error('Supabase SQL Editor에서 다음을 실행해주세요:');
          console.error(`
=== SELECT 정책 추가 SQL ===
CREATE POLICY "enable_read_for_all" ON kmong_1_contact_submissions
    FOR SELECT 
    TO public, anon, authenticated, service_role
    USING (true);

-- 또는 RLS 완전 비활성화
-- ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;
========================
          `);
          
          return NextResponse.json(
            { 
              error: 'RLS 정책 오류: 데이터 조회 권한이 없습니다.',
              details: errorText,
              solution: 'Supabase에서 SELECT 정책을 추가하거나 RLS를 비활성화해주세요.'
            },
            { status: response.status }
          );
        }
        
        return NextResponse.json(
          { error: `데이터 조회 실패: ${response.status}`, details: errorText },
          { status: response.status }
        );
      }

      const data = await response.json();
      console.log(`✅ 전체 데이터 조회 성공: ${data.length}건`);
      console.log('=== Admin API Route 성공 완료 ===');
      
      return NextResponse.json({
        success: true,
        data: data
      });
    }

  } catch (error) {
    console.error('=== Admin API Route 오류 ===');
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