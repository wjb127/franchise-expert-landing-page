import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 헤더 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">개인정보 처리방침</h1>
            <Link 
              href="/"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              홈으로 돌아가기
            </Link>
          </div>
          <p className="text-gray-600">
            가맹사업자 대출 서비스 이용과 관련된 개인정보 처리방침입니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            시행일자: 2024년 1월 1일
          </p>
        </div>

        {/* 본문 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 개인정보 수집 및 이용 목적</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3">가. 서비스 제공 목적</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 가맹사업자 대출 상담 및 안내 서비스 제공</li>
                  <li>• 대출 심사 및 승인 업무 처리</li>
                  <li>• 고객 맞춤형 금융 상품 추천</li>
                  <li>• 서비스 이용 현황 분석 및 개선</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">나. 마케팅 및 광고 활용</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 신규 서비스 및 상품 정보 안내</li>
                  <li>• 이벤트 및 프로모션 정보 제공</li>
                  <li>• 고객 만족도 조사 및 설문</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 수집하는 개인정보 항목</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">필수 수집 항목</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                  <li>• 성명</li>
                  <li>• 연락처(휴대폰번호)</li>
                  <li>• 사업 업종</li>
                  <li>• 사업 경험</li>
                  <li>• 서비스 이용 기록</li>
                  <li>• 접속 로그, IP 주소</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 개인정보의 보유 및 이용기간</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">원칙</h3>
                  <p className="text-gray-600">
                    개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">보유기간</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>상담 신청 정보:</strong> 3년 (금융업 관련 법령에 따른 보존)</li>
                    <li>• <strong>서비스 이용 기록:</strong> 1년</li>
                    <li>• <strong>마케팅 동의 정보:</strong> 동의 철회시까지</li>
                    <li>• <strong>쿠키 및 로그 기록:</strong> 1년</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 
                  다만, 아래의 경우에는 예외로 합니다.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 이용자가 사전에 동의한 경우</li>
                  <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>• 대출 심사를 위한 금융기관 및 신용정보 조회기관</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 개인정보의 처리위탁</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  보다 나은 서비스 제공을 위해 개인정보 처리업무를 외부 전문업체에 위탁하고 있습니다.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">수탁업체</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">위탁업무</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">보유기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">SMS 발송업체</td>
                        <td className="border border-gray-300 px-4 py-2">상담 안내 문자 발송</td>
                        <td className="border border-gray-300 px-4 py-2">발송 완료 즉시 삭제</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">콜센터 운영업체</td>
                        <td className="border border-gray-300 px-4 py-2">전화 상담 서비스</td>
                        <td className="border border-gray-300 px-4 py-2">상담 완료 후 1년</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 이용자의 권리와 행사방법</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">귀하의 권리</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 개인정보 처리현황 통지 요구</li>
                    <li>• 개인정보 열람 요구</li>
                    <li>• 개인정보 정정·삭제 요구</li>
                    <li>• 개인정보 처리정지 요구</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">권리 행사 방법</h3>
                  <p className="text-gray-600 mb-2">
                    아래 연락처로 요청하시면 지체없이 조치하겠습니다.
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 전화: 1588-1234</li>
                    <li>• 이메일: privacy@example.com</li>
                    <li>• 운영시간: 평일 09:00 - 18:00</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">개인정보 보호책임자</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 성명: 홍길동</li>
                      <li>• 직책: 개인정보보호팀장</li>
                      <li>• 전화: 1588-1234</li>
                      <li>• 이메일: privacy@example.com</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-3">개인정보 보호담당자</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 성명: 김철수</li>
                      <li>• 직책: 개인정보보호팀원</li>
                      <li>• 전화: 1588-1235</li>
                      <li>• 이메일: privacy2@example.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 개인정보 처리방침 변경</h2>
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-gray-600">
                  이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. 기타</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700">
                  개인정보 침해신고센터, 대검찰청 사이버범죄수사단, 경찰청 사이버테러대응센터 등에 개인정보 침해 신고가 가능합니다.
                </p>
                <ul className="mt-4 space-y-1 text-gray-600 text-sm">
                  <li>• 개인정보 침해신고센터: privacy.go.kr (국번없이 182)</li>
                  <li>• 대검찰청 사이버범죄수사단: www.spo.go.kr (국번없이 1301)</li>
                  <li>• 경찰청 사이버테러대응센터: cyberbureau.police.go.kr (국번없이 182)</li>
                </ul>
              </div>
            </section>

          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 