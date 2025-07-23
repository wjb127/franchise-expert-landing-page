-- ============================================
-- RLS 문제 최종 해결 스크립트
-- ============================================

-- 1. 현재 상태 확인
SELECT 
    schemaname, 
    tablename, 
    rowsecurity,
    CASE WHEN rowsecurity THEN 'RLS 활성화됨' ELSE 'RLS 비활성화됨' END as rls_status
FROM pg_tables 
WHERE tablename = 'kmong_1_contact_submissions';

-- 2. 현재 정책들 확인
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'kmong_1_contact_submissions';

-- 3. 모든 기존 정책 삭제
DROP POLICY IF EXISTS "Allow anonymous inserts on kmong_1_contact_submissions" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated reads on kmong_1_contact_submissions" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "enable_insert_for_all_users" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "enable_read_for_authenticated" ON kmong_1_contact_submissions;
DROP POLICY IF EXISTS "enable_read_for_all" ON kmong_1_contact_submissions;

-- ============================================
-- 방법 1: 완전한 RLS 정책 (권장)
-- ============================================

-- INSERT 정책: 모든 사용자 허용
CREATE POLICY "allow_all_inserts" ON kmong_1_contact_submissions
    FOR INSERT 
    TO public, anon, authenticated, service_role
    WITH CHECK (true);

-- SELECT 정책: 모든 사용자 허용 (대시보드용)
CREATE POLICY "allow_all_selects" ON kmong_1_contact_submissions
    FOR SELECT 
    TO public, anon, authenticated, service_role
    USING (true);

-- ============================================
-- 방법 2: RLS 완전 비활성화 (간단한 해결책)
-- ============================================

-- 위 정책이 작동하지 않으면 아래 주석 해제
-- ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;

-- ============================================
-- 정책 확인
-- ============================================

-- 적용된 정책들 다시 확인
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'kmong_1_contact_submissions';

-- RLS 상태 재확인
SELECT 
    schemaname, 
    tablename, 
    rowsecurity,
    CASE WHEN rowsecurity THEN 'RLS 활성화됨' ELSE 'RLS 비활성화됨' END as rls_status
FROM pg_tables 
WHERE tablename = 'kmong_1_contact_submissions';

-- ============================================
-- 테스트 쿼리 (선택사항)
-- ============================================

-- 데이터 조회 테스트
-- SELECT COUNT(*) as total_submissions FROM kmong_1_contact_submissions;

-- 최근 데이터 확인
-- SELECT * FROM kmong_1_contact_submissions ORDER BY created_at DESC LIMIT 5; 