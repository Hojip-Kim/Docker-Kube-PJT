import React from 'react';

const FloatingButton: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4">
      <button className="toss-button w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-all">
        <i className="fas fa-exchange-alt text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingButton;
