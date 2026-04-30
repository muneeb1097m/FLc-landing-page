'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

const Packages = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'PKR 200,000',
      period: 'per month',
      description: 'Foundational outreach system for startups and solo founders.',
      features: [
        'Full 2-Phase Strategy Execution',
        'Foundation + Outreach Phase',
        'Qualified replies to your inbox',
        'You handle conversations & closing',
        'Weekly Handholding Support',
        'No fixed SQL commitment'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Intermediate',
      price: 'PKR 280,000',
      period: 'per month',
      description: 'Our flagship system. Total automation of your sales pipeline.',
      features: [
        'Everything in Basic, PLUS:',
        'Dedicated Appointment Setter',
        'GoHighLevel CRM Setup',
        'Automated Follow-up Sequences',
        'Sales Intelligence Report',
        '30–35 SQLs Committed (90 Days)',
        'You just show up to meetings'
      ],
      cta: 'Hot Selling',
      popular: true
    },
    {
      name: 'Advanced',
      price: 'PKR 435,000',
      originalPrice: 'PKR 560,000',
      period: 'per month',
      description: 'Maximum scale for established agencies looking for market dominance.',
      features: [
        'Everything in Intermediate DOUBLED',
        '60–70 SQLs Committed (90 Days)',
        'Double Outreach & Pipeline',
        'Priority Strategist Access',
        'Advanced CAPI Integration',
        'Save PKR 125,000 total',
        'Omni-channel Domination'
      ],
      cta: 'Scale to the Max',
      popular: false
    }
  ];

  return (
    <section id="packages" className="section-padding" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Results-Based <span style={{ color: 'var(--primary)' }}>Packages</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Transparent pricing focused on delivering Sales Qualified Leads to your calendar.
          </p>
        </div>

        <div className="grid-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {plans.map((plan: any, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={!plan.popular ? "package-card" : ""}
              style={{ 
                background: plan.popular ? 'var(--foreground)' : 'white', 
                color: plan.popular ? 'white' : 'var(--foreground)',
                padding: '3rem', 
                borderRadius: '40px', 
                border: plan.popular ? 'none' : '1px solid var(--border)',
                boxShadow: plan.popular ? 'var(--shadow-red)' : 'var(--shadow-premium)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                zIndex: plan.popular ? 2 : 1
              }}
            >
              {plan.popular && (
                <div style={{ 
                  position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--primary)', color: 'white', padding: '8px 20px', 
                  borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase'
                }}>
                  Hot Selling
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '2rem' }}>
                {plan.originalPrice && (
                  <span style={{ 
                    fontSize: '1rem', 
                    textDecoration: 'line-through', 
                    opacity: 0.5, 
                    display: 'block',
                    marginBottom: '0.2rem',
                    fontWeight: 700
                  }}>
                    {plan.originalPrice}
                  </span>
                )}
                <span style={{ fontSize: '2rem', fontWeight: 900 }}>{plan.price}</span>
                <span style={{ opacity: 0.6, fontSize: '0.9rem', marginLeft: '8px' }}>{plan.period}</span>
              </div>
              <p style={{ 
                fontSize: '0.95rem', 
                opacity: 0.8, 
                marginBottom: '2.5rem', 
                lineHeight: 1.6,
                minHeight: '3.2rem'
              }}>
                {plan.description}
              </p>
              
              <div style={{ flexGrow: 1, marginBottom: '3rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {plan.features.map(feature => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'start', gap: '12px', fontSize: '0.9rem', fontWeight: 600 }}>
                      <Check size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ opacity: plan.popular ? 0.9 : 0.8 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" data-cursor="call" className={`btn-premium ${plan.popular ? 'primary' : 'secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <Info size={16} />
          <span>All packages include a 20-Day Performance Guarantee and ownership transfer.</span>
        </div>
      </div>
    </section>
  );
};

export default Packages;
