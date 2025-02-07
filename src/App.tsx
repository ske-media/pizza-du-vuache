import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Distributor from './components/Distributor';
import PizzaSizes from './components/PizzaSizes';
import PizzaMenu from './components/PizzaMenu';
import Contact from './components/Contact';

// Import direct pour éviter les problèmes de lazy loading
import Testimonials from './components/Testimonials';
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Distributor />
        <PizzaMenu />
        <PizzaSizes />
        <Testimonials />
        <Contact />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;