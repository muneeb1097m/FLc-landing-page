'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay } from 'lucide-react';

const Proof = () => {
  return (
    <section id="proof" className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
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
              Talk to Expert
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
              <div style={{ background: '#ffffff', borderRadius: '16px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', width: '100%', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>35+</div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>SQLs in the next 90 days</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Active Campaign Dashboard</div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--primary)', color: '#ffffff', padding: '12px 24px', borderRadius: '16px', fontWeight: 800, fontSize: '0.8rem', boxShadow: 'var(--shadow-red)' }}>
              LIVE RESULTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
