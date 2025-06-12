import React from 'react';
import './App.css';

import {
  Education,
  Experience,
  Projects,
  Skills,
  About,
  Contact,
  Footer,
  Navigation,
  Hero
} from './libs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Skills Section */}
      <Skills/>

      {/* Experience Section */}
      <Experience/>

      {/* Education Section */}
      <Education/>

      {/* Projects Section */}
      <Projects/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;