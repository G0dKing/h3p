import { useEffect } from 'react';

const useInitialAnimations = () => {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.body.classList.remove('is-preload');
      }, 100);
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
};

export default useInitialAnimations;
