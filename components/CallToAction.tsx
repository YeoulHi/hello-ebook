
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="relative bg-dark-800 py-20">
      <div className="absolute inset-0 bg-opacity-10 bg-white [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          독서의 새로운 기준을 경험할 준비가 되셨나요?
        </h2>
        <p className="max-w-xl mx-auto text-lg text-gray-300 mb-8">
          지금 가입하고 첫 달 무료 혜택과 함께 무제한 독서의 세계를 탐험해보세요.
        </p>
        <a href="#" className="bg-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-primary/50 transform hover:scale-105">
          지금 바로 시작하기
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
