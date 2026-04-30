'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--foreground)', color: 'white', padding: '100px 0 40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '80px' }}>
          <div>
            <img 
              src="/logoflc.png" 
              alt="Faseeh Lall & Co" 
              style={{ height: '60px', width: 'auto', marginBottom: '1.5rem', display: 'block', filter: 'brightness(0) invert(1)' }} 
            />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '300px' }}>
              Building Systems. Delivering Results. Transferring Ownership. Your entire marketing department, delivered in 90 days.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {['How It Works', 'Team', 'Industries', 'Packages', 'Proof'].map(link => (
                <Link key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Locations</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              <p>Faisal Town · Lahore</p>
              <p>Ferozpur Road · Lahore</p>
              <p>Multan Road · Lahore</p>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>Connect</h4>
            <a 
              href="https://wa.me/923244898766" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem', textDecoration: 'none', display: 'block' }}
            >
              +92 324 4898766
            </a>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>faseehlall.com</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Faseeh Lall & Co. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
