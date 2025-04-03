import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-neutral-900 text-white py-16 border-t border-neutral-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">Vidya Bingi</h3>
            <p className="text-neutral-400 mb-6">
              Building Full Stack Solutions
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/vidya-bingi-977374258",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  name: "GitHub",
                  url: "https://github.com/vidya-bingi-26",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-neutral-400 hover:text-indigo-400 transition-colors p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {["Home", "Projects", "About", "Contact"].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "UI/UX Design",
                  "Web Development",
                  "Branding",
                  "Consulting",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div> */}

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-neutral-400">vidyabingi26@gmail.com</li>
                <li className="text-neutral-400">+91 9834187455</li>
                <li className="text-neutral-400">Ty Btech Student,MITAOE</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
