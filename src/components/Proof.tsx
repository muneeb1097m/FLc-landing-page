'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, ExternalLink, Quote } from 'lucide-react';

const Proof = () => {
  const caseStudies = [
    {
      industry: 'SaaS',
      result: '$37,000 Deal in Under 30 Days',
      stats: '670 targeted emails → 7 replies → 1 meeting → $37,000 signed.',
      color: '#3b82f6'
    },
    {
      industry: 'Accounting & Finance',
      result: 'Gulf Market Domination',
      stats: 'Hyper-narrow ICP targeting in UAE delivered consistent SQLs within 21 days.',
      color: '#10b981'
    },
    {
      industry: 'Software & IT',
      result: 'Signed 6 Objections',
      stats: 'Addressed every objection in writing inside the contract. Signed same week.',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="proof" className="section-padding" style={{ background: 'white' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '100px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '2rem' }}>
              Don't Take Our Word for It. <br />
              <span style={{ color: 'var(--primary)' }}>Watch Us Open Our Screen.</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We don't just show slides. On your strategy call, we share our screen live to show you real dashboards, active pipelines, and current client results.
            </p>
            <a href="#contact" data-cursor="call" className="btn-premium primary" style={{ height: '64px', padding: '0 3rem', fontSize: '1.1rem' }}>
              <MonitorPlay size={22} />
              Book a Live Screen-Share
            </a>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{ 
              background: 'var(--bg-soft)', 
              padding: '2rem', 
              borderRadius: '32px', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-premium)' 
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', background: '#ffbd2e', borderRadius: '50%' }}></div>
                <div style={{ width: '12px', height: '12px', background: '#27c93f', borderRadius: '50%' }}></div>
              </div>
              <div style={{ background: 'white', borderRadius: '16px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', width: '100%', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>35+</div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>SQLs This Month</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Active Campaign Dashboard</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--primary)', color: 'white', padding: '12px 24px', borderRadius: '16px', fontWeight: 800, fontSize: '0.8rem', boxShadow: 'var(--shadow-red)' }}>
              LIVE RESULTS
            </div>
          </div>
        </div>

        <div className="grid-3" style={{ gap: '2rem' }}>
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.result}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                padding: '3rem', 
                background: 'white', 
                borderRadius: '32px', 
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: study.color, textTransform: 'uppercase', letterSpacing: '2px' }}>
                  {study.industry}
                </span>
                <Quote size={24} style={{ opacity: 0.1 }} />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3 }}>{study.result}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{study.stats}</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}>
                VIEW CASE STUDY <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
