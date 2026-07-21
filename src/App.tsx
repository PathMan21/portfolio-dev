import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projet from './pages/Projet/Projet';

import '../src/App.css';
function App() {
  return (
    <BrowserRouter>

        <div className="App">
          <div>
                  {/* <Navbar/> */}
                  <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="#projet" Component={Projet}/>
                    <Route path="/Contact" Component={Contact}/>
                  </Routes>
                  {/* <Footer /> */}

          </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
