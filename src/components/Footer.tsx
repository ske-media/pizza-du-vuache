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
              Depuis 2012, notre pizzeria artisanale au pied du Vuache vous propose plus de 40 pizzas 
              authentiques préparées avec passion. Disponibles à emporter ou via notre distributeur 24h/24, 
              nos pizzas sont devenues une référence à Valleiry et en Haute-Savoie.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
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
                <a href="#distributor" className="text-gray-300 hover:text-white transition-colors">
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
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="mb-2">&copy; {new Date().getFullYear()} Pizza du Vuache. Tous droits réservés.</p>
          <p className="text-sm">
            Pizzeria artisanale à Valleiry | Distributeur automatique 24h/24 | 
            Livraison et vente à emporter | Tél : 04 50 38 67 98 | 
            80 Route de Saint-Julien-en-Genevois, 74520 Valleiry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;