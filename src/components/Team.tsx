'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, User, X, Briefcase, Mail, ArrowRight } from 'lucide-react';

interface LeaderNode {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  bio: string;
  quote: string;
  color: string; // Gradient color theme
  objectPosition?: string; // Optional custom framing
}

interface DepartmentNode {
  department: string;
  role: string;
  leader: string;
  leaderImage?: string;
  accentColor: string; // Theme color (teal, blue, purple, pink)
  members: { name: string; image?: string; isPlaceholder?: boolean }[];
}

const Team = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const leaders: LeaderNode[] = [
    {
      id: 'ceo',
      name: 'Faseeh Lall',
      role: 'Chief Executive Officer',
      avatar: '/faseeh lall.jpeg',
      initials: 'FL',
      bio: 'A self-made entrepreneur from Faisalabad, Pakistan, with a background in business studies. Faseeh has successfully launched and scaled multiple ventures across technology, real estate, and retail, dedicated to solving market gaps and creating local economic opportunities.',
      quote: 'Sustainable and innovative businesses are the keys to lasting change and empowering future leaders.',
      color: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)'
    },
    {
      id: 'cro',
      name: 'Umar Atif',
      role: 'Chief Revenue Officer',
      avatar: '/umar atif.jpeg',
      initials: 'UA',
      bio: 'Chief Revenue Officer. Leads monetization strategies, customer success alignment, and sales optimization across all client campaigns.',
      quote: 'Scaling revenue requires aligning high-intent lead routing with a frictionless sales process.',
      color: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      objectPosition: 'top'
    },
    {
      id: 'cmo',
      name: 'Manahil Atif',
      role: 'Chief Marketing Officer',
      initials: 'MA',
      bio: 'Chief Marketing Officer. Oversees brand messaging, multi-channel campaign scaling, content direction, and strategic market positioning.',
      quote: 'Every piece of content must solve a specific client pain point to build trust before the first pitch.',
      color: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      id: 'cto',
      name: 'Muneeb',
      role: 'Chief Technology Officer',
      initials: 'M',
      bio: 'Chief Technology Officer. Heads marketing automation infrastructure, CRM integration (GoHighLevel), email deliverability optimization, and analytical systems.',
      quote: 'Technical excellence ensures that our client systems operate at peak efficiency, keeping inbox metrics flawless.',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)'
    },
    {
      id: 'hr',
      name: 'Sumra Saleh',
      role: 'HR & Operations Manager',
      avatar: '/Sumra Saleh (2).jpeg',
      initials: 'SS',
      bio: 'Manages human resources, oversees day-to-day operations, and coordinates team logistics to keep all campaigns running smoothly.',
      quote: 'Operational harmony is what allows our specialized acquisition squad to execute flawlessly every day.',
      color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
  ];

  const departments: DepartmentNode[] = [
    {
      department: 'Business Development',
      role: 'Team Lead (Appointment Setter)',
      leader: 'Nadeem Abbas',
      leaderImage: '/Nadeem abbas (2).jpeg',
      accentColor: '#10b981',
      members: [
        { name: 'Maliha Atif' },
        { name: 'Muhammad Usman', image: '/Muhammad usman (2).jpeg' },
        { name: 'Huzaifa' }
      ]
    },
    {
      department: 'Business Development',
      role: 'Lead Gen Expert (Email Marketing)',
      leader: 'Haseeb Gilani',
      leaderImage: '/Haseeb gillani.jpeg',
      accentColor: '#10b981',
      members: [
        { name: 'Taha Siddique', image: '/taha siddique.jpeg' },
        { name: 'Basit Mushtaq', image: '/Muhammad Basit Mushtaq.jpeg' }
      ]
    },
    {
      department: 'Sales Department',
      role: 'Sales Team Lead',
      leader: 'Azeem',
      leaderImage: '/muhammad azeem.jpeg',
      accentColor: '#3b82f6',
      members: [
        { name: 'Priwish Siddique', image: '/Priwish siddique (2).jpeg' },
        { name: 'Shaheer Lall' }
      ]
    },
    {
      department: 'SEO Department',
      role: 'SEO Expert / Team Lead',
      leader: 'Atif',
      accentColor: '#3b82f6',
      members: [
        { name: 'Position Reserved / TBA', isPlaceholder: true }
      ]
    },
    {
      department: 'Content Department',
      role: 'Sr. Content Writer / TL',
      leader: 'Neelum Saleem',
      leaderImage: '/Neelum saleem (2).jpeg',
      accentColor: '#3b82f6',
      members: [
        { name: 'Position Reserved / TBA', isPlaceholder: true }
      ]
    },
    {
      department: 'Video Editing Department',
      role: 'Sr. Video Editor',
      leader: 'Position Vacant',
      accentColor: '#8b5cf6',
      members: [
        { name: 'Zohaib Atif (Jr. Editor)', image: '/Zohaib atif.jpeg' },
        { name: 'Muhaimin (Motion Graphic)' },
        { name: 'Team Member Name TBA', isPlaceholder: true }
      ]
    },
    {
      department: 'Design Department',
      role: 'Graphic Designer / TL',
      leader: 'Maaz',
      accentColor: '#8b5cf6',
      members: [
        { name: 'Team Member Name TBA', isPlaceholder: true }
      ]
    },
    {
      department: 'Social Media Department',
      role: 'Media Buyer / Team Lead',
      leader: 'Nafay',
      accentColor: '#ec4899',
      members: [
        { name: 'Future Team Members TBA', isPlaceholder: true }
      ]
    },
    {
      department: 'Social Media Department',
      role: 'Social Media Manager / TL',
      leader: 'Usman',
      accentColor: '#ec4899',
      members: [
        { name: 'Future Team Members TBA', isPlaceholder: true }
      ]
    }
  ];

  return (
    <section 
      id="team" 
      ref={containerRef}
      className="section-padding" 
      style={{ 
        background: '#ffffff', 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '120vh'
      }}
    >
      {/* Decorative Blur Gradients */}
      <div style={{ position: 'absolute', top: '5%', left: '-5%', width: '500px', height: '500px', background: 'rgba(225, 29, 72, 0.03)', borderRadius: '50%', filter: 'blur(150px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '600px', height: '600px', background: 'rgba(59, 130, 246, 0.03)', borderRadius: '50%', filter: 'blur(180px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'var(--primary-soft)', 
            color: 'var(--primary)', 
            padding: '8px 16px', 
            borderRadius: '50px', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={14} />
            <span>THE FLC EXECUTION SQUAD</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Meet the Specialized Minds <br />
            <span style={{ color: 'var(--primary)' }}>Behind Your Growth System</span>
          </h2>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.7 }}>
            No freelancers. No outsourcing. Just a dedicated, highly synchronized organizational structure of B2B acquisition specialists managing your client pipeline.
          </p>
        </div>

        {/* 1. LEADERSHIP HIERARCHY TREE */}
        <div style={{ 
          marginBottom: '100px'
        }}>
        
        <div style={{ 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          fontWeight: 800, 
          letterSpacing: '3px', 
          color: 'var(--text-muted)', 
          marginBottom: '30px',
          textTransform: 'uppercase'
        }}>
          Organizational Structure
        </div>

        {/* Desktop Branching Layout */}
        <motion.div layout className="hidden-mobile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          
          {/* Level 1: CEO */}
          <div style={{ zIndex: 10 }}>
            <LeadershipCard 
              leader={leaders[0]} 
              onClick={() => setSelectedLeader(leaders[0])} 
            />
          </div>

          {/* SVG Connecting Lines - Level 1 to Level 2 */}
          <div style={{ width: '100%', maxWidth: '1000px', height: '60px', margin: '-10px 0', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Vertical line from CEO */}
              <path d="M 400,0 L 400,30" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
              {/* Horizontal branch */}
              <path d="M 133,30 L 667,30" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
              {/* Vertical lines to Umar (left), Manahil (center), Muneeb (right) */}
              <path d="M 133,30 L 133,60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 400,30 L 400,60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
              <path d="M 667,30 L 667,60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Level 2: C-Levels */}
          <motion.div layout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', maxWidth: '1000px', zIndex: 10 }}>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <LeadershipCard leader={leaders[1]} onClick={() => setSelectedLeader(leaders[1])} />
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <LeadershipCard leader={leaders[2]} onClick={() => setSelectedLeader(leaders[2])} />
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <LeadershipCard leader={leaders[3]} onClick={() => setSelectedLeader(leaders[3])} />
            </div>
          </motion.div>

          {/* SVG Connecting Line - Level 2 to Level 3 */}
          <div style={{ width: '100%', maxWidth: '1000px', height: '60px', margin: '-10px 0', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Vertical down from central C-Level (Manahil) to HR */}
              <path d="M 400,0 L 400,60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Level 3: HR & Operations Manager */}
          <div style={{ zIndex: 10 }}>
            <LeadershipCard leader={leaders[4]} onClick={() => setSelectedLeader(leaders[4])} />
          </div>

          {/* SVG Dotted Pointer to Departments */}
          <div style={{ width: '100%', maxWidth: '1000px', height: '50px', margin: '-10px 0', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 400,0 L 400,50" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

        </motion.div>

        {/* Mobile Stacking Layout (Alternative) */}
        <div className="mobile-only" style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <LeadershipCard leader={leaders[0]} onClick={() => setSelectedLeader(leaders[0])} />
          <div className="dotted-vert" />
          <LeadershipCard leader={leaders[1]} onClick={() => setSelectedLeader(leaders[1])} />
          <div className="dotted-vert" />
          <LeadershipCard leader={leaders[2]} onClick={() => setSelectedLeader(leaders[2])} />
          <div className="dotted-vert" />
          <LeadershipCard leader={leaders[3]} onClick={() => setSelectedLeader(leaders[3])} />
          <div className="dotted-vert" />
          <LeadershipCard leader={leaders[4]} onClick={() => setSelectedLeader(leaders[4])} />
        </div>

        </div>

        {/* 2. DEPARTMENTS GRID (THE REST OF THE SQUAD) */}
        <div>
          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.8rem', 
            fontWeight: 800, 
            letterSpacing: '3px', 
            color: 'var(--text-muted)', 
            marginBottom: '40px',
            textTransform: 'uppercase'
          }}>
            Departments & Execution Specialists
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {departments.map((dept, idx) => (
              <DepartmentCard key={idx} dept={dept} />
            ))}
          </div>
        </div>

        {/* Footer Info Call-to-action */}
        <div style={{ 
          marginTop: '80px', 
          textAlign: 'center',
          background: 'var(--bg-soft)',
          border: '1px solid var(--border)',
          borderRadius: '32px',
          padding: '2.5rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'left', flex: '1 1 500px' }}>
            <p style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--foreground)', marginBottom: '0.25rem' }}>
              Want to see this team in action on your project?
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
              Book a call to review how our specialized B2B professionals will build and manage your outbound infrastructure.
            </p>
          </div>
          <a 
            href="#contact" 
            className="btn-premium primary" 
            style={{ 
              padding: '0.9rem 2.2rem', 
              fontSize: '1rem',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Talk to the Strategist</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* LEADERSHIP BIO MODAL (POPUP) */}
      <AnimatePresence>
        {selectedLeader && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(10px)'
              }}
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              style={{
                position: 'relative',
                background: '#ffffff',
                border: '1.5px solid var(--border)',
                borderRadius: '32px',
                width: '100%',
                maxWidth: '640px',
                padding: '3rem',
                boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.3)',
                zIndex: 1
              }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedLeader(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--bg-soft)',
                  border: '1.5px solid var(--border)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--foreground)',
                  transition: 'all 0.2s ease'
                }}
                className="close-modal-btn"
              >
                <X size={18} />
              </button>

              {/* Leader Info */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                {/* Large Avatar */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: selectedLeader.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.1)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {selectedLeader.avatar ? (
                    <img 
                      src={selectedLeader.avatar} 
                      alt={selectedLeader.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: selectedLeader.objectPosition || 'center' }}
                    />
                  ) : (
                    selectedLeader.initials
                  )}
                </div>

                <div style={{ 
                  background: 'var(--primary-soft)', 
                  color: 'var(--primary)', 
                  padding: '6px 16px', 
                  borderRadius: '50px', 
                  fontSize: '0.75rem', 
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  Leadership Squad
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '0.25rem' }}>
                  {selectedLeader.name}
                </h3>
                <p style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2rem' }}>
                  {selectedLeader.role}
                </p>

                {/* Bio Description */}
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {selectedLeader.bio}
                </p>

                {/* Quote Card */}
                <div style={{
                  background: 'var(--bg-soft)',
                  borderRadius: '16px',
                  padding: '1.5rem 2rem',
                  width: '100%',
                  textAlign: 'left',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'stretch'
                }}>
                  {/* Vertical Accent Bar (Perfect Rounded Caps) */}
                  <div style={{ 
                    width: '4px', 
                    background: 'var(--primary)', 
                    borderRadius: '10px',
                    flexShrink: 0
                  }} />
                  
                  <p style={{ 
                    fontStyle: 'italic', 
                    fontSize: '1rem', 
                    color: 'var(--foreground)', 
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    "{selectedLeader.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .dotted-vert {
          width: 2px;
          height: 30px;
          border-left: 2px dashed #cbd5e1;
        }

        .close-modal-btn:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: white !important;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
};

// LEADERSHIP CARD COMPONENT
interface LeadershipCardProps {
  leader: LeaderNode;
  onClick: () => void;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ leader, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)' }}
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--border)',
        borderRadius: '24px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem',
        cursor: 'pointer',
        width: '340px',
        maxWidth: '100%',
        boxShadow: '0 12px 30px -12px rgba(15, 23, 42, 0.06)',
        transition: 'border-color 0.3s ease',
        overflow: 'hidden'
      }}
      className="leadership-card"
    >
      {/* Header Info Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', width: '100%' }}>
        {/* Circle Avatar (With Gradient or Photo) */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: leader.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '1.6rem',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.06)'
        }}>
          {leader.avatar ? (
            <img src={leader.avatar} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: leader.objectPosition || 'center' }} />
          ) : (
            leader.initials
          )}
        </div>

        {/* Info */}
        <div style={{ textAlign: 'left' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground)', margin: '0 0 2px 0' }}>
            {leader.name}
          </h4>
          <p style={{ 
            fontSize: '0.775rem', 
            fontWeight: 700, 
            color: 'var(--text-muted)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.5px',
            margin: 0
          }}>
            {leader.role}
          </p>
        </div>
      </div>

      {/* Expanded Details Row */}
      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', textAlign: 'left', width: '100%' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25, ease: 'easeOut', delay: 0.05 }}
              style={{ 
                borderTop: '1px solid var(--border)', 
                paddingTop: '1rem', 
                marginTop: '0.15rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}
            >
              {/* Vision Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '3px', height: '12px', background: 'var(--primary)', borderRadius: '10px' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Vision & Background
                </span>
              </div>
              
              {/* Bio */}
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#334155', 
                lineHeight: 1.5,
                margin: 0,
                fontWeight: 500
              }}>
                {leader.bio}
              </p>

              {/* Quote */}
              <div style={{ 
                background: 'var(--bg-soft)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                marginTop: '8px',
                width: '100%',
                display: 'flex',
                gap: '12px',
                alignItems: 'stretch'
              }}>
                {/* Vertical Accent Bar (Perfect Rounded Caps) */}
                <div style={{ 
                  width: '3px', 
                  background: 'var(--primary)', 
                  borderRadius: '10px',
                  flexShrink: 0
                }} />
                
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--foreground)', 
                  fontStyle: 'italic', 
                  fontWeight: 600,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.95
                }}>
                  "{leader.quote}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .leadership-card:hover {
          border-color: var(--primary) !important;
        }
      `}</style>
    </motion.div>
  );
};

// DEPARTMENT CARD COMPONENT
interface DepartmentCardProps {
  dept: DepartmentNode;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ dept }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 35px 70px -15px rgba(15, 23, 42, 0.15)' }}
      style={{
        background: '#ffffff',
        border: '1.5px solid var(--border)',
        borderRadius: '32px',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'default',
        boxShadow: '0 12px 35px -12px rgba(15, 23, 42, 0.05)',
        transition: 'border-color 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="dept-card"
    >
      {/* Top Accent Line (Perfect Rounded Clipping) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: dept.accentColor
      }} />

      {/* Department Pill */}
      <div style={{
        alignSelf: 'flex-start',
        background: 'var(--bg-soft)',
        border: '1px solid var(--border)',
        borderRadius: '50px',
        padding: '6px 14px',
        fontSize: '0.75rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--text-muted)',
        marginBottom: '1.75rem'
      }}>
        {dept.department}
      </div>

      {/* Role & Leader Section */}
      <div style={{ marginBottom: '1.75rem' }}>
        <p style={{ 
          fontSize: '0.8rem', 
          fontWeight: 700, 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5px',
          marginBottom: '6px'
        }}>
          {dept.role}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px' }}>
          {/* Leader Photo / Avatar */}
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            {dept.leaderImage ? (
              <img src={dept.leaderImage} alt={dept.leader} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <User size={22} style={{ color: 'var(--text-muted)' }} />
            )}
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--foreground)', margin: 0 }}>
            {dept.leader}
          </h3>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.75rem' }} />

      {/* Team Members List */}
      <div style={{ flexGrow: 1 }}>
        <p style={{ 
          fontSize: '0.75rem', 
          fontWeight: 800, 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase', 
          letterSpacing: '1px',
          marginBottom: '1rem'
        }}>
          Team Members
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {dept.members.map((member, mIdx) => (
            <motion.li 
              key={mIdx} 
              whileHover={{ x: 4 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                fontSize: '0.9rem',
                color: member.isPlaceholder ? 'var(--text-muted)' : 'var(--foreground)',
                fontStyle: member.isPlaceholder ? 'italic' : 'normal',
                fontWeight: member.isPlaceholder ? 500 : 600
              }}
            >
              {/* Optional Mini-Avatar or Bullet Dot */}
              {member.image ? (
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border)' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  background: member.isPlaceholder ? 'var(--border)' : dept.accentColor,
                  marginLeft: '8px',
                  marginRight: '10px'
                }} />
              )}
              <span>{member.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .dept-card:hover {
          border-color: ${dept.accentColor} !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Team;
