import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import FloatingButton from '../components/layout/FloatingButton';
import CoinList from '../components/home/CoinList';
import { CoinDetail } from '../types/coin';

const Home: React.FC = () => {
  // 임시 데이터
  const coins: CoinDetail[] = [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 42345000,
      change: 2.34,
      volume: 1234567890,
      marketCap: 820000000000000,
      high: 42500000,
      low: 41800000,
      icon: 'fab fa-bitcoin',
      chartData: [35, 30, 25, 30, 35, 20, 25, 30, 15, 20, 25],
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2345000,
      change: -1.23,
      volume: 987654321,
      marketCap: 280000000000000,
      high: 2400000,
      low: 2300000,
      icon: 'fab fa-ethereum',
      chartData: [30, 25, 35, 30, 25, 20, 25, 30, 20, 15, 20],
    },
    {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      price: 125000,
      change: 5.67,
      volume: 456789123,
      marketCap: 55000000000000,
      high: 130000,
      low: 120000,
      icon: 'fas fa-fire',
      chartData: [25, 20, 15, 20, 25, 10, 15, 20, 5, 10, 15],
    },
  ];

  return (
    <div>
      <Head>
        <title>CoinToss | 간편한 암호화폐 거래</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Balance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-md mb-6 slide-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-500 text-sm">내 자산</h2>
            <button className="text-gray-400">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="mb-6">
            <p className="text-gray-500 text-sm">총 보유자산</p>
            <h3 className="text-3xl font-bold">₩12,345,678</h3>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm">원화</p>
              <p className="font-medium">₩5,678,901</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">코인</p>
              <p className="font-medium">₩6,666,777</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">수익률</p>
              <p className="font-medium text-green-500">+12.34%</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm slide-in delay-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <i className="fas fa-won-sign text-blue-500"></i>
            </div>
            <span className="text-xs">입금</span>
          </button>
          <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm slide-in delay-1">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <i className="fas fa-exchange-alt text-purple-500"></i>
            </div>
            <span className="text-xs">송금</span>
          </button>
          <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm slide-in delay-1">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <i className="fas fa-chart-line text-green-500"></i>
            </div>
            <span className="text-xs">투자</span>
          </button>
          <button className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-sm slide-in delay-1">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
              <i className="fas fa-gift text-yellow-500"></i>
            </div>
            <span className="text-xs">이벤트</span>
          </button>
        </div>

        {/* Coin List Header */}
        <div className="flex justify-between items-center mb-4 slide-in delay-2">
          <h2 className="text-lg font-bold">인기 코인</h2>
          <button className="text-blue-500 text-sm font-medium">더보기</button>
        </div>

        <CoinList coins={coins} />

        {/* Banner */}
        <div className="gradient-bg rounded-2xl p-6 text-white mb-6 relative overflow-hidden slide-in delay-3">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-2">새로운 코인 출시!</h3>
            <p className="text-sm mb-4 opacity-90">
              최신 알트코인을 가장 빠르게 만나보세요
            </p>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full text-sm font-medium">
              지금 확인하기
            </button>
          </div>
          <div className="absolute top-0 right-0 opacity-20">
            <i className="fas fa-coins text-6xl"></i>
          </div>
        </div>

        {/* News Section */}
        <div className="mb-8 slide-in delay-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">코인 뉴스</h2>
            <button className="text-blue-500 text-sm font-medium">
              더보기
            </button>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center mr-3">
                <i className="fas fa-newspaper text-gray-400"></i>
              </div>
              <div>
                <h3 className="font-medium mb-1">비트코인, 5월 최고가 경신</h3>
                <p className="text-gray-500 text-sm">
                  최근 3개월 만에 최고가를 기록하며 강세를 보이고 있습니다...
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center mr-3">
                <i className="fas fa-chart-pie text-gray-400"></i>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  이더리움, 주요 업그레이드 발표
                </h3>
                <p className="text-gray-500 text-sm">
                  이더리움 재단이 향후 6개월 내 주요 네트워크 업그레이드를...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Navigation />
      <FloatingButton />
    </div>
  );
};

export default Home;
