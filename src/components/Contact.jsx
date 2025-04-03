import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_warem5j", // Replace with your EmailJS service ID
        "template_zqzad1s", // Replace with your EmailJS template ID
        formRef.current,
        "BwWFb13BC68RXTVJd" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setMessage({
            text: "Your message has been sent successfully!",
            type: "success",
          });
          formRef.current.reset();
        },
        (error) => {
          setMessage({
            text: "Failed to send message. Please try again.",
            type: "error",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setMessage({ text: "", type: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's <span className="text-indigo-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-4 rounded-lg ${
                message.type === "success"
                  ? "bg-green-900/30 text-green-400 border border-green-800/50"
                  : "bg-red-900/30 text-red-400 border border-red-800/50"
              }`}
            >
              {message.text}
            </motion.div>
          )}

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-neutral-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-neutral-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-neutral-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-neutral-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm text-neutral-400"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-neutral-600"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-neutral-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-neutral-600"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Let's Work Together
            </h3>
            <p className="text-neutral-400">
              I'm available for freelance work and collaborations.
            </p>
          </div>
          <div className="flex gap-4">
            {/* GitHub Link */}
            <motion.a
              href="https://github.com/vidya-bingi-26"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-5 h-5 text-neutral-400 hover:text-indigo-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            {/* LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/vidya-bingi-977374258"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-5 h-5 text-neutral-400 hover:text-indigo-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>

            {/* Twitter Link (placeholder) */}
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5 text-neutral-400 hover:text-indigo-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </motion.a>

            {/* Instagram Link (placeholder) */}
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-neutral-400 hover:text-indigo-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
