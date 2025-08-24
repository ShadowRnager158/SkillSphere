import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Service worker registration disabled for debugging
/*
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered: ', registration);
        registration.update().catch((error) => {
          console.error('Service Worker update failed: ', error);
        });
      })
      .catch((registrationError) => {
        console.error('Service Worker registration failed: ', registrationError);
      });
  });
}
*/

createRoot(document.getElementById('root')!).render(<App />);