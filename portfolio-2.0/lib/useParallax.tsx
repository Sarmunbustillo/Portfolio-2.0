import React, { useEffect, useState } from 'react';

const useParallax = (ref: React.MutableRefObject<HTMLElement>): void => {
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(0, ${
        window.pageYOffset * 0.8
      }px, 0)`;
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);
};

export { useParallax };
