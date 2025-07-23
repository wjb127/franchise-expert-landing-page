-- ============================================
-- RLS 정책 문제 해결을 위한 종합 스크립트
-- ============================================

-- 1. 현재 테이블 상태 확인
SELECT schemaname, tablename, rowsecurity 
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

-- 4. RLS 임시 비활성화 (테스트용)
-- ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 5. 새로운 정책 생성 (더 명확한 방법)
CREATE POLICY "enable_insert_for_all_users" ON kmong_1_contact_submissions
    FOR INSERT 
    TO public, anon, authenticated, service_role
    WITH CHECK (true);

-- 6. READ 정책도 추가 (필요시)
CREATE POLICY "enable_read_for_authenticated" ON kmong_1_contact_submissions
    FOR SELECT 
    TO authenticated, service_role
    USING (true);

-- 7. 정책 적용 확인
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

-- ============================================
-- 만약 위 방법도 안 되면 아래 실행
-- ============================================

-- 최후의 수단: RLS 완전 비활성화 (보안상 권장하지 않음)
-- ALTER TABLE kmong_1_contact_submissions DISABLE ROW LEVEL SECURITY;

-- 대안: 더 넓은 권한의 정책
-- CREATE POLICY "allow_all_operations" ON kmong_1_contact_submissions
--     FOR ALL 
--     TO public
--     USING (true)
--     WITH CHECK (true);

-- ============================================
-- 권한 확인 쿼리들
-- ============================================

-- 테이블 권한 확인
SELECT 
    table_name,
    privilege_type,
    grantee 
FROM information_schema.table_privileges 
WHERE table_name = 'kmong_1_contact_submissions';

-- 현재 사용자 역할 확인
SELECT current_user, session_user;

-- anon 역할 권한 확인
SELECT 
    r.rolname,
    r.rolsuper,
    r.rolinherit,
    r.rolcreaterole,
    r.rolcreatedb,
    r.rolcanlogin,
    r.rolbypassrls
FROM pg_roles r 
WHERE r.rolname IN ('anon', 'authenticated', 'service_role'); 