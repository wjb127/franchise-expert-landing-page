'use client';

import { useState } from 'react';
import { submitContactForm } from '../../lib/supabase';

export default function ContactForm() {
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
        message: '하단 고정 원클릭 상담 신청',
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
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">상담 신청이 완료되었습니다! 1시간 이내에 연락드리겠습니다.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            {/* 좌측 텍스트 */}
            <div className="lg:flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-900 mb-1">원클릭 상담 신청</h3>
              <p className="text-sm text-gray-600 mb-1">정확한 조건 안내를 위해 간단한 정보를 남겨주세요.</p>
              <p className="text-xs text-blue-600 font-medium">*회원가입/정보수집 이외 아무런 비용이나 제약이 없습니다.</p>
            </div>

            {/* 우측 폼 */}
            <div className="lg:flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-2 lg:w-96">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="전화번호"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                      신청중
                    </div>
                  ) : (
                    '무료상담'
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 