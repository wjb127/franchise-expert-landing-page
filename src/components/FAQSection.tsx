'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "가맹사업자 대출의 최대 한도는 어떻게 되나요?",
      answer: "일반적으로 최대 1억원까지 지원 가능하며, 업종별 소상공인의 경우 한도가 2배까지 확대됩니다. 신청자의 신용도, 사업계획, 담보 등을 종합적으로 검토하여 개별적으로 한도를 결정합니다."
    },
    {
      question: "대출 승인까지 얼마나 걸리나요?",
      answer: "서류가 완비된 경우 평균 24시간 내에 승인 결과를 통보드립니다. 단, 추가 서류나 현장 실사가 필요한 경우 2-3일 정도 소요될 수 있습니다. 급한 경우 우선 심사 서비스도 제공하고 있습니다."
    },
    {
      question: "어떤 서류가 필요한가요?",
      answer: "기본적으로 사업자등록증, 재무제표, 가맹계약서, 신분증이 필요합니다. 추가로 매출 증빙자료, 임대차계약서, 사업계획서 등이 필요할 수 있으며, 담당자가 개별적으로 안내드립니다."
    },
    {
      question: "금리는 어떻게 결정되나요?",
      answer: "기본 금리는 연 3.9%부터 시작하며, 신용등급, 사업 실적, 담보 여부 등에 따라 개별적으로 책정됩니다. 우수 가맹점이나 다점포 운영자의 경우 추가 우대 금리를 제공합니다."
    },
    {
      question: "중도상환수수료는 있나요?",
      answer: "3년 이내 중도상환시에만 수수료가 발생하며, 그 이후에는 수수료 없이 언제든 상환 가능합니다. 매출 연동 상환을 선택하신 경우 더욱 유연한 조건을 제공합니다."
    },
    {
      question: "신용등급이 낮아도 대출이 가능한가요?",
      answer: "신용등급이 다소 낮더라도 가맹사업의 안정성과 수익성을 종합적으로 검토하여 대출 가능성을 판단합니다. 담보나 보증인이 있는 경우 더욱 유리한 조건으로 진행 가능합니다."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            가맹사업자 대출에 대해 궁금한 점들을 확인해보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 bg-white rounded-lg border transition-all duration-200 hover:shadow-md ${
                  openFAQ === index ? 'border-blue-500 shadow-md' : 'border-gray-200'
                }`}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFAQ === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* 추가 문의 섹션 */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              전문 상담사가 1:1로 자세히 안내해드립니다
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">전화 상담</h4>
                <p className="text-sm text-gray-600 mb-2">평일 09:00 - 18:00</p>
                <p className="text-blue-600 font-semibold">1588-1234</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">카카오톡 상담</h4>
                <p className="text-sm text-gray-600 mb-2">24시간 언제든지</p>
                <p className="text-green-600 font-semibold">@가맹대출</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 