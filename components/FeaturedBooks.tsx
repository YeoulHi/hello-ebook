
import React from 'react';
import BookCard from './BookCard';
import type { Book } from '../types';

const featuredBooksData: Book[] = [
  { id: 1, title: '리액트 마스터', author: '김개발', imageUrl: 'https://picsum.photos/seed/react/300/400' },
  { id: 2, title: '타입스크립트 완전 정복', author: '박타입', imageUrl: 'https://picsum.photos/seed/typescript/300/400' },
  { id: 3, title: '꼬리 재귀의 비밀', author: '이함수', imageUrl: 'https://picsum.photos/seed/functional/300/400' },
  { id: 4, title: 'AI 시대의 생존법', author: '최인공', imageUrl: 'https://picsum.photos/seed/ai/300/400' },
  { id: 5, title: 'UX/UI 디자인 원론', author: '정디자인', imageUrl: 'https://picsum.photos/seed/uxui/300/400' },
  { id: 6, title: '클라우드 네이티브', author: '서버왕', imageUrl: 'https://picsum.photos/seed/cloud/300/400' },
];

const FeaturedBooks: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-light-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900">주목할 만한 신간</h2>
          <p className="text-lg text-gray-600 mt-2">최고의 저자들이 집필한 최신 기술 및 디자인 서적을 만나보세요.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {featuredBooksData.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
