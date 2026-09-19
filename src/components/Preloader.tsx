import { motion } from "framer-motion";

export function Preloader({ onDone }: { onDone: () => void }) {
  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Saadoun Al-Zubaidi
        </motion.div>
        <div className="preloader-bar">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={onDone}
          />
        </div>
      </div>
    </motion.div>
  );
}
