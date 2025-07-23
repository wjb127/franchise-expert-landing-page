export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            가맹사업자만을 위한 특별 혜택
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            일반 대출과는 다른 가맹사업 전문 금융 서비스의 차별화된 혜택을 만나보세요
          </p>
        </div>

        {/* 메인 혜택 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 좌측 대형 카드 */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">가맹점주 전용 우대 금리</h3>
                <p className="text-blue-100">검증된 브랜드 가맹점주에게만 제공하는 특별 금리</p>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>일반 대출 대비 최대 1%p 우대</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>매출 실적에 따른 추가 금리 인하</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>우수 가맹점 인증시 특별 혜택</span>
              </div>
            </div>
          </div>

          {/* 우측 카드들 */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">신속한 승인 프로세스</h4>
              <p className="text-gray-600 mb-4">
                가맹사업 특성을 이해하는 전문 심사팀이 빠르고 정확하게 승인을 진행합니다.
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </div>
                평균 24시간 내 결과 통보
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-green-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">유연한 상환 옵션</h4>
              <p className="text-gray-600 mb-4">
                계절별 매출 변동이 큰 가맹사업 특성을 반영한 맞춤형 상환 계획을 제공합니다.
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </div>
                매출 연동 상환 가능
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">종합 컨설팅 서비스</h4>
              <p className="text-gray-600 mb-4">
                단순 대출을 넘어 가맹사업 성공을 위한 종합적인 컨설팅을 제공합니다.
              </p>
              <div className="flex items-center text-sm text-purple-600 font-medium">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </div>
                무료 경영 컨설팅 포함
              </div>
            </div>
          </div>
        </div>

        {/* 수치 기반 혜택 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            실제 이용 고객들의 만족도
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">고객 만족도</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24시간</div>
              <p className="text-gray-600">평균 승인 시간</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">누적 지원 가맹점</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200억</div>
              <p className="text-gray-600">누적 대출 실행액</p>
            </div>
          </div>
        </div>

        {/* 추가 혜택 리스트 */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            이런 분들께 특히 추천합니다
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">신규 창업 예정자</h4>
                <p className="text-sm text-gray-600">검증된 프랜차이즈로 안전한 창업을 계획하는 분</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">기존 가맹점주</h4>
                <p className="text-sm text-gray-600">운영자금이나 확장자금이 필요한 기존 사업자</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-purple-600 rounded-lg transform rotate-45"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">다점포 운영자</h4>
                <p className="text-sm text-gray-600">성공적인 매장 운영 경험을 바탕으로 확장하려는 분</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 