import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Distributor from './components/Distributor';
import PizzaSizes from './components/PizzaSizes';
import PizzaMenu from './components/PizzaMenu';

// Lazy loading des composants non critiques
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
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
        <Suspense fallback={null}>
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;