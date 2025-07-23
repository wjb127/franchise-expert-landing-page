'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    hasExperience: '',
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('개인정보 수집/이용/제공에 동의해주세요.');
      return;
    }
    // 여기서 실제 폼 제출 로직을 구현
    console.log('폼 데이터:', formData);
    setIsSubmitted(true);
    
    // 3초 후 폼 리셋
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        businessType: '',
        hasExperience: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-blue-900 rounded-xl p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* 좌측 텍스트 */}
            <div className="text-white mb-6 lg:mb-0 lg:mr-8">
              <h3 className="text-xl font-bold mb-2">원클릭 상담 신청</h3>
              <p className="text-blue-100 text-sm">
                정확한 조건 안내를 위해 간단한 정보를 남겨주세요.<br/>
                <span className="text-red-300">*회원가입/정보수집 이외 아무런 비용이나 제약이 없습니다.</span>
              </p>
            </div>

            {/* 우측 폼 */}
            <div className="flex-shrink-0">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 min-w-[400px] max-w-md">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="이름"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="연락처(-없이 입력)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                        required
                      >
                        <option value="">업종 선택</option>
                        <option value="restaurant">외식업</option>
                        <option value="cafe">카페/디저트</option>
                        <option value="retail">소매업</option>
                        <option value="service">서비스업</option>
                        <option value="education">교육업</option>
                        <option value="beauty">미용업</option>
                        <option value="fitness">헬스/피트니스</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <div>
                      <select
                        name="hasExperience"
                        value={formData.hasExperience}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                        required
                      >
                        <option value="">사업경험</option>
                        <option value="beginner">신규창업</option>
                        <option value="experienced">기존사업자</option>
                        <option value="multiple">다점포운영</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-start text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-0.5 mr-2 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <span>
                        개인정보 수집/이용/제공 동의{' '}
                        <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                          [더보기]
                        </Link>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-sm"
                  >
                    신청
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-lg p-6 min-w-[400px] max-w-md text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">신청이 완료되었습니다!</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    영업시간 내에 전문 상담사가<br/>
                    연락드리겠습니다.
                  </p>
                  <p className="text-xs text-gray-500">
                    평일 09:00 - 18:00
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 