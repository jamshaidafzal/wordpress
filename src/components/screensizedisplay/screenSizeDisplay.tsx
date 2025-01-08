"use-client";
import { useEffect, useState } from 'react';

const ScreenSizeDisplay = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 10, right: 10, background: '#000', color: '#fff', padding: '5px 10px' }}>
      {size.width}px x {size.height}px
    </div>
  );
};

export default ScreenSizeDisplay;
