
import "../Projet/Projet.css";
import { motion } from "motion/react"
import beCuriousImg from "./assets/image.png";

const Projet = () => {
    const ArrayExp = [
        {
            id: "exp-1",
            title: "be-curious",
            content: `Projet de fin d'année de Master 2 - Le projet be-curious est une plateforme de veille technique d'apprentissage personnalisée.
                        `,
            image: beCuriousImg,
            lien: "https://be-curious.fr/home"
        },
        {
            id: "exp-1",
            title: "Projet",
            content: "Donec scelerisque condimentum lectus in iaculis. Morbi aliquam mauris eu eros finibus, eu ultrices erat tincidunt. Sed neque dui, convallis id iaculis molestie",
            image: "",
            lien: "lien"
        },
        {
            id: "exp-1",
            title: "Projet",
            content: "Sed quis lorem sodales, fermentum ex eu, gravida erat. Sed lectus sem, aliquam tincidunt interdum non, placerat quis leo. ",
            image: "",
            lien: "lien"
        },

    ]
    const positions = [

        { top: "10%", left: "20%", rotate: "-3deg" },
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
                                    initial={{ width: 380, height: 40 }}
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
                                        $ cat project : {element.title}.txt
                                    </div>

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
                                </motion.div></a>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default Projet;