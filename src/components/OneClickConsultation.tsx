'use client';

import { useState } from 'react';
import { submitContactForm } from '../../lib/supabase';
import FadeInSection from './FadeInSection';

export default function OneClickConsultation() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      alert('이름과 전화번호를 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        name: name.trim(),
        phone: phone.trim(),
        message: '원클릭 상담 신청',
        type: 'quick_contact'
      });
      
      setSubmitSuccess(true);
      setName('');
      setPhone('');
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('상담 신청 오류:', error);
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-green-800 mb-2">상담 신청이 완료되었습니다!</h2>
                <p className="text-green-700 text-sm">
                  1시간 이내에 전문가가 직접 연락드리겠습니다.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              원클릭 상담 신청
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              정확한 조건 안내를 위해 간단한 정보를 남겨주세요.
            </p>
            <p className="text-sm text-blue-600 font-medium">
              *회원가입/정보수집 이외 아무런 비용이나 제약이 없습니다.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      상담 신청 중...
                    </div>
                  ) : (
                    '무료 상담 신청하기'
                  )}
                </button>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">상담 안내</h4>
                      <ul className="text-xs text-gray-600 space-y-0.5">
                        <li>• 평균 응답 시간: 1시간 이내</li>
                        <li>• 상담료는 완전 무료입니다</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 