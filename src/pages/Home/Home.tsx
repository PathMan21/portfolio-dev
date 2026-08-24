import Terminal from "../../components/Name/Name";
import Name from "../../components/Name/Name";
import Contact
  from "../Contact/Contact";
import Projet from "../Projet/Projet";
import Skill from "../Skill/Skill";
import "./Home.css"
import AboutMe from "../AboutMe/AboutMe";
import { useState } from "react";

const Home = () => {
    const [activeSection, setActiveSection] = useState("about");

    const sections = {
        about: <AboutMe />,
        projects: <Projet />,
        skills: <Skill />,
        contact: <Contact />,
    };

    return (
        <div>
            <div className="background">
                <Terminal />
            </div>

            <div className="grid-container">

                <aside className="summary">
                    <p className="summary-label">
                        Sommaire
                    </p>

                    <nav aria-label="Sommaire de la page">

                        <a
                            href="#about"
                            onClick={() => setActiveSection("about")}
                            className={activeSection === "about" ? "active" : ""}
                        >
                            À propos
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setActiveSection("projects")}
                            className={activeSection === "projects" ? "active" : ""}
                        >
                            Projets
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setActiveSection("skills")}
                            className={activeSection === "skills" ? "active" : ""}
                        >
                            Compétences
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setActiveSection("contact")}
                            className={activeSection === "contact" ? "active" : ""}
                        >
                            Contact
                        </a>

                    </nav>
                </aside>

                <main>
                    <div className="content-section">
                        {sections[activeSection as keyof typeof sections]}
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Home;