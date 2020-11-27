import React, { useEffect, useState } from 'react';

const useIntersectionObserver = (ref) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (ref) {
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
      ).then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(ref.current);
      });
    }
  }, [ref]);
  return { show };
};

export default useIntersectionObserver;
