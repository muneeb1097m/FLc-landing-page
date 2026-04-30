'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Calendar, Globe, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const industries = [
    'Software & IT', 'SaaS', 'Consulting', 'Accounting', 
    'Healthcare', 'Logistics'
  ];

  return (
    <section className="hero-section" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      paddingTop: 'calc(var(--nav-height) + 60px)',
      paddingBottom: '100px',
      overflow: 'hidden',
      background: 'white'
    }}>
      {/* Premium Background Elements */}
      <div className="mesh-bg">
        <div className="mesh-ball" style={{ top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'var(--primary)' }}></div>
        <div className="mesh-ball" style={{ bottom: '10%', left: '-10%', width: '500px', height: '500px', background: 'var(--primary)', animationDelay: '-5s' }}></div>
        <div className="mesh-ball" style={{ top: '40%', left: '30%', width: '300px', height: '300px', background: 'var(--primary)', opacity: 0.05, animationDelay: '-10s' }}></div>
        <div style={{ 
          position: 'absolute', inset: 0, opacity: 0.02, 
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' 
        }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content-wrapper" style={{ 
          display: 'flex', 
          flexDirection: 'row',
          alignItems: 'center',
          textAlign: 'left',
          marginBottom: '80px'
        }}>
          {/* Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '850px' }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <span style={{ 
                background: 'var(--primary-soft)', 
                color: 'var(--primary)', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.75rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                border: '1px solid rgba(225, 29, 72, 0.1)'
              }}>
                B2B Growth & Lead Generation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                fontWeight: 900, 
                color: 'var(--foreground)', 
                marginBottom: '2rem',
                lineHeight: 1.05,
                letterSpacing: '-0.05em'
              }}
            >
              If Your Customer Buys Once, You Made a <span style={{ color: 'var(--primary)' }}>Sale.</span> <br />
              If They Come Back, You Built <span style={{ color: 'var(--primary)' }}>Trust.</span> <br />
              If They Tell Others, You Built a <span style={{ color: 'var(--primary)' }}>Brand.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
                fontWeight: 600, 
                color: 'var(--text-muted)', 
                marginBottom: '3rem',
                lineHeight: 1.5,
                maxWidth: '750px'
              }}
            >
              In <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>90 days</span>, we become your entire marketing department — building a system that delivers <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>Sales Qualified Leads</span> directly to your calendar.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-start' }}>
              <motion.a 
                href="#contact"
                data-cursor="call"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium primary" 
                style={{ height: '64px', padding: '0 2.5rem', fontSize: '1.1rem', cursor: 'none' }}
              >
                <Calendar size={20} />
                Book a Free Strategy Call
              </motion.a>
              <motion.a 
                href="#how-it-works"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium secondary" 
                style={{ height: '64px', padding: '0 2.5rem', fontSize: '1.1rem', cursor: 'none' }}
              >
                How It Works 
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee Trust Bar - Center Fixed */}
        <motion.div 
          variants={itemVariants} 
          initial="hidden"
          animate="visible"
          style={{ 
            paddingTop: '3rem', 
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            position: 'relative',
            zIndex: 5
          }}
        >
          <p className="expertise-label" style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            color: 'var(--text-muted)', 
            textTransform: 'uppercase', 
            letterSpacing: '3px',
            textAlign: 'center',
            width: '100%',
            margin: 0
          }}>
            Expertise Across High-Growth Industries
          </p>
          
          <div className="marquee-wrapper">
            <div className="marquee-content" style={{ padding: '2.5rem 0' }}>
              {[...industries, ...industries, ...industries, ...industries].map((industry, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', whiteSpace: 'nowrap' }}>
                  <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--foreground)', opacity: 1, letterSpacing: '-0.03em' }}>
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
