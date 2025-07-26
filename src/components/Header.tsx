'use client';

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

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


          {/* 통계 카드들 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-foreground-accent text-sm sm:text-lg font-medium mb-2">총 거래 건수</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-foreground-accent">92</span>
                <span className="text-sm sm:text-lg text-foreground ml-1">건</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-foreground-accent text-sm sm:text-lg font-medium mb-2">고객 만족도</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-foreground-accent">100</span>
                <span className="text-sm sm:text-lg text-foreground ml-1">%</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg">
              <h3 className="text-foreground-accent text-sm sm:text-lg font-medium mb-2">평균 응답 시간</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-xl sm:text-3xl font-bold text-foreground-accent">1시간</span>
                <span className="text-sm sm:text-lg text-foreground ml-1">이내</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 