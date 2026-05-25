'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, ChevronDown } from 'lucide-react';

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

const CustomSelect = ({ options, placeholder, onChange }: { options: string[], placeholder: string, onChange: (val: string) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          ...inputStyle, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          cursor: 'pointer',
          borderColor: isOpen ? 'var(--primary)' : 'var(--border)',
          boxShadow: isOpen ? '0 0 0 4px var(--primary-soft)' : 'none',
          color: selected ? 'var(--foreground)' : 'var(--text-muted)'
        }}
      >
        <span style={{ fontWeight: selected ? 700 : 500 }}>{selected || placeholder}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={18} style={{ color: 'var(--primary)' }} />
        </motion.div>
      </div>

      {isOpen && (
        <>
          <div 
            style={{ position: 'fixed', inset: 0, zIndex: 90 }} 
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{ 
              position: 'absolute', 
              top: '110%', 
              left: 0, 
              right: 0, 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-premium)',
              zIndex: 100,
              padding: '10px',
              overflow: 'hidden'
            }}
          >
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  setSelected(opt);
                  onChange(opt);
                  setIsOpen(false);
                }}
                style={{
                  padding: '14px 20px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  background: selected === opt ? 'var(--primary-soft)' : 'transparent',
                  color: selected === opt ? 'var(--primary)' : 'var(--foreground)',
                }}
                onMouseEnter={(e) => {
                  if (selected !== opt) {
                    e.currentTarget.style.background = 'var(--bg-soft)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected !== opt) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--foreground)';
                  }
                }}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

const Contact = () => {
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
        
        // Track custom event and tag in Microsoft Clarity
        if (typeof window !== 'undefined' && (window as any).clarity) {
          (window as any).clarity("event", "form_submit");
          (window as any).clarity("set", "FormSubmitted", "true");
        }
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

  if (status === 'success') {
    return (
      <section className="section-padding" style={{ background: '#ffffff', minHeight: '600px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ background: 'var(--bg-soft)', padding: '4rem', borderRadius: '40px', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--border)' }}
          >
            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#ffffff' }}>
              <Send size={40} />
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Request Received!</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
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
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Blur */}
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--primary-soft)', borderRadius: '50%', filter: 'blur(100px)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>
              Let's Build Your <span style={{ color: 'var(--primary)' }}>System.</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '3rem' }}>
              Fill in your details below. We will review your business, prepare your ICP draft, and get back to you within 24 hours to schedule your free 30-minute strategy call.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginLeft: '-1rem' }}>
              <div className="contact-item">
                <div className="icon-box-small" style={{ width: '60px', height: '60px', background: 'var(--bg-soft)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'all 0.3s ease' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5 }}>WhatsApp Us</div>
                  <a 
                    href="https://wa.me/923244898766" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-cursor="call"
                    style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--foreground)', textDecoration: 'none' }}
                  >
                    +92 324 4898766
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box-small" style={{ width: '60px', height: '60px', background: 'var(--bg-soft)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'all 0.3s ease' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.5 }}>Location</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>Lahore, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-soft)', padding: '3.5rem', borderRadius: '40px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-premium)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Full Name</label>
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Business Name</label>
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
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Email Address</label>
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
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Website Link</label>
                <input 
                  name="websiteLink"
                  type="text" 
                  placeholder="https://yourwebsite.com" 
                  style={inputStyle} 
                  required
                  value={formData.websiteLink}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>WhatsApp Number</label>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Biggest Challenge</label>
                <textarea 
                  name="challenge"
                  placeholder="Tell us what's holding you back..." 
                  style={{ ...inputStyle, height: '120px', resize: 'none', padding: '1.5rem' }}
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
                  height: '64px', 
                  marginTop: '1rem', 
                  fontSize: '1.1rem',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                }}
              >
                <Send size={20} className={status === 'loading' ? 'animate-pulse' : ''} />
                {status === 'loading' ? 'Sending Request...' : 'Talk to Expert'}
              </button>
              
              {status === 'error' && (
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--primary)', marginTop: '0.5rem', fontWeight: 700 }}>
                  Something went wrong. Please try again or WhatsApp us directly.
                </p>
              )}
              
              <p style={{ textAlign: 'center', fontSize: '0.85rem', opacity: 0.6, marginTop: '1rem', fontWeight: 600 }}>
                No commitment. No pressure. Just results.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
