import {useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Educations";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GLOBAL_CSS from "./app-css";





// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
    return () => document.head.removeChild(s);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer>
        <div className="footer-copy">© 2025 Sushil Kumar Yadav · React + FastAPI</div>
        <div className="footer-tag">awesome. invincible. <span>unbeatable.</span></div>
      </footer>
    </>
  );
}
