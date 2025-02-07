import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { lazy, Suspense } from 'react';

// Fix pour la hauteur sur mobile
const setVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
setVH();

// Lazy loading des composants non critiques
const LazyTestimonials = lazy(() => import('./components/Testimonials'));
const LazyContact = lazy(() => import('./components/Contact'));
const LazyFooter = lazy(() => import('./components/Footer'));

// Intersection Observer pour le lazy loading
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target as HTMLImageElement;
      if (lazyImage.dataset.src) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute('data-src');
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, {
  rootMargin: '50px 0px',
  threshold: 0.01,
});

window.addEventListener('load', () => {
  document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </StrictMode>
);