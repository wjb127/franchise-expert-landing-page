export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 사이트명 및 설명 */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">가맹거래사 전문 컨설팅</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
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
            <h4 className="text-white text-lg font-semibold mb-4">회사 정보</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-500">전문가:</span>
                <span className="ml-2">가맹거래사 심상민</span>
              </div>
              <div>
                <span className="text-gray-500">등록번호:</span>
                <span className="ml-2">공정거래위원회 등록 제 657호</span>
              </div>
              <div>
                <span className="text-gray-500">총 거래건수:</span>
                <span className="ml-2">92건</span>
              </div>
              <div>
                <span className="text-gray-500">고객만족도:</span>
                <span className="ml-2 text-green-400">100%</span>
              </div>
              <div>
                <span className="text-gray-500">회원구분:</span>
                <span className="ml-2">기업회원</span>
              </div>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">연락처 정보</h4>
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
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* 저작권 정보 */}
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              <p>© 2024 가맹거래사 전문 컨설팅. 모든 권리 보유.</p>
              <p className="mt-1">공정거래위원회 등록 가맹거래사 심상민이 제공하는 전문 서비스입니다.</p>
            </div>

            {/* 추가 링크 */}
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                상담문의
              </button>
            </div>
          </div>
        </div>

        {/* 면책 조항 */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h5 className="text-white text-sm font-semibold mb-2">상담 및 서비스 안내</h5>
          <div className="text-xs text-gray-400 leading-relaxed space-y-1">
            <p>• <strong>대출승인:</strong> 상담 후 개별 심사를 통해 결정되며, 신용도에 따라 차이가 있을 수 있습니다.</p>
            <p>• <strong>연체정보:</strong> 연체 시 개인신용평가회사에 연체 정보가 등록될 수 있으며, 이로 인해 신용등급이 하락할 수 있습니다.</p>
            <p>• <strong>상환방법:</strong> 원리금균등상환방식, 만기일시상환방식 중 선택 가능하며, 중도상환 시 수수료가 발생할 수 있습니다.</p>
            <p>• <strong>연체시 불이익:</strong> 신용등급 하락, 개인신용평가 하락, 금융거래 제한 등의 불이익이 발생할 수 있습니다.</p>
            <p className="text-yellow-400 font-medium mt-2">
              ※ 과도한 차입은 개인신용평가 하락의 원인이 될 수 있습니다. 신중한 대출 이용을 권장합니다.
            </p>
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            이 사이트에서 광고되는 상품들의 상환 기간은 모두 12개월 이상이며, 최장 120개월 미만입니다.<br/>
            최대 연 이자율은 20.0%입니다.<br/>
            연체이자율:약정금리+3%(단, 법정 최고금리 20%이내)<br/>
            대출 상담을 원하시는 다른 회사의 정보를 제공받을 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
} 