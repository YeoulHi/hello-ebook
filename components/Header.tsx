
import React, { useState, useEffect } from 'react';
import { BookOpenIcon } from './Icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpenIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-dark-900">리딩 Hub</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">기능</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">요금제</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">추천사</a>
          </nav>
          <a href="#cta" className="hidden md:inline-block bg-primary text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            무료로 시작하기
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
