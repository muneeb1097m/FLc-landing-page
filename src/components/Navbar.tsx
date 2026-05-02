'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Ops Hub', href: '#ops-hub' },
    { name: 'Packages', href: '#packages' },
    { name: 'Proof', href: '#proof' },
  ];

  return (
    <>
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition-smooth)',
          background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? 'var(--shadow-premium)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="container flex-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/logoflc.png" 
              alt="FLC Logo" 
              style={{ 
                height: isScrolled ? '35px' : '45px', 
                width: 'auto', 
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
              }} 
            />
          </Link>

          {/* Desktop Links */}
          <div className="nav-links hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                data-cursor="view"
                className="nav-link"
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: 600, 
                  color: 'var(--foreground)', 
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'var(--transition-smooth)',
                  position: 'relative'
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <a href="#contact" data-cursor="call" className="btn-premium primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
              <Phone size={16} />
              <span>Talk to Expert</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle"
            style={{ 
              display: 'none', 
              color: 'var(--foreground)', 
              padding: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? 0 : '-100%',
          width: '80%',
          height: '100vh',
          background: '#ffffff',
          zIndex: 1001,
          padding: '80px 40px',
          boxShadow: 'var(--shadow-premium)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}
      >
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none' }}
        >
          <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            data-cursor="view"
            style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--foreground)', textDecoration: 'none' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href="#contact" data-cursor="call" className="btn-premium primary w-full" style={{ justifyContent: 'center' }}>
          Talk to Expert
        </a>
      </div>

      <style jsx>{`
        .nav-link:hover {
          opacity: 1 !important;
          color: var(--primary) !important;
        }
        
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
