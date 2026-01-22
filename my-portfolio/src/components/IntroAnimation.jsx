import React from 'react' import { motion } from 'framer-motion'

const IntroAnimation = () => { return ( <div className="fixed inset-0 flex items-center justify-center bg-black text-white overflow-hidden"> <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-center" > <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-4xl md:text-6xl font-bold tracking-tight" > Welcome </motion.h1>

<motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-4 text-base md:text-lg text-gray-300"
    >
      Initializing experience
    </motion.p>

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ delay: 1, duration: 1.2, ease: 'easeInOut' }}
      className="mt-8 h-1 bg-white mx-auto max-w-xs"
    />
  </motion.div>
</div>

) }

export default IntroAnimation
