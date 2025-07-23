'use client';

import { useState } from 'react';

export default function FixedBottomForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      alert('이름과 연락처를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const submitData = {
        name: name.trim(),
        phone: phone.trim(),
        message: '[하단 고정폼] 빠른 상담 신청',
        type: 'fixed_bottom'
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
      <div className="container mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-auto md:flex-shrink-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                무료 상담 신청
              </h3>
            </div>
            <p className="text-white text-opacity-90 text-sm leading-relaxed">
              가맹사업 전문가가 1시간 이내 연락드립니다<br/>
              <span className="text-yellow-300 font-medium">*완전 무료 상담 서비스</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 flex-1 w-full">
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 border-2 border-white border-opacity-30 rounded-xl focus:ring-2 focus:ring-white focus:border-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 font-medium transition-all duration-200 hover:bg-opacity-100 focus:bg-opacity-100"
                required
              />
            </div>
            
            <div className="flex-1">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="연락처를 입력하세요"
                className="w-full px-4 py-3 border-2 border-white border-opacity-30 rounded-xl focus:ring-2 focus:ring-white focus:border-white bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 font-medium transition-all duration-200 hover:bg-opacity-100 focus:bg-opacity-100"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-white text-blue-600 font-bold py-3 px-8 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                  신청 중...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  무료 상담 신청
                </div>
              )}
            </button>
            
            <a
              href="https://kmong.com/@%EA%B0%80%EB%A7%B9%EA%B1%B0%EB%9E%98%EC%82%AC%EC%8B%AC%EC%83%81%EB%AF%BC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-white bg-opacity-20 border-2 border-white border-opacity-50 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-opacity-30"
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                크몽에서 문의
              </div>
            </a>
          </div>
        </form>

        {showSuccess && (
          <div className="absolute top-0 left-0 right-0 transform -translate-y-full bg-green-500 text-white px-4 py-3 text-center font-medium shadow-lg">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              상담 신청이 완료되었습니다! 1시간 이내 연락드리겠습니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}