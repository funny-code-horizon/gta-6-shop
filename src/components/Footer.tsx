import React from "react";
import { Gamepad } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gta-dark border-t border-gta-accent/20 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-8">
          <div className="max-w-sm">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <Gamepad className="h-6 w-6 text-gta-accent" />
              <span className="text-xl font-bold text-white">
                <span className="text-gta-accent">GTA</span> 6 Shop
              </span>
            </a>
            <p className="text-white/70 text-sm">
              Your ultimate destination for gaming gear and accessories.
            </p>
          </div>

          <div className="flex items-end pr-16">
            <div>
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/games"
                    className="text-white/70 hover:text-gta-accent transition-colors"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessories"
                    className="text-white/70 hover:text-gta-accent transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hardware"
                    className="text-white/70 hover:text-gta-accent transition-colors"
                  >
                    Hardware
                  </Link>
                </li>
                <li>
                  <Link
                    to="/merchandise"
                    className="text-white/70 hover:text-gta-accent transition-colors"
                  >
                    Merchandise
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gta-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GTA 6 Shop. Not affiliated with
            Rockstar Games.
          </p>
          {/* <div className="flex items-center space-x-4">
            <a href="#" className="text-white/50 hover:text-gta-accent transition-colors text-sm">Affiliate Disclosure</a>
            <span className="text-white/50">|</span>
            <a href="#" className="text-white/50 hover:text-gta-accent transition-colors text-sm">Amazon Associates</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
