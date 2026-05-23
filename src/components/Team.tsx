'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';



interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Sumra Saleh',
      role: 'HR & Operations Manager',
      bio: 'Manages human resources, oversees day-to-day operations, and coordinates team logistics to keep campaigns running smoothly.',
      image: '/Sumra%20Saleh.jpeg',
      expertise: 'HR & Operations'
    },
    {
      name: 'Neelum Saleem',
      role: 'Content Writer',
      bio: 'Crafts highly engaging blog posts, B2B articles, newsletters, and conversion-focused copy for client campaigns.',
      image: '/Neelum%20saleem.jpeg',
      expertise: 'Content Writing'
    },
    {
      name: 'Muhammad Basit Mushtaq',
      role: 'Data Entry Operator',
      bio: 'Manages database integrity, inputs lead information into CRM systems, and validates contact lists with high accuracy.',
      image: '/Muhammad%20Basit%20Mushtaq.jpeg',
      expertise: 'Data Management'
    },
    {
      name: 'Priwish Siddique',
      role: 'Customer Service Representative',
      bio: 'Manages client communications, resolves concerns promptly, and ensures smooth onboarding of new projects.',
      image: '/Priwish%20siddique.jpeg',
      expertise: 'Customer Support'
    },
    {
      name: 'Nadeem Abbas',
      role: 'Upwork Bidder & BDE',
      bio: 'Identifies B2B growth opportunities, writes winning proposals on Upwork, and manages initial client communications to secure contracts.',
      image: '/Nadeem%20abbas.jpeg',
      expertise: 'Business Development'
    },
    {
      name: 'Zohaib Atif',
      role: 'Video Editor',
      bio: 'Produces and edits conversion-focused video assets, YouTube outreach materials, and interactive VSL videos.',
      image: '/Zohaib%20atif.jpeg',
      expertise: 'Video Editing'
    },
    {
      name: 'Taha Siddique',
      role: 'Data Entry Operator',
      bio: 'Manages database entry, inputs lead listings into CRM systems, and validates contact information to maintain high database accuracy.',
      image: '/taha%20siddique.jpeg',
      expertise: 'Data Management'
    },
    {
      name: 'Muhammad Usman',
      role: 'BDE',
      bio: 'Manages live LinkedIn outreach networks, establishes strategic business relationships, and vets qualified prospects.',
      image: '/Muhammad%20usman.jpeg',
      expertise: 'Business Development'
    },
    {
      name: 'Muhammad Azeem',
      role: 'Appointment Setter',
      bio: 'Engages with outbound prospects, qualifies incoming leads, and schedules sales meetings directly onto your calendar.',
      image: '/muhammad%20azeem.jpeg',
      expertise: 'Appointment Setting'
    },
    {
      name: 'Haseeb Gillani',
      role: 'Lead Generation Expert',
      bio: 'Architect of high-intent B2B campaigns, defining ICP parameters and crafting specific outreach angles.',
      image: '/Haseeb%20gillani.jpeg',
      expertise: 'Lead Gen Strategy'
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(3);
  const [slideCooldown, setSlideCooldown] = React.useState(false);

  const originalLength = teamMembers.length;
  // Duplicate first visible items to create seamless infinite scroll
  const extendedMembers = [...teamMembers, ...teamMembers.slice(0, 4)];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, visibleCount, slideCooldown]);

  const handleNext = () => {
    if (slideCooldown) return;
    setSlideCooldown(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => {
      setSlideCooldown(false);
    }, 700);
  };

  const handlePrev = () => {
    if (slideCooldown) return;
    setSlideCooldown(true);
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(originalLength);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(originalLength - 1);
        setTimeout(() => {
          setSlideCooldown(false);
        }, 700);
      }, 30);
    } else {
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => {
        setSlideCooldown(false);
      }, 700);
    }
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= originalLength) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHoverVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 30,
      borderColor: 'var(--border)', 
      boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.05)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      borderColor: 'var(--border)', 
      boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    cardHovered: {
      y: -12,
      borderColor: 'var(--primary)',
      boxShadow: '0 30px 60px -15px rgba(225, 29, 72, 0.22)',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageHoverVariants: any = {
    initial: {
      scale: 1,
      filter: 'grayscale(12%) contrast(1.02) brightness(0.96)'
    },
    visible: {
      scale: 1,
      filter: 'grayscale(12%) contrast(1.02) brightness(0.96)'
    },
    cardHovered: {
      scale: 1.08,
      filter: 'grayscale(0%) contrast(1.08) brightness(1.04)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const badgeHoverVariants: any = {
    initial: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)'
    },
    visible: {
      backgroundColor: 'rgba(15, 23, 42, 0.8)'
    },
    cardHovered: {
      backgroundColor: 'var(--primary)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const checkHoverVariants: any = {
    initial: {
      color: 'var(--primary-light)'
    },
    visible: {
      color: 'var(--primary-light)'
    },
    cardHovered: {
      color: '#ffffff',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };



  const accentHoverVariants: any = {
    initial: {
      width: '0%'
    },
    visible: {
      width: '0%'
    },
    cardHovered: {
      width: '100%',
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="team" className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '-10%', 
          width: '400px', 
          height: '400px', 
          background: 'var(--primary-soft)', 
          borderRadius: '50%', 
          filter: 'blur(120px)', 
          opacity: 0.5,
          pointerEvents: 'none' 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '-10%', 
          width: '500px', 
          height: '500px', 
          background: 'var(--primary-soft)', 
          borderRadius: '50%', 
          filter: 'blur(150px)', 
          opacity: 0.4,
          pointerEvents: 'none' 
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
            <span>The FLC Execution Squad</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
            Meet the Specialized Minds <br />
            <span style={{ color: 'var(--primary)' }}>Behind Your Growth System</span>
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.7 }}>
            No freelancers. No outsourcing. Just a dedicated, highly synchronized team of 10+ B2B acquisition specialists managing your client pipeline every single day.
          </p>
        </div>

        {/* Team Infinite Autoplay Carousel Viewport */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            overflow: 'hidden', 
            width: '100%', 
            margin: '0 -1.25rem', 
            padding: '1.5rem 1.25rem' 
          }}
        >
          {/* Carousel Track */}
          <div 
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              transition: isTransitioning ? 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              transform: `translate3d(-${currentIndex * (100 / visibleCount)}%, 0, 0)`,
              width: '100%'
            }}
          >
            {extendedMembers.map((member, index) => (
              <div 
                key={`${member.name}-${index}`}
                style={{ 
                  flex: `0 0 ${100 / visibleCount}%`, 
                  padding: '0 1.25rem',
                  display: 'flex'
                }}
              >
                <motion.div
                  variants={cardHoverVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="cardHovered"
                  viewport={{ once: true, margin: "-50px" }}
                  className="team-card"
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--border)',
                    borderRadius: '32px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%'
                  }}
                >
                  {/* Image Frame */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '320px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    backgroundColor: 'var(--bg-soft)'
                  }}>
                    <motion.img 
                      src={member.image} 
                      alt={member.name} 
                      variants={imageHoverVariants}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Badge Overlay */}
                    <motion.div 
                      variants={badgeHoverVariants}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '12px',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        padding: '6px 14px',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      <motion.div variants={checkHoverVariants} style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircle2 size={12} />
                      </motion.div>
                      <span>{member.expertise}</span>
                    </motion.div>
                  </div>

                  {/* Text Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--foreground)' }}>
                        {member.name}
                      </h3>
                    </div>

                    {/* Subtitle Role */}
                    <p style={{ 
                      color: 'var(--primary)', 
                      fontWeight: 800, 
                      fontSize: '0.85rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.5px',
                      marginBottom: '1rem' 
                    }}>
                      {member.role}
                    </p>

                    {/* Bio text */}
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-muted)', 
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                      {member.bio}
                    </p>
                  </div>

                  {/* Accent Bottom Line */}
                  <motion.div 
                    variants={accentHoverVariants}
                    style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      height: '4px', 
                      background: 'var(--gradient-red)'
                    }} 
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls (Arrows and Pagination Dots) */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '2.5rem' }}>
          <button 
            onClick={handlePrev}
            style={{
              background: 'var(--bg-soft)',
              border: '1.5px solid var(--border)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'var(--foreground)'
            }}
            className="carousel-btn"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {teamMembers.map((_, idx) => {
              const activeDot = currentIndex % originalLength;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (slideCooldown) return;
                    setCurrentIndex(idx);
                  }}
                  style={{
                    width: activeDot === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeDot === idx ? 'var(--primary)' : 'var(--border)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              );
            })}
          </div>

          <button 
            onClick={handleNext}
            style={{
              background: 'var(--bg-soft)',
              border: '1.5px solid var(--border)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'var(--foreground)'
            }}
            className="carousel-btn"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <style jsx>{`
          .carousel-btn:hover {
            background: var(--primary) !important;
            border-color: var(--primary) !important;
            color: #ffffff !important;
            transform: scale(1.05);
          }
        `}</style>

        {/* Call to Action Footer inside Team section */}
        <div style={{ 
          marginTop: '60px', 
          textAlign: 'center',
          background: 'var(--bg-soft)',
          border: '1px solid var(--border)',
          borderRadius: '32px',
          padding: '2rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'left', flex: '1 1 500px' }}>
            <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '0.25rem' }}>
              Want to see this team in action on your project?
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
              Book a call to review how our B2B professionals will build and manage your outbound infrastructure.
            </p>
          </div>
          <a 
            href="#contact" 
            data-cursor="call" 
            className="btn-premium primary" 
            style={{ 
              padding: '0.9rem 2.2rem', 
              fontSize: '1rem',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Talk to the Strategist</span>
          </a>
        </div>

      </div>

      {/* Animations are fully driven by Framer Motion nested variants propagation */}
    </section>
  );
};

export default Team;
