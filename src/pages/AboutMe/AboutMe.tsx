
import { useState } from "react";
import "./AboutMe.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const AboutMe = () => {
    return (
        <div className="ParagraphContainer">


            <div className="Paragraph">               
                 <h2>Qui suis-je ?</h2>
                    <div className="Icone">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>

                Spécialisée en javascript - je suis passionnée de création visuelle. 
                En cours d'obtention de mastère, je suis diplomée d'un BTS SNIR - et je me spécialise au travers
                de mon mastère de développement web.
                J'apprécie tout type de projet, et je suis toujours en recherche d'apprendre plus !
            </div>
            <button className="button-74" role="button">Téléchargez mon CV !</button>

        </div>




    )


}

export default AboutMe;