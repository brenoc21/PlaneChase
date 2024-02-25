import { useState, useEffect } from 'react';

const getOrientation = () => {
  const { type } = window.screen.orientation;
  return type.startsWith('portrait') ? 'portrait' : 'landscape';
};

const useOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    window.screen.orientation.addEventListener('change', handleOrientationChange);

    return () => {
      window.screen.orientation.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;