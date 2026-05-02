'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Crosshair, ZoomIn } from 'lucide-react';

const TheBeachhead = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-soft)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              background: 'var(--primary-soft)', 
              color: 'var(--primary)', 
              padding: '10px 20px', 
              borderRadius: '50px', 
              fontSize: '0.8rem', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              marginBottom: '2rem'
            }}>
              <Target size={18} />
              The Beachhead Strategy
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Why We Start <span style={{ color: 'var(--primary)' }}>Small</span> <br />
              to Win <span style={{ color: 'var(--primary)' }}>Big.</span>
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Most agencies try to speak to everyone. They target "Software Companies" or "E-commerce" at a global scale. The result? Diluted messaging, high costs, and zero trust.
            </p>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We do the opposite. We find your <strong>Beachhead</strong> — a hyper-specific segment of the market where your offer is 10x more valuable. We don't target the USA; we target Importers in New Jersey. We don't target Accounting; we target Audit Firms in Dubai.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <Crosshair size={24} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Laser Precision</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Messages that feel like a private conversation.</p>
              </div>
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
                <ZoomIn size={24} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Higher Trust</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Local relevance beats global noise every time.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              aspectRatio: '1', 
              background: '#ffffff', 
              borderRadius: '40px', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Our Formula</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1.2 }}>
                  We help <span style={{ color: 'var(--primary)' }}>[ICP]</span> <br />
                  to achieve <span style={{ color: 'var(--primary)' }}>[Outcome]</span> <br />
                  in <span style={{ color: 'var(--primary)' }}>[Timeframe]</span>.
                </div>
                <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  If you can't fill in those blanks with 100% clarity, your marketing will fail. We fix this on Day 1.
                </p>
              </div>
              
              {/* Decorative Circle */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                border: '2px dashed var(--primary)', 
                opacity: 0.1, 
                borderRadius: '50%', 
                margin: '2rem',
                animation: 'spin 60s linear infinite'
              }}></div>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default TheBeachhead;
