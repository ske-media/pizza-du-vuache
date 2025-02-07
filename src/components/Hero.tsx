import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 fade-in max-w-[90vw] sm:max-w-none">
        <img 
          src="https://i.imgur.com/2N5Sr9x.png" 
          alt="Pizza du Vuache - Meilleure Pizzeria à Valleiry" 
          className="h-20 sm:h-32 mx-auto mb-6 w-auto object-contain"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Pizza du Vuache - Délicieuses pizzas artisanales à emporter à Valleiry
        </p>
        <div className="space-y-4">
          <a
            href="tel:+33450386798"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            COMMANDER
          </a>
          <p className="text-white/90 text-lg sm:text-xl font-medium tracking-wide">
            +33 4 50 38 67 98
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;