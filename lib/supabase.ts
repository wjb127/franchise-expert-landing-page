// Supabase REST API 직접 호출 방식

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
  type: 'full_form' | 'quick_contact';
}

interface ContactSubmission {
  id: number;
  name: string;
  phone: string;
  message: string | null;
  type: string;
  created_at: string;
}

// 연락처 폼 데이터 제출
export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        message: data.message || null,
        type: data.type
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API 응답 오류:', response.status, errorText);
      throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('제출 성공:', result);
    return result;
  } catch (error) {
    console.error('연락처 폼 제출 오류:', error);
    throw error;
  }
}

// 모든 연락처 제출 데이터 조회 (관리자용)
export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions?select=*&order=created_at.desc`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API 응답 오류:', response.status, errorText);
      throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('데이터 조회 성공:', data.length, '건');
    return data;
  } catch (error) {
    console.error('연락처 데이터 조회 오류:', error);
    throw error;
  }
}

// 특정 기간의 제출 수 조회
export async function getSubmissionCount(days: number = 7): Promise<number> {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const isoDate = startDate.toISOString();

    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions?select=id&created_at=gte.${isoDate}`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API 응답 오류:', response.status, errorText);
      throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.length;
  } catch (error) {
    console.error('제출 수 조회 오류:', error);
    return 0;
  }
} 