'use client';

import { useState } from 'react';

export default function FixedBottomForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      alert('이름과 연락처를 입력해주세요.');
      return;
    }

    if (!privacyAgreed) {
      alert('개인정보 처리방침에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const submitData = {
        name: name.trim(),
        phone: phone.trim(),
        message: '[하단 고정폼] 빠른 상담 신청',
        type: 'quick_contact'
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setShowSuccess(true);
        setName('');
        setPhone('');
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        alert('이미 신청하셨습니다. 곧 연락드리겠습니다.');
      }
    } catch (error) {
      console.error('제출 오류:', error);
      alert('이미 신청하셨습니다. 곧 연락드리겠습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 shadow-2xl z-50">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4">
            {/* 좌측 제목 영역 */}
            <div className="w-full lg:w-auto lg:flex-shrink-0 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">무료 상담 신청</h3>
              </div>
              <p className="text-white text-opacity-90 text-xs hidden sm:block">
                1시간 이내 연락드립니다
              </p>
            </div>

            {/* 입력 필드 영역 */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-1 w-full">
              <div className="flex-1">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력하세요"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 font-medium transition-all duration-200 hover:bg-opacity-100 focus:bg-opacity-100 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="flex-1">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="연락처를 입력하세요"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 font-medium transition-all duration-200 hover:bg-opacity-100 focus:bg-opacity-100 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-600 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    신청 중...
                  </div>
                ) : (
                  "무료 상담 신청"
                )}
              </button>
              
              <a
                href="https://kmong.com/@%EA%B0%80%EB%A7%B9%EA%B1%B0%EB%9E%98%EC%82%AC%EC%8B%AC%EC%83%81%EB%AF%BC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 border-2 border-white border-opacity-50 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-opacity-30 text-center text-sm sm:text-base"
              >
                크몽에서 문의
              </a>
            </div>
          </div>

          {/* 체크박스 */}
          <div className="flex justify-center mt-2 sm:mt-0">
            <label className="flex items-center text-white text-xs">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                className="mr-1 sm:mr-2 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1"
              />
              <span>
                <a 
                  href="/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-yellow-300 transition-colors"
                >
                  개인정보 처리방침
                </a>
                에 동의합니다. <span className="text-red-300">*</span>
              </span>
            </label>
          </div>
        </form>

        {showSuccess && (
          <div className="absolute top-0 left-0 right-0 transform -translate-y-full bg-green-500 text-white px-3 sm:px-4 py-2 sm:py-3 text-center font-medium shadow-lg">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm">상담 신청이 완료되었습니다! 1시간 이내 연락드리겠습니다.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}