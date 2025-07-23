-- RLS 정책 수정: 익명 사용자 INSERT 허용

-- 기존 정책 삭제
DROP POLICY IF EXISTS "Allow anonymous inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions;

-- 새로운 정책 생성: 익명 사용자도 INSERT 가능
CREATE POLICY "Allow anonymous inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions
FOR INSERT 
WITH CHECK (true);

-- 또는 더 구체적인 정책 (익명과 인증된 사용자 모두 허용)
-- CREATE POLICY "Allow inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions
-- FOR INSERT 
-- TO anon, authenticated
-- WITH CHECK (true);

-- 현재 정책 확인
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'kmong_1_contact_submissions'; 