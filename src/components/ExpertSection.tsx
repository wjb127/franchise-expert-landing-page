import FadeInSection from './FadeInSection';

export default function ExpertSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              전문 가맹거래사가 직접 상담해드립니다
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              공정거래위원회 등록 전문가가 가맹사업의 모든 단계를 안전하게 지원합니다
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={300} direction="up">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* 좌측 전문가 프로필 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                <FadeInSection delay={500} direction="left">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-6">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-blue-800 font-bold text-lg">심</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">가맹거래사 심상민</h3>
                      <p className="text-blue-200">공정거래위원회 등록 제 657호</p>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection delay={700} direction="left">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>정보공개서 신규 등록 전문가</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>가맹계약서 작성 및 검토</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>가맹점 모집 영업 대행</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>가맹사업 법무 컨설팅</span>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection delay={900} direction="left">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">전문가 메시지</h4>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      "안전하고 성공적인 가맹사업을 위해 법적 리스크를 최소화하고 
                      올바른 절차를 통해 사업을 시작할 수 있도록 도와드리겠습니다."
                    </p>
                  </div>
                </FadeInSection>
              </div>

              {/* 우측 신뢰성 지표 */}
              <div className="p-8">
                <FadeInSection delay={600} direction="right">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">신뢰성 지표</h4>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">92건</div>
                      <p className="text-gray-600 text-sm">총 거래 건수</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <p className="text-gray-600 text-sm">고객 만족도</p>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection delay={800} direction="right">
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">연락 가능 시간</span>
                      <span className="font-semibold text-gray-900">언제나 가능</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">평균 응답 시간</span>
                      <span className="font-semibold text-green-600">1시간 이내</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">회원 구분</span>
                      <span className="font-semibold text-blue-600">기업회원</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">세금계산서</span>
                      <span className="font-semibold text-gray-900">발행 가능</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">결제 전 상담</span>
                      <span className="font-semibold text-blue-600">전화상담 제공</span>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection delay={1000} direction="right">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-yellow-800">전문가 인증</span>
                    </div>
                    <p className="text-sm text-yellow-700">
                      공정거래위원회 공식 등록 가맹거래사로서 
                      법적 자격을 갖춘 전문가입니다.
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 서비스 프로세스 */}
        <FadeInSection delay={400}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              전문가 상담 프로세스
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <FadeInSection delay={600} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">상담 신청</h4>
                  <p className="text-sm text-gray-600">연락처 남기시면 1시간 이내 연락드립니다</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={800} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">전화 상담</h4>
                  <p className="text-sm text-gray-600">가맹사업 현황과 필요 서비스 파악</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={1000} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">맞춤 제안</h4>
                  <p className="text-sm text-gray-600">고객 상황에 최적화된 솔루션 제공</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={1200} direction="up">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">서비스 진행</h4>
                  <p className="text-sm text-gray-600">전문가와 함께 안전한 가맹사업 시작</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 