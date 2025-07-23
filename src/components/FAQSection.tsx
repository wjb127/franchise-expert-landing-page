'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeInSection from './FadeInSection';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "가맹거래사가 하는 일은 무엇인가요?",
      answer: "가맹거래사는 공정거래위원회에 등록된 전문가로서 정보공개서 작성 및 등록, 가맹계약서 검토, 가맹점 모집 대행 등 가맹사업과 관련된 모든 법적 절차를 지원합니다. 가맹본부와 가맹점주 간의 공정한 거래를 위해 전문적인 컨설팅을 제공합니다."
    },
    {
      question: "정보공개서 등록은 왜 필요한가요?",
      answer: "가맹사업진흥에 관한 법률에 따라 가맹본부는 가맹점 모집 전에 반드시 정보공개서를 공정거래위원회에 등록해야 합니다. 이는 가맹점주에게 정확한 정보를 제공하고 투명한 거래를 보장하기 위한 법적 의무사항입니다."
    },
    {
      question: "서비스 비용은 어떻게 되나요?",
      answer: "서비스 비용은 업무 범위와 복잡도에 따라 달라집니다. 정보공개서 등록, 가맹계약서 작성, 가맹점 모집 대행 등 각 서비스별로 상이하며, 무료 상담을 통해 정확한 견적을 제공해드립니다. 결제 전 전화상담을 통해 자세한 내용을 안내받으실 수 있습니다."
    },
    {
      question: "작업 기간은 얼마나 걸리나요?",
      answer: "일반적으로 정보공개서 등록은 서류 준비 완료 후 2-3주, 가맹계약서 작성은 1-2주 정도 소요됩니다. 단, 사업의 복잡도와 제출 서류의 완성도에 따라 기간이 달라질 수 있으며, 정확한 일정은 상담을 통해 안내해드립니다."
    },
    {
      question: "어떤 업종이든 가능한가요?",
      answer: "대부분의 업종에서 가맹사업이 가능하지만, 일부 법적 제한이 있는 업종(금융업, 의료업 등)은 별도 검토가 필요합니다. 외식업, 서비스업, 소매업, 교육업 등 다양한 업종에서 풍부한 경험을 보유하고 있어 맞춤형 서비스를 제공할 수 있습니다."
    },
    {
      question: "사후 관리 서비스도 제공하나요?",
      answer: "네, 등록 완료 후에도 지속적인 사후 관리 서비스를 제공합니다. 정보공개서 변경등록, 가맹계약서 수정, 분쟁 발생시 법적 조언 등을 통해 성공적인 가맹사업 운영을 지원합니다."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              가맹거래사 서비스에 대해 궁금한 점들을 확인해보세요
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={200 + index * 100} direction="up">
              <div className="mb-4">
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
            </FadeInSection>
          ))}
        </div>

        {/* 추가 문의 섹션 */}
        <FadeInSection delay={1000}>
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                더 궁금한 점이 있으신가요?
              </h3>
              <p className="text-gray-600 mb-6">
                가맹거래사 심상민이 직접 1:1로 자세히 상담해드립니다
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <FadeInSection delay={1200} direction="up">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화 상담</h4>
                    <p className="text-sm text-gray-600 mb-2">평일 09:00 - 18:00</p>
                    <p className="text-blue-600 font-semibold">연락처는 하단 폼으로</p>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={1400} direction="up">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">상세 문의</h4>
                    <p className="text-sm text-gray-600 mb-2">24시간 접수 가능</p>
                    <Link href="/contact" className="text-green-600 font-semibold hover:text-green-700">
                      문의 작성하기
                    </Link>
                  </div>
                </FadeInSection>
              </div>

              <FadeInSection delay={1600}>
                <div className="text-center">
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    상세 문의하기
                  </Link>
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 