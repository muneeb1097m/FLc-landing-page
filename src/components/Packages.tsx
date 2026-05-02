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
        'Minimum 3 LinkedIn IDs required'
      ],
      cta: 'Talk to Expert',
      popular: false
    },
    {
      name: 'Intermediate',
      price: 'PKR 280,000',
      period: 'per month',
      pipeline: 'Approx. $30k - $35k',
      description: 'Our flagship system. Total automation of your sales pipeline.',
      features: [
        'Everything in Basic, PLUS:',
        'Dedicated Appointment Setter',
        'GoHighLevel CRM Setup',
        'Automated Follow up Sequences',
        'Sales Intelligence Report',
        '30 to 35 SQLs Committed (90 Days)',
        'Minimum 3 LinkedIn IDs required'
      ],
      cta: 'Talk to Expert',
      popular: true
    },
    {
      name: 'Advanced',
      price: 'PKR 435,000',
      originalPrice: 'PKR 560,000',
      period: 'per month',
      pipeline: 'Approx. $60k - $70k',
      description: 'Maximum scale for established agencies looking for market dominance.',
      features: [
        'Everything in Intermediate DOUBLED',
        '60 to 70 SQLs Committed (90 Days)',
        'Double Outreach & Pipeline',
        'Priority Strategist Access',
        'Advanced CAPI Integration',
        'Save PKR 125,000 total',
        'Minimum 3 LinkedIn IDs required'
      ],
      cta: 'Talk to Expert',
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
              className="package-card"
              style={{ 
                background: plan.popular ? 'var(--foreground)' : '#ffffff', 
                color: plan.popular ? '#ffffff' : 'var(--foreground)',
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
                  background: 'var(--primary)', color: '#ffffff', padding: '8px 20px', 
                  borderRadius: '50px', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase'
                }}>
                  Hot Selling
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '1.5rem' }}>
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

              {plan.pipeline && (
                <div style={{ 
                  background: plan.popular ? 'rgba(255,255,255,0.1)' : 'var(--primary-soft)', 
                  padding: '1.2rem', 
                  borderRadius: '20px', 
                  marginBottom: '1.5rem',
                  border: `1px dashed ${plan.popular ? 'rgba(255,255,255,0.2)' : 'var(--primary)'}`
                }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7, marginBottom: '4px' }}>90-Day Pipeline Value</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: plan.popular ? '#ffffff' : 'var(--primary)' }}>{plan.pipeline}</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '4px', lineHeight: 1.4 }}>Estimated based on avg. deal size of $700 - $1,000 per SQL.</div>
                </div>
              )}

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
                  {plan.features.map((feature: string) => (
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

        {/* What's Not Included Section */}
        <div style={{ 
          marginTop: '60px', 
          background: '#ffffff', 
          borderRadius: '40px', 
          padding: '3rem', 
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={20} />
            </div>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 900 }}>What is <span style={{ color: 'var(--primary)' }}>Not Included</span></h4>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-soft)', borderRadius: '24px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Service Fee Only</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>The package prices listed cover the deployment of our 12-person specialized team on your project.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--bg-soft)', borderRadius: '24px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Ad Spend</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Paid directly by the client to platforms (Meta/Google) from their own pocket.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-soft)', borderRadius: '24px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>3rd-Party Tool Costs</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Any software or automation platform costs are borne by the client.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--bg-soft)', borderRadius: '24px' }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>Bulk Emailing Costs</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Infrastructure and sending costs for cold email campaigns are borne by the client.</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--primary-soft)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700 }}>
            <Check size={16} />
            <span>Client Prerequisite: A minimum of 3 LinkedIn IDs must be provided to initiate the system.</span>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.6 }}>
          <Info size={16} />
          <span>All packages include a 20 Day Performance Guarantee and ownership transfer.</span>
        </div>
      </div>
    </section>
  );
};

export default Packages;
