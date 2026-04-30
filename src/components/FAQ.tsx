'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ArrowRightCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "I've tried agencies before and they failed.",
      a: "They likely ran ads without an ICP definition or a follow-up system. We don't just run ads; we build the entire backend system. Book a 15-min audit to see the difference."
    },
    {
      q: "What if you miss the SQL target?",
      a: "We keep running at no extra cost until every committed SQL is delivered. Your 90 days don't end until the number is met."
    },
    {
      q: "Do I own the assets after 90 days?",
      a: "Yes, 100%. You own the CRM setup, the landing pages, the ad accounts, and the lead database. We even train your team if you want to take it in-house."
    },
    {
      q: "How do you ensure leads are 'Qualified'?",
      a: "Every lead is pre-vetted by our appointment setters based on your exact ICP. We don't book a meeting unless they meet your budget and role criteria."
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
                color: 'white',
                y: -10,
                boxShadow: 'var(--shadow-red)'
              }}
              viewport={{ once: true }}
              style={{ 
                background: 'white', 
                padding: '2.5rem', 
                borderRadius: '32px', 
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'default',
                transition: 'background-color 0.3s ease, color 0.3s ease'
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
          color: 'white', 
          borderRadius: '32px', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          boxShadow: 'var(--shadow-red)'
        }}>
          <p style={{ fontWeight: 900, fontSize: '1.25rem', color: 'white' }}>Have a specific question about your industry?</p>
          <a 
            href="https://wa.me/923334944679" 
            target="_blank" 
            rel="noopener noreferrer"
            data-cursor="call" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              color: 'white', 
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
