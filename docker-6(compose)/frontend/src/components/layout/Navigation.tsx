import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', icon: 'fa-home', label: '홈' },
    { id: 'market', icon: 'fa-chart-line', label: '시세' },
    { id: 'wallet', icon: 'fa-wallet', label: '지갑' },
    { id: 'profile', icon: 'fa-user', label: '내정보' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item flex flex-col items-center ${
              activeItem === item.id ? 'active text-blue-500' : 'text-gray-500'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.id);
            }}
          >
            <i className={`fas ${item.icon} text-lg`}></i>
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
