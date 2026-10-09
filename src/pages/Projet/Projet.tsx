
import "./Projet.css";
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
    return (
        <div className="background-projet">
            <div className="container-exp">
                {

                    ArrayExp.map((element) => {
                        return (
                            <a href={element.lien} key={element.id}>
                                <motion.div
                                    className="card"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="terminal-bar">
                                        <span className="dot red"></span>
                                        <span className="dot yellow"></span>
                                        <span className="dot green"></span>
                                        ÉDITION PORTFOLIO — {element.title}
                                    </div>
                                    <div className="terminal-title">
                                        <h2>{element.title}</h2>
                                    </div>
                                    <div className="terminal-content">
                                        <p>{element.content}</p>
                                        <img
                                            src={element.image}
                                            alt={element.title}
                                            className="project-image"
                                        />
                                    </div>
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