import { useEffect } from 'react';

const UIEffects = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
          entry.target.classList.remove('opacity-100', 'translate-y-0');
        }
      });
    });

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default UIEffects;
