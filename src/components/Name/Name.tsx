import { motion } from "framer-motion";
import "./terminal.css";

function Terminal() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const line = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fade = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="terminal">

      <motion.svg
        viewBox="0 0 100 60"
        className="terminal-svg"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        {/* Cadre */}
        <motion.line x1="5" y1="5" x2="95" y2="5" stroke="#897156" strokeWidth="0.2" variants={line}/>
        <motion.line x1="95" y1="5" x2="95" y2="55" stroke="#897156" strokeWidth="0.2" variants={line}/>
        <motion.line x1="95" y1="55" x2="5" y2="55" stroke="#897156" strokeWidth="0.2" variants={line}/>
        <motion.line x1="5" y1="55" x2="5" y2="5" stroke="#897156" strokeWidth="0.2" variants={line}/>

        {/* Barre supérieure */}
        <motion.line
          x1="5"
          y1="10"
          x2="95"
          y2="10"
          stroke="#897156"
          strokeWidth="0.2"
          variants={line}
        />

        {/* Boutons */}
        <motion.rect
          x="75"
          y="6"
          width="3"
          height="3"
          fill="none"
          stroke="#897156"
          strokeWidth="0.2"
          variants={fade}
        />

        <motion.line
          x1="80"
          y1="8"
          x2="83"
          y2="8"
          stroke="#897156"
          strokeWidth="0.2"
          variants={line}
        />

        <motion.line
          x1="85"
          y1="6"
          x2="88"
          y2="9"
          stroke="#897156"
          strokeWidth="0.2"
          variants={line}
        />

        <motion.line
          x1="88"
          y1="6"
          x2="85"
          y2="9"
          stroke="#897156"
          strokeWidth="0.2"
          variants={line}
        />
      </motion.svg>

<div className="terminal-general">
  <div className="hero-text">
    <h1 className="machine">
      Manon Lafosse
    </h1>

    <nav className="machine-under">
      <a href="#experience">Expérience</a>
      <span>—</span>

      <a href="#projects">Projets</a>
      <span>—</span>

      <a href="#skills">Compétences</a>
      <span>—</span>

      <a href="#qualifications">Qualifications</a>
      <span>—</span>

      <a href="#contact">Contact</a>
    </nav>
  </div>
</div>
    </div>
  );
}

export default Terminal;