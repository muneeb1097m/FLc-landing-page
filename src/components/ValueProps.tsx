'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, CheckCircle2 } from 'lucide-react';

const ValueProps = () => {
  const props = [
    {
      badge: 'The SQL Commitment',
      headline: 'We Commit to a Number. We Stand Behind It Past 90 Days If We Have To.',
      points: [
        'Committed number of SQLs included in every package.',
        'Pre-vetted, pre-qualified, and booked directly on your calendar.',
        'If we fall short, we keep running at no extra cost until delivered.',
        "Your 90 days don't end until the number is met."
      ],
      icon: <ShieldCheck size={48} />,
      align: 'right'
    },
    {
      badge: 'How Narrow We Go',
      headline: 'Most Agencies Target an Industry. We Target a Specific Person in a Specific Area.',
      points: [
        'Not just USA, we target specific states, cities, and neighborhoods.',
        'Not just "software companies", we filter by tech stack and exact roles.',
        'Hyper-precision ensures your content resonates with the right audience.',
        'We never speak to everyone. We only speak to the right one.'
      ],
      icon: <Target size={48} />,
      align: 'left'
    },
    {
      badge: 'Our Secret Weapon, CAPI',
      headline: '4 or 5 Agencies in Pakistan Use This. We Are One of Them.',
      points: [
        'Our Conversion API (CAPI) runs on dedicated AWS servers.',
        'Achieve 90 to 95% tracking accuracy vs standard 35 to 40%.',
        'Better data quality leads to significantly lower costs per lead.',
        'Same budget, significantly more output and system performance.'
      ],
      icon: <Zap size={48} />,
      align: 'right'
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {props.map((prop, i) => (
            <motion.div
              key={prop.badge}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '4rem',
                alignItems: 'center'
              }}
            >
              {/* Visual Side (Icon Box) */}
              <div style={{ 
                order: prop.align === 'right' ? 2 : 1,
                display: 'flex',
                justifyContent: prop.align === 'right' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{ 
                  width: '100%',
                  maxWidth: '450px',
                  aspectRatio: '1',
                  background: 'var(--bg-soft)',
                  borderRadius: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  position: 'relative',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-premium)'
                }}>
                  <div style={{ transform: 'scale(1.5)' }}>{prop.icon}</div>
                  {/* Decorative Elements */}
                  <div style={{ 
                    position: 'absolute', 
                    width: '60%', 
                    height: '60%', 
                    background: 'var(--primary-soft)', 
                    borderRadius: '50%', 
                    filter: 'blur(60px)',
                    zIndex: -1
                  }}></div>
                </div>
              </div>

              {/* Content Side */}
              <div style={{ order: prop.align === 'right' ? 1 : 2 }}>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--primary)', 
                  fontSize: '0.8rem', 
                  fontWeight: 900, 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px',
                  marginBottom: '1.5rem',
                  background: 'var(--primary-soft)',
                  padding: '8px 16px',
                  borderRadius: '50px'
                }}>
                  {prop.badge}
                </div>
                
                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2rem', lineHeight: 1.2, fontWeight: 900 }}>
                  {prop.headline}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {prop.points.map((point, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
