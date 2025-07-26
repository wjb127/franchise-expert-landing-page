export default function Footer() {
  return (
    <footer className="bg-white text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트명 및 설명 */}
          <div>
            <h3 className="text-foreground-accent text-xl font-bold mb-4">가맹거래사 전문 컨설팅</h3>
            <p className="text-foreground text-sm leading-relaxed mb-4">
              공정거래위원회 등록 전문가가 제공하는<br/>
              안전하고 신뢰할 수 있는 가맹사업 컨설팅 서비스
            </p>
            <div className="flex items-center text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>평균 응답시간 1시간 이내</span>
            </div>
          </div>

          {/* 회사 정보 */}
          <div>
            <h4 className="text-foreground-accent text-lg font-semibold mb-4">회사 정보</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-foreground">전문가:</span>
                <span className="ml-2">가맹거래사 심상민</span>
              </div>
              <div>
                <span className="text-foreground">등록번호:</span>
                <span className="ml-2">공정거래위원회 등록 제 657호</span>
              </div>
              <div>
                <span className="text-foreground">고객만족도:</span>
                <span className="ml-2 text-green-400">100%</span>
              </div>
              <div>
                <span className="text-foreground">회원구분:</span>
                <span className="ml-2">기업회원</span>
              </div>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-foreground-accent text-lg font-semibold mb-4">연락처 정보</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>연락 가능시간: 언제나 가능</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>전화상담 제공</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>세금계산서 발행 가능</span>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 저작권 정보 */}
            <div className="text-sm text-foreground mb-4 md:mb-0">
              <p>© 2024 가맹거래사 전문 컨설팅. 모든 권리 보유.</p>
              <p className="mt-1">공정거래위원회 등록 가맹거래사 심상민이 제공하는 전문 서비스입니다.</p>
            </div>

            {/* 추가 링크 */}
            <div className="flex space-x-6 text-sm">
              <button className="text-foreground hover:text-foreground-accent transition-colors">
                개인정보처리방침
              </button>
              <button className="text-foreground hover:text-foreground-accent transition-colors">
                이용약관
              </button>
              <button className="text-foreground hover:text-foreground-accent transition-colors">
                상담문의
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
} 