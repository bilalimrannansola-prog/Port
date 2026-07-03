import powerbi from "./assets/powerbi.png";
export default function Portfolio() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        <div
          className="hero-content"
        >

          <p className="hello">
            HELLO I'M
          </p>

          <h1>
            <span>Bilal Imran</span>
            <span> Nansola</span>
          </h1>

        
            <h2 className="gradient-text">
  AIML Student • Full Stack Developer • AI Enthusiast
</h2>

<div className="hero-tags">
  <span>React</span>
  <span>JavaScript</span>
  <span>Power BI</span>
  <span>Python</span>
  <span>GitHub</span>
</div>

          

          <p className="desc">

            I am pursuing Diploma in Artificial Intelligence &
            Machine Learning and currently working as an
            Intern at EliteForums.

            Passionate about Full Stack Development,
            Artificial Intelligence,
            and building modern web applications.

          </p>

          <div className="buttons">

            <a
              href="mailto:bilalimrannansola@gmail.com"
              className="btn"
            >
             
              Contact Me
            </a>

            <a
              href="https://github.com/bilalimrannansola-prog"
              target="_blank"
              className="btn outline"
            >
              GitHub
            </a>

          </div>
          

          <div className="scroll">

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about">

        <div>

          <h2>
            About Me
          </h2>

          <p>

            I'm Bilal Imran Nansola.

            Currently pursuing Diploma in
            Artificial Intelligence and Machine Learning.

            Working as an Intern at EliteForums,
            where I am learning modern
            Full Stack Development
            and AI Fundamentals.

            I enjoy creating beautiful,
            fast and responsive web applications.

          </p>

        </div>

      </section>

      {/* SKILLS */}

      <section className="skills">

        <h2>
          Skills
        </h2>
        <div className="skill-grid">
          <div className="card">
            <h3>Frontend</h3>
            <p>
              HTML
              CSS
              JavaScript
              React
              Vite
            </p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>
              Node.js
              Express
              MongoDB
              SQL
              Git
              GitHub
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="experience">

        <h2>Experience</h2>

        <div className="timeline-card">

          <h3>Full Stack Development Intern</h3>

          <h4>EliteForums</h4>

          <span>Current</span>

          <p>
            Working on modern web development using React,
            learning frontend and backend technologies,
            improving problem-solving skills,
            and gaining practical experience in building real-world applications.
          </p>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="education">

        <h2>Education</h2>

        <div className="timeline-card">

          <h3>Diploma in Artificial Intelligence & Machine Learning</h3>

          <h4>Currently Pursuing</h4>

          <p>
            Learning Artificial Intelligence,
            Machine Learning,
            Python,
            Data Analytics,
            Databases,
            and Full Stack Development.
          </p>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="projects">

        <h2>Projects</h2>

        <div className="project-grid">

  <div className="project-card">

<h3>Power BI Dashboard</h3>

<h3>Veloro Fashion</h3>
    <p>
      Modern React e-commerce website for watches,
      belts, wallets, glasses and accessories.
    </p>

    <a
      href="https://github.com/bilalimrannansola-prog"
      target="_blank"
      rel="noreferrer"
      className="project-btn"
    >
      View on GitHub
    </a>
  </div>

  <div className="project-card">
    <h3>Power BI Dashboard</h3>
    <p>
      Interactive sales dashboard showing
      revenue, profit, customer insights and trends.
    </p>

    <a
      href="https://github.com/bilalimrannansola-prog"
      target="_blank"
      rel="noreferrer"
      className="project-btn"
    >
      View on GitHub
    </a>
  </div>

  <div className="project-card">
    <h3>Portfolio Website</h3>
    <p>
      Responsive React portfolio showcasing
      my skills, internship, education and projects.
    </p>

    <a
      href="https://github.com/bilalimrannansola-prog"
      target="_blank"
      rel="noreferrer"
      className="project-btn"
    >
      View on GitHub
    </a>
  </div>

</div>

      </section>

      {/* CONTACT */}

      <section className="contact">

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning,
          collaborating,
          and working on exciting projects.
        </p>

        <div className="buttons">

          <a
            href="mailto:bilalimrannansola@gmail.com"
            className="btn"
          >
            Email Me
          </a>

          <a
            href="https://github.com/bilalimrannansola-prog"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Bilal Imran Nansola
        </p>
      </footer>
    </>
  );
}
    