'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRightCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "What exactly is this service, and what are your core expertise?",
      a: "Our core focus is generating Sales Qualified Leads (SQLs) rather than generic digital marketing. We find pre-interested buyers via Meta, Google, and LinkedIn, filter them rigorously, and bring them directly to your calendar."
    },
    {
      q: "The package is too expensive, how do we keep costs minimum?",
      a: "The investment is designed to pay for itself; closing even one high-value client often covers the first month. Tight budgets can start with the Basic package (PKR 200,000) for raw leads and upgrade later."
    },
    {
      q: "Is the ad spend included in the package?",
      a: "No, ad spend is separate and paid directly to platforms. It typically ranges from PKR 30,000 to PKR 100,000 per month depending on your specific market and goals."
    },
    {
      q: "Who owns the system and CRM after the 90-day period?",
      a: "You have 100% ownership. This includes the GHL CRM sub-account, landing pages, ad campaigns, and automation workflows. You can exit anytime with a 15-day notice."
    },
    {
      q: "Meta ads often bring garbage leads, how do you prevent this?",
      a: "Garbage leads happen when the ICP is poorly defined. Our first 15 days are dedicated purely to ICP research and validation, ensuring we target the correct pain points before going live."
    },
    {
      q: "Do you offer a performance guarantee?",
      a: "We offer a 20-day performance guarantee. If no meaningful progress (ICP validation and live campaigns) is made in the first 20 days, you have the option to exit with a refund for that cycle."
    },
    {
      q: "I am a founder, not a salesperson. How will I close these deals?",
      a: "The meetings are pre-qualified and consulting-based. Taking a meeting is similar to responding to a high-intent proposal. We also provide a closing script to assist you."
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Straight Answers to <span style={{ color: 'var(--primary)' }}>Your Concerns</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            No agency fluff. Just the facts on how we deliver results.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2rem' }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                y: -10,
                boxShadow: 'var(--shadow-red)'
              }}
              viewport={{ once: true }}
              style={{ 
                background: '#ffffff', 
                padding: '2.5rem', 
                borderRadius: '32px', 
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'default',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                ...(i === faqs.length - 1 && faqs.length % 2 !== 0 ? {
                  gridColumn: '1 / -1',
                  maxWidth: '800px',
                  margin: '0 auto',
                  width: '100%'
                } : {})
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'inherit' }}>
                <HelpCircle size={24} style={{ color: 'inherit' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'inherit' }}>{faq.q}</h4>
              </div>
              <p style={{ color: 'inherit', opacity: 0.9, fontSize: '1.05rem', lineHeight: 1.7 }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          marginTop: '60px', 
          padding: '2.5rem', 
          background: 'var(--gradient-red)', 
          color: '#ffffff', 
          borderRadius: '32px', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: 'var(--shadow-red)'
        }}>
          <p style={{ fontWeight: 900, fontSize: '1.25rem', color: '#ffffff' }}>Have a specific question about your industry?</p>
          <a 
            href="https://wa.me/923244898766" 
            target="_blank" 
            rel="noopener noreferrer"
            data-cursor="call" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              color: '#ffffff', 
              fontWeight: 900, 
              textDecoration: 'none',
              background: 'rgba(255,255,255,0.2)', 
              padding: '12px 30px', 
              borderRadius: '50px', 
              transition: 'all 0.3s ease' 
            }}
          >
            ASK ON WHATSAPP <ArrowRightCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
