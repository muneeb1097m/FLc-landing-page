'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Share2, Users2 } from 'lucide-react';

const Ownership = () => {
  return (
    <section className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
            <ShieldCheck size={18} />
            Asset Protection
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            What You Own After <span style={{ color: 'var(--primary)' }}>90 Days</span>
          </h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--foreground)' }}>Everything. 100%.</p>
        </div>

        {/* Ownership Grid */}
        <div style={{ 
          background: 'var(--bg-soft)', 
          padding: '4rem', 
          borderRadius: '40px', 
          border: '1px solid var(--border)',
          marginBottom: '60px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '4rem' 
          }}>
            {[
              'CRM', 'Landing Pages', 'Ad Campaigns', 'Lead Database', 
              'ICP Research', 'Workflows', 'Creatives', 'Dashboards', 'Sales Intelligence Report'
            ].map((item) => (
              <div 
                key={item} 
                style={{ 
                  padding: '10px 24px', 
                  background: '#ffffff', 
                  borderRadius: '100px', 
                  fontSize: '0.9rem', 
                  fontWeight: 700, 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* Option A */}
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ background: '#ffffff', padding: '3rem', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-premium)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'var(--primary)', color: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>A</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Scale With Us</h4>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>Continue the momentum into the next cycle. We stay as your fractional marketing department and keep scaling the volume.</p>
            </motion.div>

            {/* Option B */}
            <motion.div 
              whileHover={{ y: -10 }}
              style={{ background: '#ffffff', padding: '3rem', borderRadius: '32px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-premium)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'var(--foreground)', color: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>B</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Complete Handover</h4>
              </div>
              <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>We train your in-house team on how to manage the system we built and hand everything over. No lock-in, no dependencies.</p>
            </motion.div>
          </div>
        </div>

        {/* Guarantees Box */}
        <div style={{ 
          background: 'var(--foreground)', 
          color: '#ffffff', 
          padding: '3rem', 
          borderRadius: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          boxShadow: 'var(--shadow-red)'
        }}>
          {[
            { title: '20-Day Performance Guarantee', icon: <ShieldCheck size={20} /> },
            { title: 'Month-to-month after 90 days', icon: <CalendarCheck size={20} /> },
            { title: 'CRM transferability on exit', icon: <Share2 size={20} /> },
            { title: 'No hidden ad spend margins', icon: <Users2 size={20} /> }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simplified icon component since CalendarCheck might not be imported from the same source
const CalendarCheck = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/>
  </svg>
);

export default Ownership;
