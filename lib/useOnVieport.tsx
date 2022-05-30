import React, { useEffect, useState } from 'react';

const useOnVieport = (ref: React.MutableRefObject<HTMLElement>): boolean => {
    const [onView, setonView] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();

            const visible =
                rect.bottom - rect.height / 2 <=
                (window.innerHeight || document.documentElement.clientHeight);

            return visible ? setonView(true) : '';
        };
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, [ref]);
    return onView;
};

export { useOnVieport };
