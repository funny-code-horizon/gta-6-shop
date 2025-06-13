
import React, { useState } from 'react';
import { Gamepad, Box, Cpu, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full py-4 px-6 md:px-10 z-30 transition-all duration-300 ${isScrolled ? 'bg-gta-darker/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="relative">
            <Gamepad className="h-8 w-8 text-gta-accent group-hover:text-gta-highlight transition-colors" />
            <span className="absolute inset-0 animate-pulse-glow rounded-full opacity-75 group-hover:opacity-100"></span>
          </span>
          <span className="text-2xl font-bold text-white">
            <span className="text-gta-accent">GTA</span> 6 Shop
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/games" className="flex items-center space-x-1 text-white/90 hover:text-gta-accent transition-colors">
                  <Gamepad size={16} />
                  <span>Games</span>
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="flex items-center space-x-1 text-white/90 hover:text-gta-accent transition-colors">
                  <Headset size={16} />
                  <span>Accessories</span>
                </Link>
              </li>
              <li>
                <Link to="/hardware" className="flex items-center space-x-1 text-white/90 hover:text-gta-accent transition-colors">
                  <Cpu size={16} />
                  <span>Hardware</span>
                </Link>
              </li>
              <li>
                <Link to="/merchandise" className="flex items-center space-x-1 text-white/90 hover:text-gta-accent transition-colors">
                  <Box size={16} />
                  <span>Merchandise</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* <button className="text-white/90 hover:text-gta-accent transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-white/90 hover:text-gta-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
