
import React from 'react';
import { SearchIcon, CreditCardIcon, BookOpenIcon } from './Icon';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <SearchIcon className="h-10 w-10 text-primary" />,
      title: '책 탐색하기',
      description: '수천 권의 베스트셀러와 신간 중에서 마음에 드는 책을 찾아보세요.'
    },
    {
      icon: <CreditCardIcon className="h-10 w-10 text-primary" />,
      title: '구독하기',
      description: '간단한 결제로 월간 또는 연간 멤버십을 시작하고 모든 책에 액세스하세요.'
    },
    {
      icon: <BookOpenIcon className="h-10 w-10 text-primary" />,
      title: '마음껏 읽기',
      description: '스마트폰, 태블릿, PC 등 어떤 기기에서든 자유롭게 독서를 즐기세요.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">3단계로 시작하는 독서 생활</h2>
          <p className="text-lg text-gray-600 mt-2">리딩 Hub 이용 방법은 정말 간단합니다.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 mb-6 rounded-full bg-blue-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
