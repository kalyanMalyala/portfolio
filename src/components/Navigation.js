import React, { useState } from 'react';
import './Navigation.css';
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Education from './Education';

function Navigation() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="navigation">
      <ul className="tabs">
        <li
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          Home
        </li>
        <li
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabClick('experience')}
        >
          Experience
        </li>
        <li
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => handleTabClick('skills')}
        >
          Skills
        </li>
        <li
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          Projects
        </li>
        <li
          className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => handleTabClick('achievements')}
        >
          Achievements
        </li>
        <li
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabClick('education')}
        >
            Education
        </li>
        
        <li
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabClick('contact')}
        >
          Contact
        </li>
      </ul>

      <div className="tab-content">
      {activeTab === 'home' && <Home />}
{activeTab === 'experience' && <Experience />}
{activeTab === 'skills' && <Skills />}
{activeTab === 'projects' && <Projects />}
{activeTab === 'achievements' && <Achievements />}
{activeTab === 'education' && <Education />}
{activeTab === 'contact' && <Contact />}
     </div>
    </nav>
  );
}

export default Navigation;
