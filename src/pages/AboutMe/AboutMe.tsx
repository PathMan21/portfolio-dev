
import "./AboutMe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const AboutMe = () => {
    return (
        <article className="ParagraphContainer">
            <div className="Paragraph">
                <h2>Qui suis-je ?</h2>
                <div className="Icone" aria-hidden="true">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <p>
                    Spécialisée en javascript - je suis passionnée de création visuelle.
                    En cours d'obtention de mastère, je suis diplomée d'un BTS SNIR - et je me spécialise au travers
                    de mon mastère de développement web.
                    J'apprécie tout type de projet, et je suis toujours en recherche d'apprendre plus !
                </p>
            </div>
        </article>
    )
}

export default AboutMe;