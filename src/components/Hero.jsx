import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import myimage from "../assets/images/formal_photo_vidya.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-between overflow-hidden bg-neutral-950 px-12"
    >
      {/* Dynamic gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(99,102,241,0.4) 0%, rgba(0,0,0,0) 70%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtZGFzaGFycmF5PSI1LDUiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIvPjwvZz48L3N2Zz4=')]" />

      {/* Left-aligned content */}
      <div className="w-1/2 relative z-10">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="text-left"
        >
          {/* Name with animated gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                I'm Vidya Bingi
              </span>
            </h1>
          </motion.div>

          {/* Animated divider with glow effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-48 my-8 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />

          {/* Profession with typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="overflow-hidden mb-12"
          >
            <p className="text-xl md:text-2xl text-neutral-400 font-light">
              <Typewriter text="Digital Experience Designer & Developer" delay={80} />
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 relative group"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <span className="relative overflow-hidden inline-block">
                  <span className="flex items-center gap-2 border-b border-transparent group-hover:border-indigo-400 transition-all duration-300 pb-1">
                    VIEW WORK
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300 delay-100"></span>
                </span>
              </span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 relative group"
            >
              <span className="relative z-10 flex items-center gap-2 text-white rounded-lg px-8 py-3 transition-all duration-300">
                <span className="relative">
                  DOWNLOAD CV
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Circular photo frame on the right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-1/2 flex justify-center items-center z-10"
      >
        <div className="relative w-96 h-96">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 blur-xl animate-pulse"></div>
          
          {/* Photo container */}
          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-indigo-400/30">
            <img 
              src={myimage}
              alt="Vidya Bingi"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -inset-4 rounded-full border-2 border-indigo-400/10 animate-spin-slow"></div>
          <div className="absolute -inset-6 rounded-full border border-indigo-400/5 animate-spin-slower"></div>
        </div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-indigo-400/50 rounded-full flex justify-center"
          >
            <div className="w-0.5 h-3 bg-indigo-400 mt-2" />
          </motion.div>
          <p className="text-xs text-indigo-400/80 mt-2 tracking-widest">
            SCROLL
          </p>
        </div>
      </motion.div>

      {/* Floating particles background */}
      <Particles />
    </section>
  );
};

const ArrowRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const Download = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const Particles = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [`${particle.y}vh`, `${particle.y + 20}vh`],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            left: `${particle.x}vw`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "#6366f1",
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
};


// Typewriter component for the profession text
const Typewriter = ({ text, delay = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, delay);

    return () => clearInterval(typing);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5"
      >
        |
      </motion.span>
    </span>
  );
};

export default Hero;
