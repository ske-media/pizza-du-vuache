import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // 4rem
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Témoignages', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center" onClick={() => handleNavClick('#hero')}>
              <img 
                src={isScrolled ? "https://i.imgur.com/iDzEZai.png" : "https://i.imgur.com/xPMGsJJ.png"} 
                alt="Pizza du Vuache" 
                className="h-10 sm:h-12 w-auto transition-all duration-300"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-white/80'
                } hover-underline text-sm lg:text-base`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+33450386798"
              className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-sm lg:text-base"
            >
              <Phone className="mr-2 h-4 w-4" />
              COMMANDER
            </a>
          </div>

          {/* Mobile call button */}
          <div className="md:hidden flex items-center">
            <a
              href="tel:+33450386798"
              className={`inline-flex items-center px-4 py-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Appeler</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;