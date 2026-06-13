import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const skills = [
  { name: 'Microsoft Excel', icon: '📊', desc: 'Data processing & visualization' },
  { name: 'Data Analysis', icon: '📈', desc: 'Statistical insights & reporting' },
  { name: 'Python', icon: '🐍', desc: 'Scripting & data science' },
  { name: 'SQL Dasar', icon: '🗄️', desc: 'Database querying' },
  { name: 'React Dasar', icon: '⚛️', desc: 'Frontend component building' },
  { name: 'Git & GitHub', icon: '🔧', desc: 'Version control & collaboration' },
];

const experiences = [
  {
    icon: '🏛️',
    title: 'Organisasi Mahasiswa',
    period: 'Semester 1 – 4',
    points: [
      'Aktif selama 4 semester berturut-turut',
      'Berpartisipasi dalam kegiatan organisasi dan pengembangan mahasiswa',
    ],
  },
  {
    icon: '🎪',
    title: 'Panitia Acara Kampus',
    period: 'Berbagai Kegiatan',
    points: [
      'Terlibat dalam perencanaan dan pelaksanaan berbagai kegiatan kampus',
      'Berkolaborasi dengan berbagai divisi untuk memastikan acara berjalan lancar',
    ],
  },
  {
    icon: '📉',
    title: 'Data Analyst',
    period: 'Internship',
    points: [
      'Mengolah dan menganalisis data menggunakan Excel dan Python',
      'Membuat visualisasi dan laporan hasil analisis',
    ],
  },
  {
    icon: '💻',
    title: 'Praktikum & Project Informatika',
    period: 'Semester 1 – 4',
    points: [
      'Mengerjakan berbagai project perkuliahan berbasis pemrograman dan pengolahan data',
      'Menggunakan Git & GitHub untuk version control',
    ],
  },
];

function useScrollFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function FadeSection({ children, className = '' }) {
  const [ref, visible] = useScrollFadeIn();
  return (
    <div ref={ref} className={`fade-section ${visible ? 'fade-in' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => scrollTo('hero')}>Rara.</div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['about', 'skills', 'experience', 'contact'].map((id) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">Rara</h1>
          <p className="hero-subtitle">Informatics Student</p>
          <p className="hero-tags">Data Analysis&nbsp;&nbsp;•&nbsp;&nbsp;AI Enthusiast&nbsp;&nbsp;•&nbsp;&nbsp;Tech Learner</p>
          <button className="btn-explore" onClick={() => scrollTo('about')}>
            Explore More <span className="btn-arrow">↓</span>
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <FadeSection>
          <div className="about-grid">
            <div className="about-text">
              <span className="section-eyebrow">Who I am</span>
              <h2 className="section-title">Tentang Saya</h2>
              <div className="about-divider" />
              <p className="about-desc">
                Halo! Namaku <strong>Endira Putri Azzahra</strong>, mahasiswa Teknik Informatika
                semester 4 yang tertarik pada Data Analysis, AI, dan pengolahan data. Saya senang
                mempelajari teknologi baru dan mengembangkan keterampilan di bidang informatika.
              </p>
              <div className="about-badges">
                <span className="badge">🎓 Semester 4</span>
                <span className="badge">📍 Teknik Informatika</span>
                <span className="badge">🤖 AI Enthusiast</span>
              </div>
            </div>
            <div className="about-photo-wrap">
              <div className="about-photo-frame">
                <img src="/profile.jpeg" alt="Endira Putri Azzahra" className="about-photo" />
              </div>
              <div className="about-photo-glow" />
            </div>
          </div>
        </FadeSection>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <FadeSection>
          <div className="section-header">
            <span className="section-eyebrow">What I know</span>
            <h2 className="section-title">Skills</h2>
            <div className="section-divider" />
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon">{s.icon}</div>
                <h3 className="skill-name">{s.name}</h3>
                <p className="skill-desc">{s.desc}</p>
                <div className="skill-glow" />
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section exp-section">
        <FadeSection>
          <div className="section-header">
            <span className="section-eyebrow">My journey</span>
            <h2 className="section-title">Achievement & Experience</h2>
            <div className="section-divider" />
          </div>
          <div className="exp-grid">
            {experiences.map((e, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-icon-wrap">
                  <span className="exp-icon">{e.icon}</span>
                </div>
                <div className="exp-body">
                  <h3 className="exp-title">{e.title}</h3>
                  <span className="exp-period">{e.period}</span>
                  <ul className="exp-points">
                    {e.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="exp-glow" />
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <FadeSection>
          <div className="section-header">
            <span className="section-eyebrow">Get in touch</span>
            <h2 className="section-title">Contact</h2>
            <div className="section-divider" />
          </div>
          <div className="contact-card">
            <p className="contact-tagline">Feel free to reach out — I'm always open to collaborating!</p>
            <div className="contact-links">
              <a href="mailto:matchamilky.stdy@gmail.com" className="contact-item">
                <span className="contact-item-icon">✉️</span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">matchamilky.stdy@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/sunmesht" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">🐙</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/sunmesht</p>
                </div>
              </a>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Endira Putri Azzahra · Built with React.js</p>
      </footer>
    </div>
  );
}