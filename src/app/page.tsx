import Image from "next/image";
import Header from '../components/Header';
import FadeInSection from '../components/FadeInSection';
import OneClickConsultation from '../components/OneClickConsultation';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* 다크모드 토글 버튼 */}
      <ThemeToggle />
      
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="relative pt-16">
        {/* 히어로 섹션 */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    가맹거래사
                  </span>{" "}
                  전문 컨설팅
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  가맹사업 거래등록부터 법무까지<br />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">원스톱 전문 서비스</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">✨ 가맹거래사 1호</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">🏆 업계 최고 경력</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">💯 성공률 99%</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 서비스 소개 */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  전문 서비스 영역
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  가맹사업의 모든 단계를 전문적으로 지원합니다
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeInSection delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 shadow-lg border border-blue-200 dark:border-blue-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">가맹거래 등록</h3>
                  <p className="text-blue-700 dark:text-blue-200">
                    공정거래위원회 가맹거래사 등록부터 정보공개서 작성까지 완벽 지원
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl p-6 shadow-lg border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">법무 컨설팅</h3>
                  <p className="text-purple-700 dark:text-purple-200">
                    가맹계약서 검토, 분쟁 해결, 법적 리스크 관리 전문 상담
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-700 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">사업 전략</h3>
                  <p className="text-green-700 dark:text-green-200">
                    가맹사업 설계부터 브랜드 런칭까지 성공 전략 수립
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 전문가 소개 */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  가맹거래사 전문가
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  업계 최고 수준의 전문성과 경험을 보유한 전문가가 함께합니다
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto">
              <FadeInSection delay={300}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">김영진 가맹거래사</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">공정거래위원회 가맹거래사 1호</p>
                      <div className="space-y-2 text-gray-600 dark:text-gray-300">
                        <p>• 가맹사업 법무 전문 20년 경력</p>
                        <p>• 공정거래위원회 가맹사업 심의위원 역임</p>
                        <p>• 500개 이상 브랜드 가맹사업 런칭 성공</p>
                        <p>• 가맹사업 분쟁 해결 전문가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 상담 신청 폼 */}
        <OneClickConsultation />

        {/* 성과 섹션 */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  검증된 성과
                </h2>
                <p className="text-xl opacity-90">
                  숫자로 증명하는 전문성
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FadeInSection delay={200}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                  <div className="text-lg opacity-90">성공 런칭 브랜드</div>
                </div>
              </FadeInSection>

              <FadeInSection delay={400}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
                  <div className="text-lg opacity-90">등록 성공률</div>
                </div>
              </FadeInSection>

              <FadeInSection delay={600}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">20년</div>
                  <div className="text-lg opacity-90">전문 경력</div>
                </div>
              </FadeInSection>

              <FadeInSection delay={800}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">1호</div>
                  <div className="text-lg opacity-90">가맹거래사</div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
