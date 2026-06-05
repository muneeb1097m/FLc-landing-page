'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Database, BarChart3 } from 'lucide-react';

const TheSystem = () => {
  const stats = [
    { label: 'Tracking Accuracy', value: '95%', icon: <Database size={24} /> },
    { label: 'Market Experience', value: '6 Years', icon: <Zap size={24} /> },
    { label: 'Client Engagements', value: '91+', icon: <ShieldCheck size={24} /> },
    { label: 'SQL Commitment', value: 'Guaranteed', icon: <BarChart3 size={24} /> },
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="mesh-bg">
        <div className="mesh-ball" style={{ top: '40%', right: '10%', width: '300px', height: '300px', background: 'var(--primary)', opacity: 0.05, animationDelay: '-12s' }}></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                Tested Across Real Budgets. <br />
                <span style={{ color: 'var(--primary)' }}>Delivered to You from Day One.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                This is not version one. This system has been built, broken, and improved across real client accounts for 6 years. What you receive is what survived real markets and real budgets.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                And we use it ourselves, <span style={{ fontWeight: 800, color: 'var(--foreground)' }}>FLC runs on the same system we build for clients.</span> Which is why we are consistently growing and signing new clients every single week.
              </p>
              
              <div style={{ 
                padding: '2rem', 
                background: 'var(--primary-soft)', 
                borderRadius: '24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'stretch'
              }}>
                {/* Vertical Accent Bar (Perfect Rounded Caps) */}
                <div style={{ 
                  width: '4px', 
                  background: 'var(--primary)', 
                  borderRadius: '10px',
                  flexShrink: 0
                }} />
                
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)' }}>The SQL Commitment</h4>
                  <p style={{ fontWeight: 600, color: 'var(--foreground)', margin: 0 }}>
                    If we fall short of our SQL target, we keep running at no extra cost until every meeting is delivered. Your 90 days don't end until the number is met.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  padding: '2rem', 
                  background: 'var(--bg-soft)', 
                  borderRadius: '32px', 
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                  transition: 'var(--transition-smooth)'
                }}
                className="stat-card"
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
        .stat-card:hover {
          transform: translateY(-5px);
          background: white;
          border-color: var(--primary-light);
          box-shadow: var(--shadow-premium);
        }
      `}</style>
    </section>
  );
};

export default TheSystem;
