'use server';

// Server Action으로 서버에서 데이터 제출
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

interface ContactFormData {
  name: string;
  phone: string;
  message?: string;
  type: 'full_form' | 'quick_contact';
}

export async function submitContactFormAction(data: ContactFormData) {
  try {
    console.log('서버에서 데이터 제출 시도:', data);
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/kmong_1_contact_submissions`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
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
      console.error('서버 API 응답 오류:', response.status, errorText);
      throw new Error(`API 호출 실패: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('서버에서 제출 성공:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('서버 연락처 폼 제출 오류:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.' 
    };
  }
} 