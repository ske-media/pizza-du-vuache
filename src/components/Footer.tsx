import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pizza du Vuache</h3>
            <p className="text-gray-300">
              Une expérience culinaire authentique au pied du Mont Vuache.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-gray-300 hover:text-white transition-colors">
                  Réservation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/PizzeriaDuVuache/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/pizzaduvuache/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="footer-copyright">
            © 2012-{new Date().getFullYear()} by Pizza du Vuache | 🚀 Site web développé par 
            <a 
              href="https://agence-orbit.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-secondary-light hover:text-white transition-colors"
            >
              Steven C. K. ELDRING – Agence Orbit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;