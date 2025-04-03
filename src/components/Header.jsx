import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? "closed" : "open");
  };

  const menuVariants = {
    open: { rotate: 45, y: 6, transition: { duration: 0.2 } },
    closed: { rotate: 0, y: 0, transition: { duration: 0.2 } },
  };

  const navItemVariants = {
    hover: {
      y: -2,
      color: "#6366f1",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-xl font-bold relative group"
          whileHover="hover"
          whileTap="tap"
          variants={navItemVariants}
        >
          <img src={logo} className="h-24 w-auto"></img>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["projects", "about", "contact"].map((item) => (
              <motion.li
                key={item}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href={`#${item}`}
                  className={`relative px-3 py-2 text-sm uppercase tracking-wider ${
                    activeSection === item
                      ? "text-indigo-400"
                      : "text-neutral-300"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white absolute"
            variants={menuVariants}
            animate={controls}
            style={{ top: "25%" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white absolute"
            animate={{ opacity: isOpen ? 0 : 1 }}
            style={{ top: "50%" }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white absolute"
            variants={menuVariants}
            animate={controls}
            style={{ top: "75%", rotate: isOpen ? -45 : 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "100vh",
              transition: { duration: 0.4 },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.4 },
            }}
            className="md:hidden fixed inset-0 bg-neutral-900/95 backdrop-blur-lg overflow-hidden flex items-center justify-center"
          >
            <motion.ul
              className="space-y-8 text-center"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {["projects", "about", "contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-2xl uppercase tracking-wider ${
                      activeSection === item ? "text-indigo-400" : "text-white"
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
