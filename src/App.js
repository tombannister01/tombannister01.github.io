import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import Project1 from './components/Project1'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
// import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="App">
       <Hero />
       <Skills />
       <Project1 />
       <Project2 />
       <Project3 />
       <Project4 />
       <Footer />
      {/* <AboutMe />  */}
    </div>
  )
}

export default App;
