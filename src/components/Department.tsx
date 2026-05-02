'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Wallet, CheckCircle2 } from 'lucide-react';

const Department = () => {
  const roles = [
    { role: 'Strategist', job: 'Builds your 90 day plan' },
    { role: 'Content Writer', job: 'ICP focused scripts and posts' },
    { role: 'Copywriter', job: 'Landing page and ad copy' },
    { role: 'Graphic Designer', job: 'All creatives' },
    { role: 'Video Production Person', job: "Records CEO videos if you can't appear on camera" },
    { role: 'Video Editor', job: 'All video editing' },
    { role: 'Social Media Manager', job: 'Platform management' },
    { role: 'LinkedIn Outreach Team', job: '3 dedicated IDs running simultaneously' },
    { role: 'CRM Manager', job: 'GoHighLevel setup and management' },
    { role: 'Project Manager', job: 'Oversees everything' },
    { role: 'Appointment Setter', job: 'Qualifies leads and books your meetings' },
  ];

  return (
    <section className="section-padding" style={{ background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            Your Entire <span style={{ color: 'var(--primary)' }}>Marketing Department</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            You are not hiring an agency. You are getting a full-stack production team for the price of a single junior employee.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          {/* Table */}
          <div style={{ 
            background: 'var(--bg-soft)', 
            borderRadius: '40px', 
            padding: '1rem', 
            border: '1px solid var(--border)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px', minWidth: '400px' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1.5rem 2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5 }}>Role</th>
                  <th style={{ textAlign: 'left', padding: '1.5rem 2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.5 }}>Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((item, i) => (
                  <motion.tr 
                    key={item.role} 
                    whileHover={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    style={{ background: '#ffffff', borderRadius: '20px', transition: 'background-color 0.2s ease' }}
                  >
                    <td style={{ padding: '1.5rem 2rem', fontWeight: 800, borderRadius: '20px 0 0 20px', border: '1px solid var(--border)', borderRight: 'none', color: 'inherit', whiteSpace: 'nowrap' }}>{item.role}</td>
                    <td style={{ padding: '1.5rem 2rem', borderRadius: '0 20px 20px 0', border: '1px solid var(--border)', borderLeft: 'none', color: 'inherit' }}>{item.job}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison */}
          <div>
            <div style={{ padding: '3rem', background: 'var(--gradient-red)', color: '#ffffff', borderRadius: '40px', marginBottom: '2rem', boxShadow: 'var(--shadow-red)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem', color: '#ffffff' }}>
                <Wallet size={32} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 900 }}>The Cost Reality</h4>
              </div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 700 }}>Hiring In-House Team</p>
                <div style={{ fontSize: '2rem', fontWeight: 900, textDecoration: 'line-through', opacity: 0.5 }}>PKR 8 Lacs+ /mo</div>
              </div>
 
              <div style={{ marginBottom: '2.5rem', padding: '2rem', background: '#ffffff', borderRadius: '24px', border: 'none' }}>
                <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>FLC Full Team All-In</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)' }}>Starts PKR 2 Lacs</div>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 }}>Zero recruitment. Zero overhead. Total ownership.</p>
              </div>
 
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <TrendingUp size={20} style={{ color: '#ffffff' }} />
                  <span style={{ fontWeight: 800 }}>Save PKR 6 Lacs per month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Users size={20} style={{ color: '#ffffff' }} />
                  <span style={{ fontWeight: 800 }}>Access to 12+ specialized roles</span>
                </div>
              </div>
            </div>

            {/* Added Content to Balance Height */}
            <div style={{ padding: '3rem', background: 'var(--bg-soft)', borderRadius: '40px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '4px', height: '20px', background: 'var(--primary)', borderRadius: '10px' }}></div>
                The Hidden Cost of In-House
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Hiring a single employee costs more than just their salary. When you hire in-house, you take on risks that we eliminate.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { title: 'Recruitment Fees', desc: 'Typically 15-20% of annual salary.' },
                  { title: 'Management Overhead', desc: 'You spend hours managing them instead of your business.' },
                  { title: 'Software & Tools', desc: 'CRM, LinkedIn Sales Nav, and AI tools cost $500+/mo.' },
                  { title: 'The Expert Gap', desc: 'A junior can execute, but they can\'t strategize like our team.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '2px' }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--foreground)' }}>{item.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>The FLC Advantage</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  We provide the strategy, the execution, and the infrastructure. You just provide the sales team to close the deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
