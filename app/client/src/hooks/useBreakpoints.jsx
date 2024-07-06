import { useState, useEffect } from 'react';

const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState('normal');

  const breakpoints = {
    wide: [1281, 1680],
    normal: [961, 1280],
    narrow: [841, 960],
    narrower: [737, 840],
    mobile: [0, 736],
  };

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      for (const key in breakpoints) {
        const [min, max] = breakpoints[key];
        if (width >= min && width <= max) {
          setBreakpoint(key);
          break;
        }
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return breakpoint;
};

export default useBreakpoints;
