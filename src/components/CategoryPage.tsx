
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
        <ProductGrid 
          category={category} 
          title={title}
          description={description}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
