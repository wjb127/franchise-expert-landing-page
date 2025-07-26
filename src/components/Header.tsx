'use client';

export default function Header() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0">
        {/* 기하학적 도형들 */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500 transform rotate-45 opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-400 transform rotate-12 opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-1 bg-red-500 transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-orange-400 transform -rotate-45 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-foreground-accent">
          {/* 메인 타이틀 */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-foreground-accent">
              프랜차이즈 가맹계약 전문
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
              <span className="text-yellow-600">잘못된 계약서 하나가</span><br/>
              <span className="text-red-600">당신의 사업을 망칩니다</span>
            </p>
          </div>

          {/* 프랜차이즈 가게 일러스트 */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="relative">
              {/* 거리 배경 */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-gray-100 rounded-2xl opacity-20"></div>
              
              {/* 가게들 컨테이너 */}
              <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                  {/* 카페 가게 */}
                  <div className="relative">
                    <div className="bg-amber-600 amber-700 rounded-t-xl p-2 sm:p-3">
                      <div className="text-white text-center font-bold text-xs sm:text-sm">☕ CAFE</div>
                    </div>
                    <div className="bg-white rounded-b-xl p-2 sm:p-3 shadow-lg">
                      <div className="flex justify-center gap-1 mb-1 sm:mb-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-amber-200 amber-900 rounded"></div>
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-amber-200 amber-900 rounded"></div>
                      </div>
                      <div className="w-full h-6 sm:h-8 bg-amber-800 amber-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-600 amber-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 치킨 가게 */}
                  <div className="relative">
                    <div className="bg-red-600 red-700 rounded-t-xl p-2 sm:p-3">
                      <div className="text-white text-center font-bold text-xs sm:text-sm">🍗 CHICKEN</div>
                    </div>
                    <div className="bg-white rounded-b-xl p-2 sm:p-3 shadow-lg">
                      <div className="flex justify-center gap-1 mb-1 sm:mb-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-200 red-900 rounded"></div>
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-red-200 red-900 rounded"></div>
                      </div>
                      <div className="w-full h-6 sm:h-8 bg-red-800 red-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-600 red-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 편의점 가게 */}
                  <div className="relative">
                    <div className="bg-green-600 green-700 rounded-t-xl p-2 sm:p-3">
                      <div className="text-white text-center font-bold text-xs sm:text-sm">🏪 CVS</div>
                    </div>
                    <div className="bg-white rounded-b-xl p-2 sm:p-3 shadow-lg">
                      <div className="flex justify-center gap-1 mb-1 sm:mb-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-200 green-900 rounded"></div>
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-200 green-900 rounded"></div>
                      </div>
                      <div className="w-full h-6 sm:h-8 bg-green-800 green-600 rounded flex items-center justify-center">
                        <div className="text-white font-bold text-xs">24H</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 베이커리 가게 */}
                  <div className="relative">
                    <div className="bg-orange-600 orange-700 rounded-t-xl p-2 sm:p-3">
                      <div className="text-white text-center font-bold text-xs sm:text-sm">🥐 BAKERY</div>
                    </div>
                    <div className="bg-white rounded-b-xl p-2 sm:p-3 shadow-lg">
                      <div className="flex justify-center gap-1 mb-1 sm:mb-2">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-orange-200 orange-900 rounded"></div>
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-orange-200 orange-900 rounded"></div>
                      </div>
                      <div className="w-full h-6 sm:h-8 bg-orange-800 orange-600 rounded flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-600 orange-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 도로 */}
                <div className="mt-2 sm:mt-4 h-6 sm:h-10 bg-gray-400 gray-700 rounded-lg relative">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-around">
                    <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-yellow-400"></div>
                    <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-yellow-400"></div>
                    <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-yellow-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 통계 카드들 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-800 bg-opacity-80 gray-800 opacity-90 rounded-lg p-4 sm:p-6 border border-blue-600 gray-600">
              <h3 className="text-white text-sm sm:text-lg font-medium mb-2">총 거래 건수</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">92</span>
                <span className="text-sm sm:text-lg text-blue-200 gray-300 ml-1">건</span>
              </div>
            </div>

            <div className="bg-blue-800 bg-opacity-80 gray-800 opacity-90 rounded-lg p-4 sm:p-6 border border-blue-600 gray-600">
              <h3 className="text-white text-sm sm:text-lg font-medium mb-2">고객 만족도</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">100</span>
                <span className="text-sm sm:text-lg text-blue-200 gray-300 ml-1">%</span>
              </div>
            </div>

            <div className="bg-blue-800 bg-opacity-80 gray-800 opacity-90 rounded-lg p-4 sm:p-6 border border-blue-600 gray-600">
              <h3 className="text-white text-sm sm:text-lg font-medium mb-2">평균 응답 시간</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-xl sm:text-3xl font-bold text-white">1시간</span>
                <span className="text-sm sm:text-lg text-blue-200 gray-300 ml-1">이내</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 