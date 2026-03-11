import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingChat = () => {
  return (
    <motion.button
      className="floating-chat-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => console.log('Chat clicked')}
    >
      <MessageCircle size={24} color="var(--white)" />
    </motion.button>
  );
};

export default FloatingChat;
