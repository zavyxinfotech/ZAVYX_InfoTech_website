import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fafcff]"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/fdb6ccf6-cd6d-4e74-bea0-02fda3c46091/hatePj1PnM.lottie"
              loop
              autoplay
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
