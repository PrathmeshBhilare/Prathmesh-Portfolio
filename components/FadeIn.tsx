import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children?: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  staggerChildren?: number;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = 'up',
  staggerChildren,
  duration = 0.6
}) => {
  const getVariants = () => {
    const hidden: any = { opacity: 0 };
    const visible: any = { opacity: 1, transition: { duration, ease: [0.25, 0.1, 0.25, 1.0], delay: delay / 1000 } };
    
    if (staggerChildren) {
      visible.transition.staggerChildren = staggerChildren;
    }

    switch (direction) {
      case 'up': hidden.y = 40; visible.y = 0; break;
      case 'down': hidden.y = -40; visible.y = 0; break;
      case 'left': hidden.x = -40; visible.x = 0; break;
      case 'right': hidden.x = 40; visible.x = 0; break;
      default: break;
    }

    return { hidden, visible };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
