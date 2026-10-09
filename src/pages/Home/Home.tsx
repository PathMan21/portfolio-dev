import Terminal from "../../components/Name/Name";
import Contact
  from "../Contact/Contact";
import Projet from "../Projet/Projet";
import Skill from "../Skill/Skill";
import "./Home.css"
import AboutMe from "../AboutMe/AboutMe";
import { useEffect, useState } from "react";
// import { scrollIntoView } from "seamless-scroll-polyfill";

const sectionOrder = ["about", "projects", "skills", "contact"] as const;

const Home = () => {
    const [activeSection, setActiveSection] = useState("about");

    const sections = {
        about: <AboutMe />,
        projects: <Projet />,
        skills: <Skill />,
        contact: <Contact />,
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
        );

        sectionOrder.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

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
                            className={activeSection === "about" ? "active" : ""}
                            aria-current={activeSection === "about" ? "location" : undefined}
                        >
                            À propos
                        </a>

                        <a
                            href="#projects"
                            className={activeSection === "projects" ? "active" : ""}
                            aria-current={activeSection === "projects" ? "location" : undefined}
                        >
                            Projets
                        </a>

                        <a
                            href="#skills"
                            className={activeSection === "skills" ? "active" : ""}
                            aria-current={activeSection === "skills" ? "location" : undefined}
                        >
                            Compétences
                        </a>

                        <a
                            href="#contact"
                            className={activeSection === "contact" ? "active" : ""}
                            aria-current={activeSection === "contact" ? "location" : undefined}
                        >
                            Contact
                        </a>

                    </nav>
                </aside>

                <main>
                    {sectionOrder.map((id) => (
                        <section className="content-section" id={id} key={id}>
                            {sections[id]}
                        </section>
                    ))}
                </main>

            </div>
        </div>
    );
};

export default Home;