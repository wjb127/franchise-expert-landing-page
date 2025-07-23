'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== ContactForm 제출 시작 ===');
    console.log('입력된 데이터:', { name: name.trim(), phone: phone.trim() });
    
    if (!name.trim() || !phone.trim()) {
      console.log('유효성 검사 실패: 빈 필드 존재');
      alert('이름과 전화번호를 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    console.log('제출 상태를 true로 변경');
    
    try {
      const submitData = {
        name: name.trim(),
        phone: phone.trim(),
        message: '하단 고정 원클릭 상담 신청',
        type: 'quick_contact'
      };
      
      console.log('API로 전송할 데이터:', submitData);
      console.log('API 호출 시작: /api/contact');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });
      
      console.log('API 응답 상태:', response.status);
      console.log('API 응답 headers:', Object.fromEntries(response.headers.entries()));
      
      const result = await response.json();
      console.log('API 응답 데이터:', result);
      
      if (response.ok && result.success) {
        console.log('제출 성공!');
        setSubmitSuccess(true);
        setName('');
        setPhone('');
        
        setTimeout(() => {
          console.log('성공 메시지 자동 숨김');
          setSubmitSuccess(false);
        }, 3000);
      } else {
        console.error('API 응답 오류:', result);
        const errorMessage = result.error || '알 수 없는 오류가 발생했습니다.';
        alert(`상담 신청 중 오류가 발생했습니다: ${errorMessage}`);
        
        if (result.details) {
          console.error('상세 오류 정보:', result.details);
        }
      }
    } catch (error) {
      console.error('=== ContactForm 네트워크/기타 오류 ===');
      console.error('오류 타입:', error?.constructor?.name);
      console.error('오류 메시지:', error instanceof Error ? error.message : error);
      console.error('오류 스택:', error instanceof Error ? error.stack : 'No stack trace');
      
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    } finally {
      console.log('제출 상태를 false로 변경');
      setIsSubmitting(false);
      console.log('=== ContactForm 제출 완료 ===');
    }
  };

  if (submitSuccess) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white py-3 px-4 shadow-lg z-50">
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
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            {/* 좌측 텍스트 */}
            <div className="lg:flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">원클릭 상담 신청</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">정확한 조건 안내를 위해 간단한 정보를 남겨주세요.</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">*회원가입/정보수집 이외 아무런 비용이나 제약이 없습니다.</p>
            </div>

            {/* 우측 폼 */}
            <div className="lg:flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-2 lg:w-96">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                  required
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="전화번호"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white font-bold px-4 py-2 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm whitespace-nowrap"
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