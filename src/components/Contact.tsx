'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, ChevronDown } from 'lucide-react';

const inputStyle = {
  padding: '1rem 1.5rem',
  borderRadius: '16px',
  border: '1px solid var(--border)',
  background: 'white',
  fontSize: '1rem',
  outline: 'none',
  transition: 'var(--transition-smooth)',
  width: '100%'
};

const CustomSelect = ({ options, placeholder }: { options: string[], placeholder: string }) => {
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
              background: 'white', 
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
  return (
    <section id="contact" className="section-padding" style={{ background: 'white', position: 'relative', overflow: 'hidden' }}>
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
                    href="https://wa.me/923334944679" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--foreground)', textDecoration: 'none' }}
                  >
                    0333-4944679
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
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Business Name</label>
                  <input type="text" placeholder="Agency Name" style={inputStyle} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Industry</label>
                <CustomSelect 
                  options={['Software & IT', 'SaaS', 'Consulting', 'Accounting', 'Healthcare', 'Logistics']} 
                  placeholder="Select Industry"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>WhatsApp Number</label>
                <input type="text" placeholder="03XX-XXXXXXX" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.7 }}>Biggest Challenge</label>
                <textarea placeholder="Tell us what's holding you back..." style={{ ...inputStyle, height: '120px', resize: 'none', padding: '1.5rem' }}></textarea>
              </div>
              <button data-cursor="call" className="btn-premium primary" style={{ width: '100%', justifyContent: 'center', height: '64px', marginTop: '1rem', fontSize: '1.1rem' }}>
                <Send size={20} />
                Book My Strategy Call
              </button>
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
