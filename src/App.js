import "./App.css";

function App() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Rara</h1>
            <h3>Informatics Student</h3>
            <p>Data Analysis • AI • Tech Enthusiast</p>

            <a href="#about" className="btn">
              Explore More
            </a>
          </div>

          <div className="hero-image">
            <img src="/hero.jpeg" alt="Hero" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-text">
          <h2>Tentang Saya</h2>

          <p>
            Halo! Namaku Endira Putri Azzahra, mahasiswa Teknik
            Informatika semester 4 yang tertarik pada Data Analysis,
            AI, dan pengolahan data.
          </p>

          <p>
            Saya senang mempelajari teknologi baru dan
            mengembangkan keterampilan di bidang informatika.
          </p>
        </div>

        <div className="about-image">
          <img src="/profile.jpeg" alt="Profile" />
        </div>
      </section>

      {/* BIODATA */}
      <section className="biodata">
        <h2>Biodata</h2>

        <div className="card">
          <p><strong>Nama:</strong> Endira Putri Azzahra</p>
          <p><strong>NIM:</strong> ISI NIM KAMU</p>
          <p><strong>Semester:</strong> 4</p>
          <p><strong>Program Studi:</strong> Teknik Informatika</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Keahlian</h2>

        <div className="skill-grid">
          <div className="skill">Microsoft Excel</div>
          <div className="skill">Data Analysis</div>
          <div className="skill">Python</div>
          <div className="skill">SQL Dasar</div>
          <div className="skill">React Dasar</div>
          <div className="skill">Git & GitHub</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Kontak</h2>

        <div className="card">
          <p>Email:</p>
          <a href="mailto:matchamilky.stdy@gmail.com">
            matchamilky.stdy@gmail.com
          </a>

          <br />
          <br />

          <p>GitHub:</p>
          <a
            href="https://github.com/sunmesht"
            target="_blank"
            rel="noreferrer"
          >
            github.com/sunmesht
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;