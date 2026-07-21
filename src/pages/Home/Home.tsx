import Terminal from "../../components/Name/Name";
import Name from "../../components/Name/Name";
import Contact
 from "../Contact/Contact";
import Projet from "../Projet/Projet";
import Skill from "../Skill/Skill";
import "./Home.css"


function Home() {
  return (
    <div>
      
      <div className="background">
        <Terminal />
      </div>
      
        <Projet/>
        
        <Skill/>
        
        <Contact/>
     </div>
  );
}



export default Home;