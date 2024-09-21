// components/AnimatedCard.tsx
'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Card } from './card'; // Corrected import path

interface AnimatedCardProps {
  children: React.ReactNode;
}

const AnimatedCard = ({ children }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start transparent and 50px below
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the component is visible
      transition={{ duration: 0.6, ease: 'easeOut' }} // Animation timing
      className="w-full" // Ensure the motion.div takes full width; adjust as needed
    >
      <Card>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
