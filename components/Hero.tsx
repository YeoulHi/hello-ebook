
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-900 leading-tight mb-4">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">지식의 샘</span>에서,
          <br />
          당신의 다음 필독서를 만나보세요
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-8">
          언제 어디서든 수천 권의 전자책을 무제한으로. 첫 달은 무료로 마음껏 즐겨보세요.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#cta" className="bg-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            첫 달 무료로 시작하기
          </a>
          <a href="#features" className="text-primary font-semibold hover:underline">
            더 알아보기 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
