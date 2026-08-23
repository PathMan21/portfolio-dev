
import { motion } from "framer-motion";
import "../Skill/Skill.css";
import { useState } from "react";

const Skill = () => {
    const categories = {
        "Langages": [
            { name: "PHP", level: 55, color: "#BFA28C" },
            { name: "Typescript", level: 75, color: "#BABF94" },
            { name: "C#", level: 40, color: "#d9c7a4" },
        ],
        "Backend": [
            { name: "Node.js", level: 85, color: "#2FA4D7" },
            { name: "Express", level: 85, color: "#337abd" },
            { name: "Eloquent - sequelize - prisma", level: 60, color: "#3E2C23" },
            { name: "Kafka", level: 60, color: "#784527" },
            { name: "Redis", level: 60, color: "#E76F2E" },
        ],

        "Frameworks": [
            { name: "React", level: 80, color: "#E5BEB5" },
            { name: "Angular", level: 40, color: "#ddd09f" },
            { name: "Boostrap", level: 60, color: "#c5d096" },
            { name: "Laravel", level: 30, color: "#D9C4B0" },
            { name: "Symfony", level: 40, color: "#CFAB8D" },
        ],

        "Bases de données": [
            { name: "MySQL", level: 60, color: "#44a198" },
            { name: "MongoDB", level: 70, color: "#6fd271" },
            { name: "MariaDB", level: 70, color: "#d8ed7d" },
            { name: "PostgreSQL", level: 50, color: "#80c9db" },
        ],

        "Outils": [
            { name: "Docker", level: 75, color: "#60241E" },
            { name: "Github / Gitlab / Bitbucket", level: 85, color: "#E77B49" },
            { name: "Figma", level: 85, color: "rgb(199, 159, 103)" },
            { name: "Scaleway / OVH", level: 75, color: "#b36d44d9" },
            { name: "Jira", level: 60, color: "#B34A44" },
            { name: "Wordpress", level: 80, color: "#95271D" },
        ]
    };


type Category = keyof typeof categories;

const [category, setCategory] = useState<Category>("Langages");

const keys = Object.keys(categories) as Category[];

const changeCategory = (direction: number) => {
    const index = keys.indexOf(category);

    let newIndex = index + direction;

    if (newIndex < 0) {
        newIndex = keys.length - 1;
    }

    if (newIndex >= keys.length) {
        newIndex = 0;
    }

    setCategory(keys[newIndex]);
};

    return (
        <div className="container-skill">

            <div className="skill-navigation">
                <button className="skill-arrow" onClick={() => changeCategory(-1)}>
                    ←
                </button>

                <h2>{category}</h2>

                <button  className="skill-arrow"  onClick={() => changeCategory(1)}>
                    →
                </button>
            </div>


            <motion.div
                key={category}
                initial={{
                    opacity: 0,
                    x: 50
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.3
                }}
            >

            {categories[category].map((e:any) => (
                <div key={e.name} className="skill-item">

                    <p className="label">
                        {e.name} - {e.level}%
                    </p>

                    <div className="skill-line">
                        <motion.div
                            className="skill-progress"
                            style={{
                                backgroundColor: e.color
                            }}
                            initial={{ width: 0 }}
                            animate={{
                                width: `${e.level}%`
                            }}
                            transition={{
                                duration: 1
                            }}
                        />
                    </div>

                </div>
            ))}

            </motion.div>

        </div>
    );
};

export default Skill;