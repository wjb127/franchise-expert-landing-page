'use client';

import { useState } from 'react';

export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0">
        {/* 기하학적 도형들 */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500 transform rotate-45 opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-400 transform rotate-12 opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-1 bg-red-500 transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-28 h-1 bg-orange-400 transform -rotate-45 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          {/* 상단 뱃지 */}
          <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2 mb-8 border border-white border-opacity-30">
            <span className="text-sm font-medium">공정거래위원회 등록 제 657호 가맹거래사</span>
          </div>

          {/* 메인 타이틀 */}
          <div className="mb-8">
            <p className="text-yellow-300 text-lg mb-4 font-medium">전문 가맹거래사 심상민</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              안전한 가맹사업 시작
            </h1>
          </div>

          {/* 일러스트레이션 영역 */}
          <div className="flex justify-center items-end mb-12 space-x-8">
            {/* 사업자 1 */}
            <div className="text-center">
              <div className="w-20 h-24 bg-blue-600 rounded-t-full mb-2 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-300 rounded-full"></div>
                <div className="absolute top-8 left-2 w-4 h-8 bg-orange-400 rounded-lg transform rotate-12"></div>
              </div>
              <div className="w-24 h-16 bg-blue-700 rounded-lg"></div>
            </div>

            {/* 사업자 2 */}
            <div className="text-center">
              <div className="w-20 h-24 bg-orange-500 rounded-t-full mb-2 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-200 rounded-full"></div>
                <div className="absolute top-8 right-2 w-4 h-8 bg-red-500 rounded-lg transform -rotate-12"></div>
              </div>
              <div className="w-24 h-16 bg-orange-600 rounded-lg"></div>
            </div>

            {/* 사업자 3 */}
            <div className="text-center">
              <div className="w-20 h-24 bg-blue-600 rounded-t-full mb-2 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-300 rounded-full"></div>
                <div className="absolute top-8 left-2 w-4 h-8 bg-orange-400 rounded-lg transform rotate-45"></div>
              </div>
              <div className="w-24 h-16 bg-blue-700 rounded-lg"></div>
            </div>

            {/* 사업자 4 */}
            <div className="text-center">
              <div className="w-20 h-24 bg-white rounded-t-full mb-2 relative">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-300 rounded-full"></div>
                <div className="absolute top-8 right-2 w-4 h-8 bg-orange-400 rounded-lg transform rotate-45"></div>
              </div>
              <div className="w-24 h-16 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          {/* 통계 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-800 bg-opacity-80 rounded-lg p-6 border border-blue-600">
              <h3 className="text-white text-lg font-medium mb-2">총 거래 건수</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold text-white">92</span>
                <span className="text-lg text-blue-200 ml-1">건</span>
              </div>
            </div>

            <div className="bg-blue-800 bg-opacity-80 rounded-lg p-6 border border-blue-600">
              <h3 className="text-white text-lg font-medium mb-2">고객 만족도</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold text-white">100</span>
                <span className="text-lg text-blue-200 ml-1">%</span>
              </div>
            </div>

            <div className="bg-blue-800 bg-opacity-80 rounded-lg p-6 border border-blue-600">
              <h3 className="text-white text-lg font-medium mb-2">평균 응답 시간</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-3xl font-bold text-white">1시간</span>
                <span className="text-lg text-blue-200 ml-1">이내</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 