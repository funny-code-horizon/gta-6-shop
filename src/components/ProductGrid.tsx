
import React, { useEffect, useState, useRef, useCallback } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

interface ProductGridProps {
  category?: string;
  title?: string;
  description?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  category,
  title = "Featured Products",
  description = "Best GTA 6 gear for the ultimate experience" 
}) => {
  const [products, setProducts] = useState(
    category 
      ? productsData.filter(product => product.category === category).slice(0, 12)
      : productsData.slice(0, 12)
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  const loadMoreProducts = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const currentLength = products.length;
      const filteredProducts = category 
        ? productsData.filter(product => product.category === category)
        : productsData;
      
      const nextProducts = filteredProducts.slice(currentLength, currentLength + 8);
      
      if (nextProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => [...prev, ...nextProducts]);
      }
      
      setLoading(false);
    }, 100);
  }, [loading, hasMore, products.length, category]);

  useEffect(() => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    
    if (lastProductRef.current) {
      observer.current.observe(lastProductRef.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore, loadMoreProducts]);

  // Use h2 for category pages since h1 is in hero, h3 for homepage since h2 is used in hero
  const HeadingTag = category ? 'h2' : 'h3';

  return (
    <section id="product-grid" className="py-16 px-4 md:px-10 max-w-7xl mx-auto">
      <HeadingTag className="text-3xl md:text-4xl font-bold mb-2 text-white">{title}</HeadingTag>
      <p className="text-white/70 mb-8">{description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          if (index === products.length - 1) {
            return (
              <div key={product.id} ref={lastProductRef}>
                <ProductCard {...product} />
              </div>
            );
          } else {
            return <ProductCard key={product.id} {...product} />;
          }
        })}
      </div>
      
      {loading && (
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gta-accent"></div>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
