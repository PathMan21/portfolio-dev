import { motion } from "framer-motion";

function Terminal() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
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

  const line = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1,
      },
    },
  };


  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1300px",
        maxHeight: "800px",
        margin: "5px auto",
      }}
    >

      <motion.svg
        viewBox="0 0 100 60"
        width="100%"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        {/* Cadre terminal */}
        <motion.line
          x1="5"
          y1="5"
          x2="95"
          y2="5"
          stroke="#897156"
          strokeWidth="0.3"
          variants={line}
        />

        <motion.line
          x1="95"
          y1="5"
          x2="95"
          y2="55"
          stroke="#897156"
          strokeWidth="0.3"
          variants={line}
        />

        <motion.line
          x1="95"
          y1="55"
          x2="5"
          y2="55"
          stroke="#897156"
          strokeWidth="0.3"
          variants={line}
        />

        <motion.line
          x1="5"
          y1="55"
          x2="5"
          y2="5"
          stroke="#897156"
          strokeWidth="0.3"
          variants={line}
        />


        {/* Barre du haut */}
        <motion.line
          x1="5"
          y1="10"
          x2="95"
          y2="10"
          stroke="#897156"
          strokeWidth="0.3"
          variants={line}
        />


        {/* Bouton fermer X */}
        <motion.line
          x1="85"
          y1="8"
          x2="88"
          y2="11"
          stroke="#897156"
          strokeWidth="0.4"
          variants={line}
        />

        <motion.line
          x1="88"
          y1="8"
          x2="85"
          y2="11"
          stroke="#897156"
          strokeWidth="0.4"
          variants={line}
        />


        {/* Bouton réduire */}
        <motion.line
          x1="78"
          y1="10"
          x2="81"
          y2="10"
          stroke="#897156"
          strokeWidth="0.4"
          variants={line}
        />


        {/* Bouton agrandir */}
        <motion.rect
          x="70"
          y="8"
          width="3"
          height="3"
          fill="none"
          stroke="#897156"
          strokeWidth="0.3"
          variants={fade}
        />

      </motion.svg>


    </div>
  );
}

export default Terminal;