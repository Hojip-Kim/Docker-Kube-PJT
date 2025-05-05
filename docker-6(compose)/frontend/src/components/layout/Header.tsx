import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <i className="fas fa-coins text-blue-500 text-xl"></i>
            </div>
            <h1 className="text-xl font-bold">CoinToss</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
              <i className="fas fa-bell mr-1"></i> 알림
            </button>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
              <i className="fas fa-qrcode mr-1"></i> QR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
