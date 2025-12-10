import './App.css'
import LiquidEther from './components/LiquidEther'
import ASCIIText from './components/ASCIIText'
import GooeyNav from './components/GooeyNav'

function App() {
  // Navigation items para GooeyNav
  const navItems = [
    { label: "Hero", href: "#hero" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" }
  ]

  return (
    <>
    
      {/* ========== BACKGROUND FIJO (z-index: -1) ========== */}
      <div className="background-container">
        <LiquidEther
          colors={['#FFD129', '#9EFFC3', '#A3F0EB']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* ========== CONTENIDO CON SCROLL (z-index: 1) ========== */}
      <div className="content-container">

        {/* HERO SECTION */}
        <section id="hero" className="section hero-section">
          {/* Top Left: GooeyNav */}
          <div className="corner-top-left">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Top Right: Language & Theme Toggles */}
          <div className="corner-top-right">
            <div className="toggle-buttons-horizontal">
              <button className="glass-button" title="Toggle Language">
                <span>🌐</span>
                <span className="toggle-label">ES</span>
              </button>
              <button className="glass-button" title="Toggle Theme">
                <span>🌙</span>
              </button>
            </div>
          </div>

          {/* Center: ASCII Text + Subtitle */}
          <div className="hero-center">
            <div className="ascii-wrapper-small">
              <ASCIIText
                text='R1ckfolio'
                enableWaves={true}
                asciiFontSize={6}
                textFontSize={150}
                planeBaseHeight={7}
              />
            </div>
            <h2 className="subtitle-code">&lt;software developer&gt;</h2>
          </div>

          {/* Bottom Left: Social Links */}
          <div className="corner-bottom-left">
            <div className="social-buttons-vertical">
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="glass-button social-button" title="LinkedIn">
                <span>🔗</span>
              </a>
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="glass-button social-button" title="GitHub">
                <span>🐙</span>
              </a>
              <a href="mailto:tu@email.com" className="glass-button social-button" title="Email">
                <span>📧</span>
              </a>
            </div>
          </div>

          {/* Bottom Right: Quote */}
          <div className="corner-bottom-right">
            <p className="quote-text">see you space cowboy...</p>
          </div>

          {/* Bottom Center: Scroll Indicator */}
          <a href="#about" className="scroll-indicator">
            <span>↓</span>
          </a>
        </section>

        {/* SOBRE MÍ SECTION */}
        <section id="about" className="section">
          <div className="section-content">
            <h2 className="section-title">Sobre Mí</h2>
            <div className="glass-card">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        {/* STACK TECNOLÓGICO SECTION */}
        <section id="stack" className="section">
          <div className="section-content">
            <h2 className="section-title">Stack Tecnológico</h2>

            <div className="stack-grid">
              {/* Frontend */}
              <div className="glass-card">
                <h3>Frontend</h3>
                <p>
                  React, Vue, Angular, TypeScript, Tailwind CSS, Next.js, Vite, Three.js.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              {/* Backend */}
              <div className="glass-card">
                <h3>Backend</h3>
                <p>
                  Node.js, Express, NestJS, Python, Django, FastAPI, PostgreSQL, MongoDB.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* DevOps */}
              <div className="glass-card">
                <h3>DevOps</h3>
                <p>
                  Docker, Kubernetes, AWS, GCP, CI/CD, GitHub Actions, Terraform, Nginx.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA SECTION */}
        <section id="experience" className="section">
          <div className="section-content">
            <h2 className="section-title">Experiencia</h2>

            <div className="timeline">
              <div className="glass-card timeline-item">
                <h3>Senior Full Stack Developer</h3>
                <p className="timeline-period">2022 - Presente</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Desarrollo de
                  aplicaciones web escalables usando React y Node.js. Implementación de
                  arquitecturas de microservicios y optimización de rendimiento.
                </p>
              </div>

              <div className="glass-card timeline-item">
                <h3>Full Stack Developer</h3>
                <p className="timeline-period">2020 - 2022</p>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Desarrollo de APIs RESTful y GraphQL. Integración de servicios cloud
                  y automatización de procesos con Docker y CI/CD.
                </p>
              </div>

              <div className="glass-card timeline-item">
                <h3>Backend Developer</h3>
                <p className="timeline-period">2018 - 2020</p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  Diseño y desarrollo de bases de datos relacionales y no relacionales.
                  Optimización de queries y manejo de grandes volúmenes de datos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS SECTION */}
        <section id="projects" className="section">
          <div className="section-content">
            <h2 className="section-title">Proyectos</h2>

            <div className="projects-grid">
              <div className="glass-card project-card">
                <h3>E-Commerce Platform</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plataforma
                  completa de comercio electrónico con carrito de compras, pagos integrados
                  y panel de administración.
                </p>
                <div className="tech-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              <div className="glass-card project-card">
                <h3>Real-Time Chat Application</h3>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Aplicación de mensajería en tiempo real con WebSockets, grupos de chat
                  y compartición de archivos multimedia.
                </p>
                <div className="tech-tags">
                  <span>Vue</span>
                  <span>Socket.io</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="glass-card project-card">
                <h3>Task Management System</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  Sistema de gestión de tareas con tableros Kanban, asignación de usuarios
                  y seguimiento de progreso en tiempo real.
                </p>
                <div className="tech-tags">
                  <span>Next.js</span>
                  <span>FastAPI</span>
                  <span>Redis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO SECTION */}
        <section id="contact" className="section">
          <div className="section-content">
            <h2 className="section-title">Contacto</h2>

            <div className="glass-card contact-card">
              <p className="contact-intro">
                ¿Interesado en trabajar juntos? ¡Contáctame!
              </p>

              <div className="contact-links">
                <a href="mailto:tu@email.com" className="contact-link">
                  <span>📧</span>
                  <span>tu@email.com</span>
                </a>

                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span>🐙</span>
                  <span>github.com/tuusuario</span>
                </a>

                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span>💼</span>
                  <span>linkedin.com/in/tuusuario</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© 2025 R1ck - Full Stack Wizard</p>
        </footer>

      </div>
    </>
  )
}

export default App
