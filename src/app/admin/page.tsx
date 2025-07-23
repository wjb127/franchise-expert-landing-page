'use client';

import { useState, useEffect } from 'react';

interface ContactSubmission {
  id: number;
  name: string;
  phone: string;
  message: string | null;
  type: string;
  created_at: string;
}

interface DailyStat {
  date: string;
  total: number;
  quick_contact: number;
  full_form: number;
  displayDate: string;
}

interface DailyStatsResponse {
  success: boolean;
  data: DailyStat[];
  summary: {
    totalDays: number;
    totalSubmissions: number;
    quickContactCount: number;
    fullFormCount: number;
  };
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [weeklyCount, setWeeklyCount] = useState<number>(0);
  const [dailyStats, setDailyStats] = useState<DailyStat[]>([]);
  const [chartPeriod, setChartPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'kmong2025!') {
      setIsAuthenticated(true);
      setAuthError('');
      localStorage.setItem('admin_auth', 'true');
    } else {
      setAuthError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  // 페이지 로드 시 인증상태 확인
  useEffect(() => {
    const authStatus = localStorage.getItem('admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchSubmissions = async () => {
    console.log('=== 제출 데이터 조회 시작 ===');
    
    try {
      const response = await fetch('/api/admin/submissions');
      console.log('API 응답 상태 (제출 데이터):', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API 오류 응답 (제출 데이터):', errorData);
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      
      const result = await response.json();
      console.log('제출 데이터 조회 성공:', result.data?.length || 0, '건');
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error('API 응답 형식이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('제출 데이터 조회 오류:', error);
      throw error;
    }
  };

  const fetchWeeklyCount = async () => {
    console.log('=== 주간 카운트 조회 시작 ===');
    
    try {
      const response = await fetch('/api/admin/submissions?days=7');
      console.log('API 응답 상태 (주간 카운트):', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API 오류 응답 (주간 카운트):', errorData);
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      
      const result = await response.json();
      console.log('주간 카운트 조회 성공:', result.count, '건');
      
      if (result.success && typeof result.count === 'number') {
        return result.count;
      } else {
        throw new Error('API 응답 형식이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('주간 카운트 조회 오류:', error);
      return 0; // 카운트 오류는 0으로 기본값 설정
    }
  };

  const fetchDailyStats = async (period: 'daily' | 'weekly' | 'monthly' = 'daily') => {
    console.log('=== 통계 조회 시작 ===', period);
    
    try {
      let days: number;
      switch (period) {
        case 'daily':
          days = 7; // 최근 7일
          break;
        case 'weekly':
          days = 28; // 최근 4주
          break;
        case 'monthly':
          days = 365; // 최근 12개월
          break;
        default:
          days = 7;
      }
      
      const response = await fetch(`/api/admin/daily-stats?days=${days}&period=${period}`);
      console.log('API 응답 상태 (통계):', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API 오류 응답 (통계):', errorData);
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }
      
      const result: DailyStatsResponse = await response.json();
      console.log('통계 조회 성공:', result.data?.length || 0, '개');
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error('API 응답 형식이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('통계 조회 오류:', error);
      return []; // 통계 오류는 빈 배열로 기본값 설정
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('=== 대시보드 데이터 로딩 시작 ===');
      
      const [submissionsData, weeklyCountData, dailyStatsData] = await Promise.all([
        fetchSubmissions(),
        fetchWeeklyCount(),
        fetchDailyStats(chartPeriod)
      ]);
      
      setSubmissions(submissionsData);
      setWeeklyCount(weeklyCountData);
      setDailyStats(dailyStatsData);
      console.log('✅ 대시보드 데이터 로딩 완료');
    } catch (err) {
      console.error('=== 대시보드 데이터 로딩 오류 ===');
      console.error('오류 타입:', err?.constructor?.name);
      console.error('오류 메시지:', err instanceof Error ? err.message : err);
      
      const errorMessage = err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.';
      setError(errorMessage);
    } finally {
      setLoading(false);
      console.log('=== 대시보드 데이터 로딩 완료 ===');
    }
  };

  const updateChartPeriod = async (period: 'daily' | 'weekly' | 'monthly') => {
    console.log(`📊 차트 기간 변경: ${period}`);
    setChartPeriod(period);
    
    try {
      const newDailyStats = await fetchDailyStats(period);
      setDailyStats(newDailyStats);
    } catch (error) {
      console.error('차트 데이터 업데이트 오류:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
      
      // 30초마다 자동 새로고침
      const interval = setInterval(() => {
        console.log('⏰ 자동 새로고침 실행');
        fetchData();
      }, 30000);
      
      return () => clearInterval(interval);
    }
  }, [chartPeriod, isAuthenticated]);

  const filteredSubmissions = submissions;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full_form':
        return '상세 문의';
      case 'quick_contact':
        return '간편 문의';
      case 'fixed_bottom':
        return '하단 폼';
      default:
        return '일반 문의';
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'full_form':
        return 'bg-blue-100 text-blue-800';
      case 'quick_contact':
        return 'bg-green-100 text-green-800';
      case 'fixed_bottom':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // 차트용 최대값 계산
  const maxValue = Math.max(...dailyStats.map(stat => stat.total), 1);

  // 인증되지 않은 경우 로그인 화면 표시
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">관리자 인증</h2>
            <p className="text-gray-600 mt-2">대시보드 접속을 위해 비밀번호를 입력하세요</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            
            {authError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-md">
                <p className="text-red-700 text-sm">{authError}</p>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-gray-600">데이터를 불러오는 중...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <div className="text-center">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">오류 발생</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <div className="space-y-2">
              <button
                onClick={fetchData}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                다시 시도
              </button>
              <p className="text-xs text-gray-500">
                RLS 오류가 지속되면 브라우저 콘솔을 확인하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">가맹거래사 상담 문의 관리</h1>
              <p className="text-gray-600 mt-1">실시간 상담 신청 현황을 확인할 수 있습니다</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  console.log('🔄 수동 새로고침 실행');
                  fetchData();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>새로고침</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>로그아웃</span>
              </button>
            </div>
          </div>
        </div>

        {/* 문의 현황 차트 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">문의 현황</h3>
              <p className="text-sm text-gray-600">
                {chartPeriod === 'daily' && '최근 7일간 일별 문의 추이'}
                {chartPeriod === 'weekly' && '최근 4주간 주별 문의 추이'}
                {chartPeriod === 'monthly' && '최근 12개월간 월별 문의 추이'}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => updateChartPeriod('daily')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  chartPeriod === 'daily' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                일별
              </button>
              <button
                onClick={() => updateChartPeriod('weekly')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  chartPeriod === 'weekly' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                주별
              </button>
              <button
                onClick={() => updateChartPeriod('monthly')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  chartPeriod === 'monthly' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                월별
              </button>
            </div>
          </div>
          
          {dailyStats.length > 0 ? (
            <div className="relative">
              {/* 차트 영역 */}
              <div className="flex items-end justify-between h-48 border-b border-l border-gray-200 p-4 mb-8">
                {dailyStats.map((stat, index) => {
                  const barHeight = maxValue > 0 ? (stat.total / maxValue) * 160 : 0;
                  
                  return (
                    <div key={stat.date} className="flex flex-col items-center group">
                      {/* 막대 그래프 */}
                      <div className="relative mb-2 flex flex-col items-center">
                        {/* 전체 막대 */}
                        <div 
                          className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm hover:from-blue-600 hover:to-blue-500 transition-all duration-200 relative group-hover:shadow-lg"
                          style={{ height: `${barHeight}px`, minHeight: stat.total > 0 ? '8px' : '0px' }}
                        >
                        </div>
                        
                        {/* 호버 시 상세 정보 */}
                        <div className="invisible group-hover:visible absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-20">
                          <div>문의: {stat.total}건</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                        
                        {/* 값 표시 */}
                        {stat.total > 0 && (
                          <div className="text-xs font-medium text-gray-700 mt-1">
                            {stat.total}
                          </div>
                        )}
                      </div>
                      
                      {/* 날짜 레이블 */}
                      <div className="text-xs text-gray-500 text-center w-12">
                        {stat.displayDate}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* 범례 */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-t from-blue-500 to-blue-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-600">
                    {chartPeriod === 'daily' && '일별 문의'}
                    {chartPeriod === 'weekly' && '주별 문의'}
                    {chartPeriod === 'monthly' && '월별 문의'}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-gray-500">차트 데이터가 없습니다.</p>
            </div>
          )}
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">일간 문의</p>
                <p className="text-2xl font-bold text-gray-900">
                  {dailyStats.length > 0 ? dailyStats[dailyStats.length - 1].total : 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">주간 문의</p>
                <p className="text-2xl font-bold text-gray-900">{weeklyCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">월간 문의</p>
                <p className="text-2xl font-bold text-gray-900">
                  {submissions.filter(s => {
                    const date = new Date(s.created_at);
                    const now = new Date();
                    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    return date >= monthAgo;
                  }).length}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* 문의 목록 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">문의 목록</h3>
          </div>
          
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-500">아직 문의가 없습니다.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      이름
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      전화번호
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      문의 시간
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      작업
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{submission.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(submission.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          상세보기
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* 상세보기 모달 */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">문의 상세 정보</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">이름</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.name}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">전화번호</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.phone}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">문의 유형</label>
                  <span className={`inline-flex mt-1 px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadgeColor(selectedSubmission.type)}`}>
                    {getTypeLabel(selectedSubmission.type)}
                  </span>
                </div>
                
                {selectedSubmission.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">문의 내용</label>
                    <p className="mt-1 text-sm text-gray-900 p-3 bg-gray-50 rounded-lg">
                      {selectedSubmission.message}
                    </p>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">문의 시간</label>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(selectedSubmission.created_at)}</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 