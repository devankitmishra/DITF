// Footer.js

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        // backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>
        Anime Fan Page &copy; {new Date().getFullYear()} | Powered by React and Framer Motion
      </p>
    </motion.footer>
  );
};

export default Footer;
