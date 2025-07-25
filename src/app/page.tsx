import Header from '../components/Header';
import FadeInSection from '../components/FadeInSection';
import Footer from '../components/Footer';
import FixedBottomForm from '../components/FixedBottomForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="relative pt-16">
        {/* 히어로 섹션 */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto text-center">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    프랜차이즈 가맹거래
                  </span>{" "}
                  전문
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                  프랜차이즈 정보공개서·가맹계약서<br />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">제작부터 등록까지 완벽 지원</span>
                </p>

                {/* 서비스 제공절차 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-blue-200 dark:border-blue-700">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">서비스 제공절차</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">크몽 메시지 문의</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">서비스 상담 및 요구사항 확인</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">컨설팅 일정 확정</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">작업 일정 및 범위 협의</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">결제</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">서비스 비용 결제 진행</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">기본 준비 서류 전달</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">필요 서류 및 정보 제공</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">5</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">작업물 발송</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">완성된 서류 전달 및 완료</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://kmong.com/@%EA%B0%80%EB%A7%B9%EA%B1%B0%EB%9E%98%EC%82%AC%EC%8B%AC%EC%83%81%EB%AF%BC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                      문의하기
                    </div>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 서비스 소개 */}
        <section className="py-12 sm:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  전문 서비스 영역
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  가맹사업의 모든 단계를 전문적으로 지원합니다
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <FadeInSection delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 shadow-lg border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">정보공개서, 가맹계약서 신규 제작, 등록</h3>
                  <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200">
                    정보공개서 및 가맹계약서 신규 제작부터 등록까지 원스톱 서비스
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-6 shadow-lg border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">가맹점 모집 영업 대행 (1차 방문 상담)</h3>
                  <p className="text-sm sm:text-base text-purple-700 dark:text-purple-200">
                    가맹점 모집 영업 대행은 방문 상담 후 심층 분석을 통해 수임 합니다
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h10a2 2 0 002-2V7a2 2 0 00-2-2H9m0 10V9a2 2 0 012-2h2m-6 8a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-900 dark:text-green-100 mb-2">분쟁조정 신청, 의견진술 대행</h3>
                  <p className="text-sm sm:text-base text-green-700 dark:text-green-200">
                    가맹사업 분쟁 발생 시 조정 신청 및 의견진술 전문 대행 서비스
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 전문가 소개 */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  전문가 정보
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  업계 최고 수준의 전문성과 경험을 보유한 전문가가 함께합니다
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto">
              <FadeInSection delay={300}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">심상민 가맹거래사</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 sm:mb-4">공정거래위원회 등록 제 657호</p>
                      <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        <p>• 가맹사업 법무 전문 경력</p>
                        <p>• 공정거래위원회 가맹사업 심사 전문가</p>
                        <p>• 한국가맹사업개발원·대구·경영,법률·대표·2년 6개월</p>
                        <p>• 분쟁 조정 전문가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 성과 섹션 */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  검증된 성과
                </h2>
                <p className="text-lg sm:text-xl opacity-90">
                  숫자로 증명하는 전문성
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <FadeInSection delay={200}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">5년</div>
                  <div className="text-base sm:text-lg opacity-90">전문 경력</div>
                </div>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</div>
                  <div className="text-base sm:text-lg opacity-90">고객 만족도</div>
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">657호</div>
                  <div className="text-base sm:text-lg opacity-90">가맹거래사</div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
      
      {/* 하단 고정 폼 */}
      <FixedBottomForm />
      
      {/* 하단 고정 폼을 위한 여백 */}
      <div className="h-36"></div>
    </div>
  );
}
