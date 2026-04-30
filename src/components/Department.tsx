'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Wallet } from 'lucide-react';

const Department = () => {
  const roles = [
    { role: 'Strategist', job: 'Builds your 90-day plan' },
    { role: 'Content Writer', job: 'ICP-focused scripts and posts' },
    { role: 'Copywriter', job: 'Landing page and ad copy' },
    { role: 'Graphic Designer', job: 'All creatives' },
    { role: 'Video Production', job: 'CEO videos & scripts' },
    { role: 'LinkedIn Outreach', job: '3 dedicated IDs running' },
    { role: 'Appointment Setter', job: 'Qualifies leads & books meetings' },
  ];

  return (
    <section className="section-padding" style={{ background: 'white' }}>
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
          <div style={{ background: 'var(--bg-soft)', borderRadius: '40px', padding: '1rem', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
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
                    style={{ background: 'white', borderRadius: '20px', transition: 'background-color 0.2s ease' }}
                  >
                    <td style={{ padding: '1.5rem 2rem', fontWeight: 800, borderRadius: '20px 0 0 20px', border: '1px solid var(--border)', borderRight: 'none', color: 'inherit' }}>{item.role}</td>
                    <td style={{ padding: '1.5rem 2rem', borderRadius: '0 20px 20px 0', border: '1px solid var(--border)', borderLeft: 'none', color: 'inherit' }}>{item.job}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparison */}
          <div>
            <div style={{ padding: '3rem', background: 'var(--gradient-red)', color: 'white', borderRadius: '40px', marginBottom: '2rem', boxShadow: 'var(--shadow-red)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem', color: 'white' }}>
                <Wallet size={32} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 900 }}>The Cost Reality</h4>
              </div>
              
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 700 }}>Hiring In-House Team</p>
                <div style={{ fontSize: '2rem', fontWeight: 900, textDecoration: 'line-through', opacity: 0.5 }}>PKR 8 Lacs+ /mo</div>
              </div>

              <div style={{ marginBottom: '2.5rem', padding: '2rem', background: 'white', borderRadius: '24px', border: 'none' }}>
                <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>FLC Full Team All-In</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--foreground)' }}>Starts PKR 2 Lacs</div>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 }}>Zero recruitment. Zero overhead. Total ownership.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <TrendingUp size={20} style={{ color: 'white' }} />
                  <span style={{ fontWeight: 800 }}>Save PKR 6 Lacs per month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Users size={20} style={{ color: 'white' }} />
                  <span style={{ fontWeight: 800 }}>Access to 12+ specialized roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
