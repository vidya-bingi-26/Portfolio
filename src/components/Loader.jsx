// src/components/HolographicLoader.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-loader-grid opacity-40" />

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Animated title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
        >
          Initializing System
        </motion.h1>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 relative"
          >
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
          </motion.div>
        </div>

        {/* Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-cyan-400 font-mono text-lg"
        >
          {progress}% COMPLETE
        </motion.p>

        {/* Scanning effect */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-1 bg-cyan-400 opacity-30 blur-sm"
        />
      </div>

      {/* Glowing orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 rounded-full bg-cyan-500 opacity-20 blur-3xl"
      />

      {/* CSS for the grid background */}
      <style jsx>{`
        .grid-loader-grid {
          background-image: linear-gradient(
              rgba(56, 182, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(56, 182, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
