import FadeInSection from './FadeInSection';

export default function ServiceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              가맹거래사 전문 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              공정거래위원회 등록 가맹거래사가 제공하는 가맹사업의 모든 법적 절차를 안전하게 지원합니다
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 서비스 카드 1 */}
          <FadeInSection delay={200} direction="up">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">정보공개서 등록</h3>
              <p className="text-gray-600 mb-6">
                가맹사업 시작을 위한 필수 서류인 정보공개서를 
                공정거래위원회에 신규 등록해드립니다. 
                법적 요구사항을 완벽하게 충족하여 안전한 사업 시작을 보장합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  공정거래위원회 신규 등록
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  법적 요구사항 완벽 대응
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  전문가 검토 및 승인
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* 서비스 카드 2 */}
          <FadeInSection delay={400} direction="up">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">가맹계약서 작성</h3>
              <p className="text-gray-600 mb-6">
                가맹점주와 가맹본부 간의 권리와 의무를 명확히 하는 
                가맹계약서를 전문적으로 작성하고 검토해드립니다. 
                분쟁 예방과 상호 이익을 보장하는 계약서를 제공합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  법무 전문가 작성
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  분쟁 예방 조항 포함
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  맞춤형 계약 조건
                </li>
              </ul>
            </div>
          </FadeInSection>

          {/* 서비스 카드 3 */}
          <FadeInSection delay={600} direction="up">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">가맹점 모집 대행</h3>
              <p className="text-gray-600 mb-6">
                성공적인 가맹점 모집을 위한 전문적인 영업 대행 서비스를 제공합니다. 
                체계적인 모집 전략과 전문 영업팀을 통해 
                우수한 가맹점주를 발굴하고 모집합니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  전문 영업팀 투입
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  체계적 모집 전략
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  우수 가맹점주 발굴
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>

        {/* 추가 정보 섹션 */}
        <FadeInSection delay={800}>
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                왜 가맹거래사 심상민을 선택해야 할까요?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FadeInSection delay={1000} direction="up">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">공식 인증</h4>
                  <p className="text-sm text-gray-600">공정거래위원회 공식 등록 제 657호 가맹거래사</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={1200} direction="up">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">풍부한 경험</h4>
                  <p className="text-sm text-gray-600">92건의 성공적인 거래와 100% 고객 만족도</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={1400} direction="up">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">신속한 대응</h4>
                  <p className="text-sm text-gray-600">평균 1시간 이내 응답, 언제나 연락 가능</p>
                </div>
              </FadeInSection>
              <FadeInSection delay={1600} direction="up">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">종합 서비스</h4>
                  <p className="text-sm text-gray-600">등록부터 모집까지 원스톱 서비스 제공</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 