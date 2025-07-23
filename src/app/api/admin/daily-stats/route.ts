import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface SubmissionData {
  created_at: string;
  type: 'quick_contact' | 'full_form';
}

interface DailyStat {
  date: string;
  total: number;
  quick_contact: number;
  full_form: number;
  displayDate: string;
}

export async function GET(request: NextRequest) {
  console.log('=== Daily Stats API Route 시작 ===');
  
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7');
    
    // API 키 선택
    const apiKey = SUPABASE_SERVICE_KEY || SUPABASE_ANON_KEY;
    const keyType = SUPABASE_SERVICE_KEY ? 'SERVICE_ROLE_KEY (RLS 우회)' : 'ANON_KEY (RLS 적용)';
    
    console.log(`📊 최근 ${days}일 일별 통계 조회 시작`);
    console.log('사용할 API 키:', keyType);
    
    if (!apiKey) {
      console.error('❌ Supabase API 키가 설정되지 않았습니다!');
      return NextResponse.json(
        { error: 'Supabase API 키가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    // 최근 N일간의 데이터 조회
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const isoDate = startDate.toISOString();

    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions?select=created_at,type&created_at=gte.${isoDate}&order=created_at.asc`, {
      method: 'GET',
      headers: {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Supabase 응답 상태 (일별 통계):', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Supabase 오류 응답 (일별 통계):', errorText);
      
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

    const data: SubmissionData[] = await response.json();
    console.log(`✅ 일별 통계 원본 데이터 조회 성공: ${data.length}건`);

    // 일별 데이터 집계
    const dailyStats: Record<string, DailyStat> = {};
    const today = new Date();
    
    // 최근 N일 날짜 배열 생성 (오늘부터 역순)
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      
      dailyStats[dateStr] = {
        date: dateStr,
        total: 0,
        quick_contact: 0,
        full_form: 0,
        displayDate: date.toLocaleDateString('ko-KR', { 
          month: 'short', 
          day: 'numeric' 
        })
      };
    }
    
    // 실제 데이터로 집계
    data.forEach((submission: SubmissionData) => {
      const submissionDate = new Date(submission.created_at).toISOString().split('T')[0];
      
      if (dailyStats[submissionDate]) {
        dailyStats[submissionDate].total++;
        if (submission.type === 'quick_contact') {
          dailyStats[submissionDate].quick_contact++;
        } else if (submission.type === 'full_form') {
          dailyStats[submissionDate].full_form++;
        }
      }
    });
    
    // 배열로 변환하고 날짜순 정렬
    const chartData = Object.values(dailyStats).sort((a: DailyStat, b: DailyStat) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    console.log('✅ 일별 통계 집계 완료:', chartData.length, '일');
    console.log('=== Daily Stats API Route 성공 완료 ===');
    
    return NextResponse.json({
      success: true,
      data: chartData,
      summary: {
        totalDays: days,
        totalSubmissions: data.length,
        quickContactCount: data.filter((d: SubmissionData) => d.type === 'quick_contact').length,
        fullFormCount: data.filter((d: SubmissionData) => d.type === 'full_form').length
      }
    });

  } catch (error) {
    console.error('=== Daily Stats API Route 오류 ===');
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