-- ============================================
-- RLS 임시 비활성화 (문제 해결용)
-- ============================================

-- 현재 RLS 상태 확인
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'kmong_1_contact_submissions';

-- RLS 비활성화 (임시 해결책)
ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;

-- RLS 상태 재확인
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'kmong_1_contact_submissions';

-- ============================================
-- 나중에 RLS를 다시 활성화하려면:
-- ============================================

-- ALTER TABLE kmong_1_contact_submissions ENABLE ROW LEVEL SECURITY;
-- 
-- -- 그리고 적절한 정책 생성:
-- CREATE POLICY "enable_insert_for_all_users" ON kmong_1_contact_submissions
--     FOR INSERT 
--     TO public, anon, authenticated
--     WITH CHECK (true);
-- 
-- CREATE POLICY "enable_read_for_authenticated" ON kmong_1_contact_submissions
--     FOR SELECT 
--     TO authenticated
--     USING (true); 