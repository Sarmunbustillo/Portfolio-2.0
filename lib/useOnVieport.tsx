import React, { useEffect } from 'react';

const useOnVieport = (ref: React.MutableRefObject<HTMLElement>): void => {
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      const visible =
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      return visible ? ref?.current.classList.add('animate') : '';
    };
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [ref]);
};

export { useOnVieport };
