import { motion } from 'motion/react'

/**
 * Scroll-triggered reveal. Fades + rises into view once.
 * `delay` staggers siblings; `as` lets you reveal any element type.
 */
export default function Reveal({ children, delay = 0, y = 26, as = 'div', className, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
