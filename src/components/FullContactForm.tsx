'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitContactForm } from '../../lib/supabase';

export default function FullContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    hasExperience: '',
    message: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      alert('개인정보 수집/이용/제공에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const detailedMessage = `
이메일: ${formData.email}
업종: ${formData.businessType}
사업경험: ${formData.hasExperience}
마케팅 수신 동의: ${formData.agreeToMarketing ? '동의' : '미동의'}

상세 문의내용:
${formData.message}
      `.trim();
      
      await submitContactForm({
        name: formData.name,
        phone: formData.phone,
        message: detailedMessage,
        type: 'full_form'
      });

      setIsSubmitted(true);

    } catch (err) {
      console.error('폼 제출 오류:', err);
      setError('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문의가 성공적으로 접수되었습니다!</h2>
            <p className="text-lg text-gray-600 mb-8">
              가맹거래사 심상민이 빠른 시일 내에 연락드리겠습니다.<br/>
              평균 응답 시간은 1시간 이내입니다.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  businessType: '',
                  hasExperience: '',
                  message: '',
                  agreeToTerms: false,
                  agreeToMarketing: false
                });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              새 문의 작성
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">상세 문의하기</h2>
            <p className="text-xl text-gray-600">
              가맹사업과 관련된 궁금한 점을 자세히 문의해주세요
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    업종 *
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">업종을 선택해주세요</option>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    사업 경험 *
                  </label>
                  <select
                    name="hasExperience"
                    value={formData.hasExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">사업 경험을 선택해주세요</option>
                    <option value="beginner">신규창업 예정</option>
                    <option value="experienced">기존사업자</option>
                    <option value="multiple">다점포 운영</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  상세 문의내용
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="가맹사업과 관련하여 궁금한 점이나 상담받고 싶은 내용을 자세히 작성해주세요."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-600">
                    [필수] 개인정보 수집/이용/제공에 동의합니다.{' '}
                    <Link href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                      개인정보처리방침 보기
                    </Link>
                  </span>
                </label>
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToMarketing"
                    checked={formData.agreeToMarketing}
                    onChange={handleInputChange}
                    className="mt-1 mr-3 text-blue-600 focus:ring-blue-500"
                    disabled={isSubmitting}
                  />
                  <span className="text-sm text-gray-600">
                    [선택] 마케팅 정보 수신에 동의합니다. (신규 서비스, 이벤트 정보 등)
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '문의 접수 중...' : '문의 접수하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 