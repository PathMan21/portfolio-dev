import Terminal from "../../components/Name/Name";
import Name from "../../components/Name/Name";
import Contact
  from "../Contact/Contact";
import Projet from "../Projet/Projet";
import Skill from "../Skill/Skill";
import "./Home.css"
import AboutMe from "../AboutMe/AboutMe";
import { useEffect, useState } from "react";
// import { scrollIntoView } from "seamless-scroll-polyfill";

const Home = () => {
    const [activeSection, setActiveSection] = useState("about");
    const sectionOrder = ["about", "projects", "skills", "contact"];

    const sections = {
        about: <AboutMe />,
        projects: <Projet />,
        skills: <Skill />,
        contact: <Contact />,
    };


    useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
        const currentIndex = sectionOrder.indexOf(activeSection);

        const nextIndex =
        event.deltaY > 0
            ? currentIndex + 1
            : currentIndex - 1;

        const boundedIndex = Math.min(
        Math.max(nextIndex, 0),
        sectionOrder.length - 1
        );

        if (boundedIndex !== currentIndex) {
        const nextSection = sectionOrder[boundedIndex];

        const element = document.getElementById(nextSection);
        setTimeout(function () {
            element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });        
            setActiveSection(nextSection);

        }, 100);
        }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
        window.removeEventListener("wheel", handleScroll);
    };
    }, [activeSection]);

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