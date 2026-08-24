import { motion, Variants } from "framer-motion";
import "./terminal.css";

function Terminal() {

    const container: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const line: Variants = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const fade: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div className="terminal">

            <motion.svg
                viewBox="0 0 100 45"
                className="terminal-svg"
                variants={container}
                initial="hidden"
                animate="visible"
            >

                {/* Cadre */}

                <motion.line
                    x1="5"
                    y1="5"
                    x2="95"
                    y2="5"
                    stroke="#897156"
                    strokeWidth="0.2"
                    variants={line}
                />

                <motion.line
                    x1="95"
                    y1="5"
                    x2="95"
                    y2="40"
                    stroke="#897156"
                    strokeWidth="0.2"
                    variants={line}
                />

                <motion.line
                    x1="95"
                    y1="40"
                    x2="5"
                    y2="40"
                    stroke="#897156"
                    strokeWidth="0.2"
                    variants={line}
                />

                <motion.line
                    x1="5"
                    y1="40"
                    x2="5"
                    y2="5"
                    stroke="#897156"
                    strokeWidth="0.2"
                    variants={line}
                />

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

                {/* Bouton */}

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

                {/* Minimiser */}

                <motion.line
                    x1="80"
                    y1="8"
                    x2="83"
                    y2="8"
                    stroke="#897156"
                    strokeWidth="0.2"
                    variants={line}
                />

                {/* Croix */}

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

                    <div className="machine-under">
                        <span>~/portfolio</span>
                        <span>·</span>
                        <span>developer</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Terminal;