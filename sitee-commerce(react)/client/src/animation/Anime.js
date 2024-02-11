import React, { useEffect } from 'react';

const IntersectionObserverComponent = ({ children,className}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      
    );

    const elementsToObserve = document.querySelectorAll(`.${className}`);

    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return <div className={`intersection-observer ${className}`}>{children}</div>;
};

export default IntersectionObserverComponent;
