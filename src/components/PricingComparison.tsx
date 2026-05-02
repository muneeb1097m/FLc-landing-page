'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const PricingComparison = () => {
  const features = [
    { name: '2-Phase Strategy Execution', basic: true, intermediate: true, advanced: true },
    { name: 'ICP Research & Definition', basic: true, intermediate: true, advanced: true },
    { name: 'Lead Pre-Vetting Protocol', basic: true, intermediate: true, advanced: true },
    { name: 'Dedicated Appointment Setter', basic: false, intermediate: true, advanced: true },
    { name: 'GoHighLevel CRM Management', basic: false, intermediate: true, advanced: true },
    { name: 'Automated Follow-up Systems', basic: false, intermediate: true, advanced: true },
    { name: 'Sales Intelligence Reporting', basic: false, intermediate: true, advanced: true },
    { name: 'Priority Strategist Access', basic: false, intermediate: false, advanced: true },
    { name: 'Advanced CAPI Integration', basic: false, intermediate: false, advanced: true },
    { name: 'SQL Commitment (90 Days)', basic: 'Best Effort', intermediate: '30 - 35', advanced: '60 - 70' },
    { name: '90-Day Pipeline Value', basic: 'Variable', intermediate: 'Approx. $30k - $35k', advanced: 'Approx. $60k - $70k' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-soft)', paddingTop: 0 }}>
      <div className="container">
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '40px', 
          padding: '4rem', 
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-premium)',
          overflowX: 'auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Feature Comparison</h3>
            <p style={{ color: 'var(--text-muted)' }}>Choose the level of scale that fits your current business needs.</p>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '1.5rem', borderBottom: '2px solid var(--bg-soft)', fontSize: '1.1rem' }}>Service Feature</th>
                <th style={{ textAlign: 'center', padding: '1.5rem', borderBottom: '2px solid var(--bg-soft)', fontSize: '1.1rem' }}>Basic</th>
                <th style={{ textAlign: 'center', padding: '1.5rem', borderBottom: '2px solid var(--bg-soft)', fontSize: '1.1rem', color: 'var(--primary)' }}>Intermediate</th>
                <th style={{ textAlign: 'center', padding: '1.5rem', borderBottom: '2px solid var(--bg-soft)', fontSize: '1.1rem' }}>Advanced</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <motion.tr 
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  style={{ borderBottom: '1px solid var(--bg-soft)' }}
                >
                  <td style={{ padding: '1.2rem 1.5rem', fontWeight: 600, color: 'var(--foreground)' }}>{feature.name}</td>
                  <td style={{ textAlign: 'center', padding: '1.2rem 1.5rem' }}>
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? <Check size={20} style={{ color: 'var(--primary)' }} /> : <Minus size={20} style={{ color: 'var(--border)' }} />
                    ) : (
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{feature.basic}</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center', padding: '1.2rem 1.5rem', background: 'rgba(225, 29, 72, 0.02)' }}>
                    {typeof feature.intermediate === 'boolean' ? (
                      feature.intermediate ? <Check size={20} style={{ color: 'var(--primary)' }} /> : <Minus size={20} style={{ color: 'var(--border)' }} />
                    ) : (
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>{feature.intermediate}</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center', padding: '1.2rem 1.5rem' }}>
                    {typeof feature.advanced === 'boolean' ? (
                      feature.advanced ? <Check size={20} style={{ color: 'var(--primary)' }} /> : <Minus size={20} style={{ color: 'var(--border)' }} />
                    ) : (
                      <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{feature.advanced}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Need a custom high-volume plan? <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Let's talk.</span>
            </p>
            <a href="#contact" className="btn-premium primary">
              Talk to Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
