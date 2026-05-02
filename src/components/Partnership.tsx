'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle2 } from 'lucide-react';

const Partnership = () => {
  const flcTasks = [
    'ICP Research & Definition',
    'Beachhead Strategy Setup',
    'Ad Management & Creative',
    'Appointment Setting',
    'CRM Automation & Tracking',
    'Daily Performance Optimization'
  ];

  const clientTasks = [
    'High Level Business Strategy',
    'Taking the Sales Calls',
    'Closing the Deals',
    'Delivering the Service',
    'Providing Case Studies',
    'Onboarding New Clients'
  ];

  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
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
            <Users size={18} />
            The Partnership
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            A True <span style={{ color: 'var(--primary)' }}>Partnership</span>.
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            We are not just a vendor. We are your fractional marketing department. Here is how we divide the work.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '3rem' }}>
          {/* FLC Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--foreground)', 
              padding: '3.5rem', 
              borderRadius: '40px', 
              color: '#ffffff',
              boxShadow: 'var(--shadow-red)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: '#ffffff' }}>We Do <span style={{ opacity: 0.5 }}>(FLC)</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {flcTasks.map((task) => (
                <div key={task} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{task}</span>
                </div>
              ))}
            </div>
            
            {/* Subtle Gradient Accent */}
            <div style={{ 
              position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', 
              background: 'var(--primary)', opacity: 0.1, borderRadius: '50%', filter: 'blur(80px)' 
            }}></div>
          </motion.div>

          {/* Client Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ 
              background: 'var(--bg-soft)', 
              padding: '3.5rem', 
              borderRadius: '40px', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-premium)'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem' }}>You Do <span style={{ opacity: 0.5 }}>(The Client)</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {clientTasks.map((task) => (
                <div key={task} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--foreground)' }}>{task}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div style={{ 
          marginTop: '60px', 
          padding: '2.5rem 3.5rem', 
          background: 'var(--primary-soft)', 
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <p style={{ 
            color: 'var(--primary)',
            fontWeight: 800,
            fontSize: '1.25rem',
            margin: 0,
            maxWidth: '600px'
          }}>
            If you take the calls, we will fill the calendar. That is the agreement.
          </p>
          <a href="#contact" className="btn-premium primary">
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
