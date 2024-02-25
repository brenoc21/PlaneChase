import React, { useState, useEffect } from 'react';

export const useIsPCResolution = () => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isPC;
};
