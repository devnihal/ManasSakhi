import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Smile, Frown } from 'lucide-react';
import { AppContext } from '../App';

const Orb = () => {
  const { currentMood } = useContext(AppContext);

  const isCalm = currentMood === 'calm';
  const color = isCalm ? 'var(--primary-teal)' : 'var(--alert-orange)';

  // Base breathing animation
  const breathingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: isCalm ? 4 : 2, // Faster breathing if stressed
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="orb-container">
      <motion.div
        className="orb-glow"
        style={{ backgroundColor: color }}
        variants={breathingVariants}
        animate="animate"
      />
      <motion.div
        className="orb-core"
        style={{
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'absolute', /* Ensure the icon is centered over the glow */
          zIndex: 2 /* Show above glow */
        }}
        animate={{
          scale: isCalm ? 1 : 1.1,
          backgroundColor: color
        }}
        transition={{ duration: 0.8 }}
      >
        {isCalm ? <Smile size={200} strokeWidth={1.5} /> : <Frown size={200} strokeWidth={1.5} />}
      </motion.div>
    </div>
  );
};

export default Orb;
