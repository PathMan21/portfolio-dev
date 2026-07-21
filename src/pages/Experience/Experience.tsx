
import "../Experience/Experience.css";
import { motion } from "motion/react"


const Experience = () => {
    const ArrayExp = [
        {
            id: "exp-1",
            content: "lorem ipsum",
            image: "",
            lien: "lien"
        },        
        {
            id: "exp-1",
            content: "lorem ipsum",
            image: "",
            lien: "lien"
        },
        
    ]
    const positions = [

    { top: "10%", left: "20%", rotate: "-3deg" },
    { top: "40%", left: "55%", rotate: "7deg" },
    { top: "70%", left: "10%", rotate: "-8deg" },
    { top: "65%", left: "55%", rotate: "2deg" },
];
    return (
        <div className="background-experience">
            <div id="experience" className="container-exp">
                {

                    ArrayExp.map((element, i) => {
                        return (
                        <motion.div        
                        style={{
                                position: "absolute",
                                ...positions[i],
                            }}
                            className="card"
                            initial={{ width: 280, height: 40 }}
                            whileHover={{
                                width: 500,
                                height: 350,
                            }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="terminal-bar">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="terminal-content"
                            >
                                <p>$ cat experience.txt</p>
                                <p>{element.content}</p>
                            </motion.div>
                        </motion.div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default Experience;