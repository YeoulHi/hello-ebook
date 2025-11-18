
import React from 'react';
import type { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
        <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-dark-900 truncate group-hover:text-primary">{book.title}</h3>
        <p className="text-sm text-gray-500">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
