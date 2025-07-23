import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 데이터베이스 타입 정의
export interface ContactSubmission {
  id: number
  name: string
  phone: string
  message?: string
  type: 'full_form' | 'quick_contact'
  created_at: string
}

// 폼 제출 함수
export const submitContactForm = async (data: {
  name: string
  phone: string
  message?: string
  type: 'full_form' | 'quick_contact'
}) => {
  const { data: result, error } = await supabase
    .from('kmong_1_contact_submissions')
    .insert([data])
    .select()

  if (error) {
    console.error('Error submitting form:', error)
    throw error
  }

  return result
}

// 관리자용 데이터 조회 함수
export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('kmong_1_contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
    throw error
  }

  return data as ContactSubmission[]
} 