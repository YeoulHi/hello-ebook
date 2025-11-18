
import React from 'react';
import { BookOpenIcon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpenIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">리딩 Hub</span>
            </div>
            <p className="text-sm">세상의 모든 지식을 당신의 손 안에. 리딩 Hub와 함께 성장하세요.</p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">플랫폼</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">기능</a></li>
                <li><a href="#" className="hover:text-white transition-colors">요금제</a></li>
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">회사</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 리딩 Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
