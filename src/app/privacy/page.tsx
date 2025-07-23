export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 헤더 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">개인정보 처리방침</h1>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              돌아가기
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            가맹거래사 전문 컨설팅 서비스 이용과 관련된 개인정보 처리방침입니다.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            시행일자: 2024년 7월 23일
          </p>
        </div>

        {/* 본문 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="prose max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. 개인정보의 처리목적</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                가맹거래사 심상민(이하 "개인사업자")은 다음의 목적을 위하여 개인정보를 처리합니다. 
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• 상담 서비스 제공 및 계약 이행</li>
                  <li>• 서비스 문의사항 처리 및 고객 응대</li>
                  <li>• 가맹사업 컨설팅 서비스 제공</li>
                  <li>• 가맹계약서 및 정보공개서 작성 서비스 제공</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. 처리하는 개인정보의 항목</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">개인사업자는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">상담 신청 관련</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 필수항목: 이름, 연락처(전화번호)</li>
                  <li>• 선택항목: 상담 요청 내용</li>
                  <li>• 자동 수집: 서비스 이용 기록, 접속 로그, IP 주소</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. 개인정보의 처리 및 보유기간</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                개인사업자는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">상담 및 문의 관련 개인정보</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 처리목적: 상담 서비스 제공, 문의사항 처리</li>
                  <li>• 보유기간: 3년 (상담 완료 후)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                개인사업자는 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 
                정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. 개인정보 처리의 위탁</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                개인사업자는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">웹사이트 운영 및 데이터 저장</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 위탁받는 자: Supabase Inc.</li>
                  <li>• 위탁하는 업무의 내용: 개인정보 저장 및 관리</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                정보주체는 개인사업자에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-6">
                <li>• 개인정보 처리정지 요구</li>
                <li>• 개인정보 열람요구</li>
                <li>• 개인정보 정정·삭제요구</li>
                <li>• 개인정보 처리정지 요구</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. 개인정보 보호책임자</h2>
              <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">개인정보 보호책임자</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 성명: 심상민</li>
                  <li>• 직책: 가맹거래사</li>
                  <li>• 연락처: 크몽 메시지를 통한 문의</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. 개인정보처리방침의 변경</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                이 개인정보처리방침은 2024년 7월 23일부터 적용됩니다. 
                법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 
                변경사항의 시행 7일 전부터 웹사이트의 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. 개인정보의 안전성 확보조치</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                개인사업자는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-6">
                <li>• 개인정보에 대한 접근 제한</li>
                <li>• 접근통제시스템 설치 및 접근권한의 제한·조정</li>
                <li>• 개인정보를 취급하는 직원의 최소화 및 교육</li>
                <li>• 개인정보처리시스템 등의 접근권한 관리</li>
              </ul>
            </section>

          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            돌아가기
          </button>
        </div>
      </div>
    </div>
  );
} 