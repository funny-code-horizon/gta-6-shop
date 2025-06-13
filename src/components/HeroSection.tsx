
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById('product-grid');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gta-darker/40 via-gta-dark/60 to-gta-darker z-10"></div>
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22')] bg-cover bg-center"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
          Welcome to <span className="text-glow text-gta-accent">GTA 6</span> Shop
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          The ultimate destination for gaming gear and accessories
        </p>
        
        <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
          <button className="btn-gta" onClick={scrollToProducts}>
            Browse Products
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="h-10 w-10 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
