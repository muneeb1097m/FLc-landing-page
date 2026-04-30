'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, PlayCircle, CalendarCheck } from 'lucide-react';

const Phases = () => {
  const phases = [
    {
      number: 'Phase 1',
      title: 'Foundation (Days 1–15)',
      description: "We don't run a single ad until this is done. We define your ICP, build your offer, and create all your assets.",
      items: [
        'ICP — Ideal Customer Profile Definition',
        'Beachhead Strategy Setup',
        'Offer Creation (One-line Clarity)',
        'Assets: VSL, Landing Pages, Ad Scripts'
      ],
      icon: <Target size={32} />
    },
    {
      number: 'Phase 2',
      title: 'Execution (Days 16–90)',
      description: 'Everything goes live across Organic and Paid channels. Your calendar starts filling up with qualified meetings.',
      items: [
        'Multi-channel Outreach Launch',
        'CRM Automated Follow-ups',
        'Daily Reporting & Optimization',
        'Sales Intelligence Analysis'
      ],
      icon: <PlayCircle size={32} />
    }
  ];

  const timeline = [
    { day: 'Day 16', event: 'Everything goes live' },
    { day: 'Day 19', event: 'First form fills come in' },
    { day: 'Day 20', event: 'CRM automated follow-ups' },
    { day: 'Day 21+', event: 'Meetings on your calendar' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            The <span style={{ color: 'var(--primary)' }}>90-Day</span> Roadmap
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            A structured, two-phase approach to building your entire marketing department.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3rem', marginBottom: '80px' }}>
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="phase-card"
            >
              <div className="phase-number-badge" style={{ 
                position: 'absolute', top: '0', right: '0', padding: '1.5rem 2.5rem', 
                background: 'var(--primary-soft)', color: 'var(--primary)', 
                fontWeight: 900, borderRadius: '0 0 0 30px', fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}>
                {phase.number}
              </div>
              
              <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>{phase.icon}</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{phase.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>{phase.description}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {phase.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '0.95rem' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mini Timeline */}
        <div style={{ 
          background: 'var(--gradient-red)', 
          color: 'white', 
          padding: '4rem', 
          borderRadius: '40px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          textAlign: 'center',
          boxShadow: 'var(--shadow-red)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {timeline.map((item, i) => (
            <div key={item.day} style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '0.5rem' }}>{item.day}</div>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>{item.event}</div>
              {i < timeline.length - 1 && (
                <div className="hidden-mobile" style={{ 
                  position: 'absolute', top: '25%', right: '-20%', width: '40%', height: '1px', 
                  background: 'rgba(255,255,255,0.2)' 
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
