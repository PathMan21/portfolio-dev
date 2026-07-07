import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <BrowserRouter>

        <div className="App">
          <div className='container'>
                  {/* <Navbar/> */}
                  <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/Experience" Component={Experience}/>
                    <Route path="/Contact" Component={Contact}/>
                  </Routes>
                  {/* <Footer /> */}

          </div>
        </div>
    </BrowserRouter>

  );
}

export default App;
