import React from 'react';
import { Facebook, Instagram, Globe, ExternalLink, Home, Pizza } from 'lucide-react';

const ReseauxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-dark text-white flex flex-col justify-center items-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <img 
          src="https://i.imgur.com/xPMGsJJ.png" 
          alt="Pizza du Vuache" 
          className="h-24 mx-auto mb-6 w-auto object-contain"
        />
        
        <h1 className="text-3xl font-bold mb-2">Pizza du Vuache</h1>
        <p className="text-xl opacity-90 mb-8">Délicieuses pizzas artisanales à Valleiry</p>
        
        {/* Social Links */}
        <div className="space-y-4 w-full">
          <a 
            href="https://www.facebook.com/PizzeriaDuVuache/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
          >
            <span className="flex items-center">
              <Facebook className="w-6 h-6 mr-4" />
              <span className="font-medium">Facebook</span>
            </span>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>
          
          <a 
            href="https://www.instagram.com/pizzaduvuache/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
          >
            <span className="flex items-center">
              <Instagram className="w-6 h-6 mr-4" />
              <span className="font-medium">Instagram</span>
            </span>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>
          
          <a 
            href="tel:+33450386798"
            className="flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
          >
            <span className="flex items-center">
              <Pizza className="w-6 h-6 mr-4" />
              <span className="font-medium">Commander</span>
            </span>
            <span className="text-sm opacity-90">+33 4 50 38 67 98</span>
          </a>
          
          <a 
            href="https://res.cloudinary.com/agence-orbit/image/upload/menu_pizza_dmhiig.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 backdrop-blur-sm p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full"
          >
            <span className="flex items-center">
              <Globe className="w-6 h-6 mr-4" />
              <span className="font-medium">Notre Menu</span>
            </span>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>
        </div>
        
        {/* Return to website link */}
        <div className="mt-12 w-full">
          <a 
            href="/"
            className="flex items-center justify-center bg-white text-primary hover:bg-gray-100 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full font-medium"
          >
            <Home className="w-5 h-5 mr-2" />
            Retour au site
          </a>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Pizza du Vuache. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default ReseauxPage;