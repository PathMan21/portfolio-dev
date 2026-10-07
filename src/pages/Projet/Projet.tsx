
import "../Projet/Projet.css";
import { motion } from "motion/react"
import beCuriousImg from "./assets/image.png";

const Projet = () => {
    const ArrayExp = [
        {
            id: "exp-1",
            title: "be-curious",
            content: `Plateforme de veille, offrant aux utilisateurs la possibilité d'avoir des contenus divers sur leurs centre d'intéret précis. 
            Comme par exemple - la médecine, la robotique, l'histoire de l'art..
                        `,
            image: beCuriousImg,
            lien: "https://be-curious.fr/home"
        }

    ]
    const positions = [

        { top: "5%", left: "25%", rotate: "-3deg" },
        { top: "20%", left: "60%", rotate: "7deg" },
        { top: "50%", left: "26%", rotate: "-10deg" },
        { top: "65%", left: "55%", rotate: "2deg" },
    ];
    return (
        <div className="background-projet">
            <div id="Projet" className="container-exp">
                {

                    ArrayExp.map((element, i) => {
                        return (
                            <a href={element.lien}>
                                <motion.div
                                    style={{
                                        position: "absolute",
                                        ...positions[i],
                                    }}
                                    className="card"
                                    initial={{ width: 480, height: 40 }}
                                    whileHover={{
                                        width: 480,
                                        height: 400,
                                    }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="terminal-bar">
                                        <span className="dot red"></span>
                                        <span className="dot yellow"></span>
                                        <span className="dot green"></span>
                                        $ cat project : {element.title}.txt
                                    </div>
                                    <motion.div
                                        transition={{ delay: 0.2 }}
                                        className="terminal-title"
                                    >
                                        <h2>{element.title}</h2></motion.div>
                                    <motion.div
                                        transition={{ delay: 0.2 }}
                                        className="terminal-content"
                                    >


                                        <p>$ {element.content}</p>
  <img
                                            src={element.image}
                                            alt={element.title}
                                            className="project-image"
                                        /> 
                                    </motion.div>
                                    </motion.div>
                                </a>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default Projet;