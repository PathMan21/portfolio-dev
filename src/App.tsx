import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projet from './pages/Projet/Projet';
import Skill from './pages/Skill/Skill';
import { useRef } from 'react';
import '../src/App.css';
function App() {

  let bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {

    const handleScroll = () => {    console.log("i scroll");

      // const scroll = window.scrollY;
      // const rotate = scroll * 0.1;

      //   if (bodyRef.current) {
      //       bodyRef.current.style.transform =
      //           `rotate(${rotate}deg)`;
      //   }
    }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
  }, []);


  return (
    <BrowserRouter>

        <div className="App">
          <div ref={bodyRef}>
                  <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="#projet" Component={Projet}/>
                    <Route path="#skill" Component={Skill}/>
                    <Route path="/Contact" Component={Contact}/>
                  </Routes>
                  {/* <Footer /> */}

          </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
