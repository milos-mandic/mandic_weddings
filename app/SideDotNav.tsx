"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SideDotNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsHome(window.location.pathname === '/');
    const sectionIds = ['hero', 'timeline', 'about', 'contact'];
    const handleScroll = () => {
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dotStyle = (id: string) => ({
    width: 18,
    height: 18,
    borderRadius: '50%',
    border: '2px solid #222',
    background: activeSection === id ? '#222' : '#fff',
    display: 'block',
    marginBottom: 0,
    transition: 'background 0.2s',
  });

  if (!isHome) return null;

  return (
    <div className="sideDots" style={{ position: 'fixed', left: 32, top: '40%', zIndex: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
      <Link href="/#hero" style={dotStyle('hero')}></Link>
      <Link href="/#timeline" style={dotStyle('timeline')}></Link>
      <Link href="/#about" style={dotStyle('about')}></Link>
      <Link href="/#contact" style={dotStyle('contact')}></Link>
    </div>
  );
}
