'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  Users, 
  Share2,
  CalendarDays,
  LineChart
} from 'lucide-react';

const OpsHub = () => {
  const dashboardFeatures = [
    {
      title: "Daily Task Transparency",
      description: "No more wondering what's happening. See every task, outreach, and optimization in real-time.",
      icon: <CheckCircle2 size={24} />,
      color: "#e11d48"
    },
    {
      title: "90-Day Performance Tracking",
      description: "Analyze trends and growth with a comprehensive 90-day view of your entire sales engine.",
      icon: <BarChart3 size={24} />,
      color: "#e11d48"
    },
    {
      title: "Real-Time Team Metrics",
      description: "Monitor team performance and activity levels as they happen, ensuring maximum output.",
      icon: <Users size={24} />,
      color: "#e11d48"
    },
    {
      title: "Client-Shareable Links",
      description: "Get a dedicated, white-labeled link to monitor everything without needing to log in.",
      icon: <Share2 size={24} />,
      color: "#e11d48"
    }
  ];

  return (
    <section id="ops-hub" className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-white)' }}>
      {/* Background Accents */}
      <div className="mesh-bg">
        <div className="mesh-ball" style={{ width: '40vw', height: '40vw', background: 'var(--primary)', top: '-10%', right: '-5%', opacity: 0.03 }}></div>
        <div className="mesh-ball" style={{ width: '30vw', height: '30vw', background: 'var(--primary)', bottom: '0', left: '-5%', opacity: 0.05 }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--primary-soft)', color: 'var(--primary)', borderRadius: '100px', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              <LayoutDashboard size={16} />
              Operational Transparency
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Your Business <span style={{ color: 'var(--primary)' }}>Command Center</span>
            </h2>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
              We don't operate in a black box. As we take over your entire outreach and lead generation engine, you get full access to our Ops Hub Dashboard—ensuring your time is saved while maintaining complete transparency.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {dashboardFeatures.map((feature, i) => (
                <div key={i}>
                  <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{feature.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '3rem' }}>
              <a href="#contact" className="btn-premium primary">
                Talk to Expert
              </a>
            </div>
          </motion.div>

          {/* Right: Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            style={{ position: 'relative' }}
          >
            {/* Dashboard Image Container */}
            <div style={{ 
              background: '#ffffff', 
              borderRadius: '30px', 
              padding: '1rem', 
              boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1
            }}>
              <img 
                src="/image.png" 
                alt="Ops Hub Dashboard" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '20px',
                  display: 'block'
                }} 
              />

              {/* Float Card: Team Pulse */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ 
                  position: 'absolute', 
                  bottom: '10%', 
                  right: '-5%', 
                  background: 'var(--gradient-red)', 
                  color: '#ffffff', 
                  padding: '1.2rem', 
                  borderRadius: '20px', 
                  boxShadow: '0 20px 40px rgba(225, 29, 72, 0.3)',
                  zIndex: 2,
                  width: '180px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>Team Active</span>
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800 }}>Live Syncing...</div>
                <div style={{ fontSize: '0.65rem', opacity: 0.8 }}>9 Outreach Agents Online</div>
              </motion.div>
            </div>

            {/* Decorative element behind image */}
            <div style={{ 
              position: 'absolute', 
              top: '5%', 
              left: '5%', 
              right: '-5%', 
              bottom: '-5%', 
              background: 'var(--primary-soft)', 
              borderRadius: '30px', 
              zIndex: -1 
            }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpsHub;
