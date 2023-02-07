import React from 'react';
// import motion
import { motion } from 'framer-motion';

const Copyright = () => {
  return (
    <div className='bg-dark py-6 border-t border-[#de2c2c] text-[#DBDBDB]'>
      <div className='containet text-center mx-auto'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false, amount: 0 }}
          className='tracking-[0.02em] text-base'
        >
          &copy; 2022
          <span className='font-semibold text-white'>
            <a href="https://ealtugk.dev">ealtugk</a>
          </span>
          <br />
          All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
