import Terminal from "../../components/Name/Name";
import Name from "../../components/Name/Name";
import Contact
 from "../Contact/Contact";
import Projet from "../Projet/Projet";
import Skill from "../Skill/Skill";
import "./Home.css"
import AboutMe from "../AboutMe/AboutMe";

function Home() {
  return (
    <div>
      
      <div className="background">
        <Terminal />
      </div>
        <AboutMe/>

        <Projet/>
        
        <Skill/>
        
        <Contact/>
     </div>
  );
}



export default Home;