'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

import { Phone } from 'lucide-react';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }
    
    setIsVisible(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: any) => {
      setIsHovered(true);
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorType(target.getAttribute('data-cursor'));
      }
    };
    
    const handleHoverEnd = () => {
      setIsHovered(false);
      setCursorType('default');
    };
    
    const handleClickDown = () => setIsClicking(true);
    const handleClickUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleClickDown);
    window.addEventListener('mouseup', handleClickUp);

    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .interactive, [data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleClickDown);
      window.removeEventListener('mouseup', handleClickUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovered ? 60 : 20,
        height: isHovered ? 60 : 20,
        backgroundColor: isHovered ? (cursorType === 'call' ? 'var(--primary)' : 'rgba(225, 29, 72, 0.1)') : 'var(--primary)',
        border: isHovered && cursorType !== 'call' ? '2px solid var(--primary)' : 'none',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: isHovered && cursorType !== 'call' ? 'blur(2px)' : 'none',
        color: 'white',
        opacity: cursorType === 'hidden' ? 0 : 1,
      }}
      animate={{
        scale: isClicking ? 0.8 : 1,
      }}
    >
      {isHovered && cursorType === 'call' && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Phone size={24} fill="white" />
        </motion.div>
      )}
      {isHovered && cursorType === 'default' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            width: 8,
            height: 8,
            backgroundColor: 'var(--primary)',
            borderRadius: '50%',
          }}
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
