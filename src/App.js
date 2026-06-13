import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaReact, FaGitAlt, FaExcel, FaChartLine } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { window.addEventListener('scroll', () => setScrolled(window.scrollY > 50)); }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <h2>Rara.</h2>
      </nav>

      <header className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1>Rara</h1>
          <h3>Informatics Student</h3>
          <p>Data Analysis • AI Enthusiast • Tech Learner</p>
          <button className="btn" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>Explore More</button>
        </motion.div>
      </header>

      <section id="about">
        <div style={{display: 'flex', alignItems: 'center', gap: '50px'}}>
          <div>
            <h2>Tentang Saya</h2>
            <p>Halo! Namaku Endira Putri Azzahra, mahasiswa Teknik Informatika semester 4...</p>
          </div>
          <img src="/profile.jpeg" alt="Profile" style={{width: '300px', borderRadius: '20px'}} />
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="grid">
          {['Excel', 'Data Analysis', 'Python', 'SQL', 'React', 'Git'].map((skill, i) => (
            <motion.div key={i} className="card" whileHover={{ scale: 1.05 }}>
              <h3>{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" style={{textAlign: 'center', background: '#1a1a1a'}}>
        <h2>Contact Me</h2>
        <p>Email: matchamilky.stdy@gmail.com</p>
        <a href="https://github.com/sunmesht" target="_blank" rel="noreferrer">GitHub Profile</a>
      </section>
    </div>
  );
};

export default App;