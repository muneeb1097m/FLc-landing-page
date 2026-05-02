'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { AlertTriangle, XCircle, TrendingDown, ZapOff } from 'lucide-react';

const Problem = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="problem" className="section-padding" style={{ background: 'var(--bg-soft)', position: 'relative', overflow: 'hidden' }}>
      {/* Mesh Background */}
      <div className="mesh-bg">
        <div className="mesh-ball" style={{ top: '20%', right: '-10%', width: '400px', height: '400px', background: 'var(--primary)', opacity: 0.1 }}></div>
        <div className="mesh-ball" style={{ bottom: '-10%', left: '-5%', width: '350px', height: '350px', background: 'var(--primary)', opacity: 0.08, animationDelay: '-8s' }}></div>
      </div>
      
      {/* Accent Line */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--gradient-red)', opacity: 0.1 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
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
            }}
          >
            <AlertTriangle size={18} />
            The Hard Truth
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--foreground)', marginBottom: '1.5rem' }}
          >
            The Real <span style={{ color: 'var(--primary)' }}>Problem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 500, maxWidth: '700px', margin: '0 auto' }}
          >
            Most businesses we speak to have already been burned by an agency.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={cardVariants} 
            className="problem-card"
          >
            <div className="icon-box">
              <ZapOff size={32} />
            </div>
            <h3>The "Agency" Trap</h3>
            <p>
              Ads ran. Invoices were paid. <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Zero qualified meetings</span> came in. 
              The reason is always the same, no ICP, no system, no follow up. Just ads.
            </p>
            <ul className="problem-list">
              {['No ICP defined', 'No system built', 'Zero follow up'].map((item) => (
                <li key={item}><XCircle size={16} /> {item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardVariants} 
            className="problem-card"
          >
            <div className="icon-box">
              <TrendingDown size={32} />
            </div>
            <h3>The Platform Struggle</h3>
            <p>
              Saturated platforms, lowball clients, and <span style={{ color: 'var(--primary)', fontWeight: 800 }}>zero control</span> over your own pipeline. You are at the mercy of an algorithm.
            </p>
            <ul className="problem-list">
              {['Platform Commission', 'Saturated Markets', 'Algorithm Reliance'].map((item) => (
                <li key={item}><XCircle size={16} /> {item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Reveal Quote Block */}
        <RevealQuote />
      </div>

    </section>
  );
};

export default Problem;

const RevealQuote = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const quoteContent = (
    <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, margin: 0, width: '100%', maxWidth: '1000px' }}>
      "Either way, nobody built you a <span style={{ borderBottom: '3px solid white', paddingBottom: '4px' }}>system</span>. <br />
      That is the only thing we fix."
    </p>
  );

  return (
    <motion.div
      ref={containerRef}
      data-cursor="hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ 
        marginTop: '100px', 
        borderRadius: '40px', 
        position: 'relative',
        cursor: 'none',
        overflow: 'hidden',
        minHeight: '350px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-red)',
        boxShadow: 'var(--shadow-red)',
        userSelect: 'none',
        padding: '2rem 1rem'
      }}
    >
      {/* Base Layer: White Text on Red BG */}
      <div style={{ textAlign: 'center', color: '#ffffff', padding: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, margin: 0, width: '100%', maxWidth: '1000px', color: '#ffffff' }}>
          "Either way, nobody built you a <span style={{ borderBottom: '3px solid #ffffff', paddingBottom: '4px' }}>system</span>. <br />
          That is the only thing we fix."
        </p>
      </div>

      {/* Reveal Layer: Red Text on White BG */}
      <motion.div
        animate={{
          clipPath: isHovered 
            ? `circle(120px at ${mousePos.x}px ${mousePos.y}px)` 
            : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.1 }}
        style={{ 
          position: 'absolute',
          inset: 0,
          background: '#ffffff',
          color: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px',
          width: '100%',
          pointerEvents: 'none',
          zIndex: 10
        }}
      >
        <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 900, lineHeight: 1.3, margin: 0, width: '100%', maxWidth: '1000px', color: 'var(--primary)' }}>
          "Either way, nobody built you a <span style={{ borderBottom: '3px solid var(--primary)', paddingBottom: '4px' }}>system</span>. <br />
          That is the only thing we fix."
        </p>
      </motion.div>
    </motion.div>
  );
};
