
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light-100 text-dark-800 antialiased">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
