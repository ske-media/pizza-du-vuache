import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Fix pour la hauteur sur mobile
const setVH = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);
setVH();

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

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);