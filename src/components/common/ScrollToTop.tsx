'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#0d6efd',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(13, 110, 253, 0.35)',
        cursor: 'pointer',
        zIndex: 999,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
}
