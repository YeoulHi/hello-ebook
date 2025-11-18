
import React from 'react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: '김지혜',
    role: '소프트웨어 엔지니어',
    avatarUrl: 'https://picsum.photos/seed/person1/100/100',
    quote: '출퇴근길이 즐거워졌어요. 리딩 Hub 덕분에 다양한 기술 서적을 부담 없이 읽을 수 있어서 정말 만족합니다.'
  },
  {
    id: 2,
    name: '이준호',
    role: '프로덕트 매니저',
    avatarUrl: 'https://picsum.photos/seed/person2/100/100',
    quote: '최신 트렌드를 파악하는 데 이만한 플랫폼이 없어요. 기획에 필요한 영감을 많이 얻고 있습니다. 강력 추천해요!'
  },
  {
    id: 3,
    name: '박서연',
    role: '대학생',
    avatarUrl: 'https://picsum.photos/seed/person3/100/100',
    quote: '전공 서적이 비싸서 부담이었는데, 리딩 Hub로 해결했어요. 저렴한 가격에 마음껏 공부할 수 있어서 최고예요.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-light-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">사용자들이 말하는 리딩 Hub</h2>
          <p className="text-lg text-gray-600 mt-2">먼저 경험해본 분들의 생생한 후기를 들어보세요.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 mb-6 relative">
                <span className="absolute -top-3 -left-4 text-6xl text-blue-100 font-serif">“</span>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-dark-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
