import React, { useState } from 'react';
import { Coin, CoinDetail } from '../../types/coin';

interface CoinItemProps {
  coin: CoinDetail;
}

const CoinItem: React.FC<CoinItemProps> = ({ coin }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="coin-item-container">
      <div
        className={`coin-item bg-white rounded-xl p-4 flex items-center justify-between shadow-sm coin-card slide-in delay-2 ${
          isActive ? 'active' : ''
        }`}
        onClick={handleClick}
        data-coin={coin.id}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <i className={`${coin.icon} text-yellow-500`}></i>
          </div>
          <div>
            <h3 className="font-medium">{coin.name}</h3>
            <p className="text-gray-500 text-xs">{coin.symbol}/KRW</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">₩{coin.price.toLocaleString()}</p>
          <p
            className={`${
              coin.change >= 0 ? 'text-red-500' : 'text-green-500'
            } text-xs`}
          >
            {coin.change >= 0 ? '+' : ''}
            {coin.change}%
          </p>
        </div>
      </div>
      <div
        className={`coin-detail-panel ${isActive ? 'active' : ''}`}
        id={`${coin.id}-detail`}
      >
        <div className="flex justify-between mb-3">
          <div>
            <p className="text-gray-500 text-xs">24h 거래량</p>
            <p className="font-medium">₩{coin.volume.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs">시가총액</p>
            <p className="font-medium">₩{coin.marketCap.toLocaleString()}</p>
          </div>
        </div>

        <div className="mini-chart mb-3">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
            <path
              className="chart-area"
              d={
                coin.chartData
                  .map((value, index) => {
                    const x = (index / (coin.chartData.length - 1)) * 100;
                    const y = 40 - (value / Math.max(...coin.chartData)) * 35;
                    return index === 0 ? `M0,${y}` : `L${x},${y}`;
                  })
                  .join(' ') + ' L100,40 L0,40 Z'
              }
            />
            <path
              className="chart-line"
              stroke="#0064ff"
              d={coin.chartData
                .map((value, index) => {
                  const x = (index / (coin.chartData.length - 1)) * 100;
                  const y = 40 - (value / Math.max(...coin.chartData)) * 35;
                  return index === 0 ? `M0,${y}` : `L${x},${y}`;
                })
                .join(' ')}
            />
          </svg>
        </div>

        <div className="flex justify-between text-sm">
          <div className="text-center">
            <p className="text-gray-500">고가</p>
            <p className="font-medium">₩{coin.high.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">저가</p>
            <p className="font-medium">₩{coin.low.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">변동</p>
            <p
              className={`font-medium ${
                coin.change >= 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {coin.change >= 0 ? '+' : ''}
              {coin.change}%
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex-1 mr-2">
            <i className="fas fa-arrow-up mr-1"></i> 매수
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium flex-1">
            <i className="fas fa-arrow-down mr-1"></i> 매도
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
