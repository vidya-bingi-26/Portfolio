import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className="app">
          <Header />
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
