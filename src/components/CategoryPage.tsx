
import React, { useEffect } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import Footer from './Footer';

interface CategoryPageProps {
  category: string;
  title: string;
  description: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, title, description }) => {
  useEffect(() => {
    document.title = `${title} - GTA 6 Shop`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-4 md:pt-4">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">{title}</h1>
          <p className="text-white/70 text-center mb-8 text-lg">{description}</p>
        </div>
        <ProductGrid 
          category={category} 
          title="Our Products"
          description={`Discover our curated selection of ${title.toLowerCase()}`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
