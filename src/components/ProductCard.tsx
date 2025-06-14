
import React from 'react';
import { Link } from 'lucide-react';

interface ProductProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
  amazonLink: string;
  category: string;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  price,
  imageUrl,
  rating,
  amazonLink,
  category
}) => {
  return (
    <div className="gta-card group">
      <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gta-darker to-gta-dark">
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-110"
            width="300"
            height="300"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-2 right-2 bg-gta-accent/90 text-white text-xs font-bold px-2 py-1 rounded">
            {category}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-medium text-lg line-clamp-2 mb-2 group-hover:text-gta-accent transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-gta-accent font-bold text-xl">${price.toFixed(2)}</span>
            <div className="flex items-center">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    width="16"
                    height="16"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">View on Amazon</span>
            <Link className="h-4 w-4 text-white/60 group-hover:text-gta-accent transition-colors" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
