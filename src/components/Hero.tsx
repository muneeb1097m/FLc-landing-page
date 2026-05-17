'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, CheckCircle2, Send } from 'lucide-react';

const inputStyle = {
  padding: '1rem 1.5rem',
  borderRadius: '16px',
  border: '1px solid var(--border)',
  background: '#ffffff',
  fontSize: '1rem',
  outline: 'none',
  transition: 'var(--transition-smooth)',
  width: '100%'
};

const Hero = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    businessName: '',
    email: '',
    websiteLink: '',
    whatsapp: '',
    challenge: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/Wk54OwLm0yWPHmcKoUJJ/webhook-trigger/2c6862b7-0004-4876-98d1-d89404db00bd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
      background: '#ffffff'
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
        <div className="grid-2" style={{ 
          alignItems: 'center',
          marginBottom: '120px',
          gap: '4rem'
        }}>
          {/* Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <span style={{ 
                background: 'var(--primary-soft)', 
                color: 'var(--primary)', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '50px', 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                letterSpacing: '1px',
                border: '1px solid rgba(225, 29, 72, 0.1)'
              }}>
                B2B Lead Generation Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', 
                fontWeight: 900, 
                color: 'var(--foreground)', 
                marginBottom: '2rem',
                lineHeight: 1.1,
                letterSpacing: '-0.04em'
              }}
            >
              If Your Customer Buys Once, You Made a <span style={{ color: 'var(--primary)' }}>Sale.</span> <br />
              If They Come Back, You Built <span style={{ color: 'var(--primary)' }}>Trust.</span> <br />
              If They Tell Others, You Built a <span style={{ color: 'var(--primary)' }}>Brand.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', 
                fontWeight: 600, 
                color: 'var(--text-muted)', 
                marginBottom: '2.5rem',
                lineHeight: 1.6
              }}
            >
              In <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>90 days</span>, we become your entire marketing department, building a complete lead generation system that delivers <span style={{ color: 'var(--foreground)', fontWeight: 800 }}>Sales Qualified Leads</span> directly to your calendar.
            </motion.p>

            {/* Key Value Points */}
            <motion.div 
              variants={itemVariants} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px', 
                marginBottom: '2.5rem' 
              }}
            >
              {[
                'Get your custom Ideal Customer Profile (ICP) draft in 24 hours',
                'No commitment, no pressure, free 30-minute strategy session',
                'Fully customized B2B lead generation blueprint for your agency'
              ].map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--foreground)', fontSize: '0.95rem' }}>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'flex-start' }}>
              <motion.button 
                onClick={() => {
                  const formElement = document.getElementById('hero-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                    const nameInput = document.getElementsByName('fullName')[0];
                    if (nameInput) nameInput.focus();
                  }
                }}
                data-cursor="call"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium primary" 
                style={{ height: '56px', padding: '0 2rem', fontSize: '1rem', cursor: 'none' }}
              >
                <Calendar size={18} />
                Book Your Strategy Call
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Form Side */}
          <div style={{ position: 'relative', width: '100%' }}>
            {status === 'success' ? (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ 
                  background: 'var(--bg-soft)', 
                  padding: '3rem', 
                  borderRadius: '40px', 
                  border: '1px solid var(--border)', 
                  boxShadow: 'var(--shadow-premium)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '450px'
                }}
              >
                <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#ffffff' }}>
                  <Send size={40} />
                </div>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem', fontWeight: 800 }}>Request Received!</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. We are reviewing your details and will get back to you within 24 hours to schedule your strategy call.
                </p>
                <a 
                  href="https://wa.me/923244898766" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  data-cursor="call"
                  className="btn-premium secondary" 
                  style={{ marginTop: '2rem', display: 'inline-flex', textDecoration: 'none', gap: '10px' }}
                >
                  Send a WhatsApp Message
                </a>
                <div 
                  onClick={() => setStatus('idle')} 
                  style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', opacity: 0.8 }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                >
                  ← Send Another Message
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                id="hero-form"
                style={{ 
                  background: 'var(--bg-soft)', 
                  padding: '2.5rem', 
                  borderRadius: '40px', 
                  border: '1px solid var(--border)', 
                  boxShadow: 'var(--shadow-premium)' 
                }}
              >
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                  Let's Build Your System
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', fontWeight: 500 }}>
                  Prepare your ICP draft and book a free 30-min strategy session.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div className="grid-2" style={{ gap: '1.2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Full Name</label>
                      <input 
                        name="fullName"
                        type="text" 
                        placeholder="Enter Your Name" 
                        style={inputStyle} 
                        required 
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Business Name</label>
                      <input 
                        name="businessName"
                        type="text" 
                        placeholder="Agency Name" 
                        style={inputStyle} 
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      placeholder="john@company.com" 
                      style={inputStyle} 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Website Link</label>
                    <input 
                      name="websiteLink"
                      type="url" 
                      placeholder="https://yourwebsite.com" 
                      style={inputStyle} 
                      required
                      value={formData.websiteLink}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>WhatsApp Number</label>
                    <input 
                      name="whatsapp"
                      type="text" 
                      placeholder="03XX-XXXXXXX" 
                      style={inputStyle} 
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Biggest Challenge</label>
                    <textarea 
                      name="challenge"
                      placeholder="Tell us what's holding you back..." 
                      style={{ ...inputStyle, height: '90px', resize: 'none', padding: '1.2rem' }}
                      required
                      value={formData.challenge}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    data-cursor="call" 
                    className="btn-premium primary" 
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      height: '56px', 
                      marginTop: '0.5rem', 
                      fontSize: '1.1rem',
                      opacity: status === 'loading' ? 0.7 : 1,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Send size={18} className={status === 'loading' ? 'animate-pulse' : ''} />
                    {status === 'loading' ? 'Sending Request...' : 'Talk to Expert'}
                  </button>
                  
                  {status === 'error' && (
                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--primary)', marginTop: '0.5rem', fontWeight: 700 }}>
                      Something went wrong. Please try again or WhatsApp us directly.
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </div>
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
            width: '100%',
            marginLeft: '0',
            position: 'relative',
            zIndex: 5,
            overflow: 'hidden'
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
