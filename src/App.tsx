import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Orus Web Studio</span>
          </div>
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a></li>
            <li><a href="#contacto" className="btn-cta" onClick={() => setMenuOpen(false)}>Contactar</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Sitios web que <span className="highlight">venden por ti</span>
          </h1>
          <p className="hero-subtitle">
            Diseño y desarrollo web profesional para pymes y emprendedores. 
            Tu negocio merece estar en internet como se debe.
          </p>
          <div className="hero-buttons">
            <a href="#contacto" className="btn btn-primary">Quiero mi web →</a>
            <a href="#proyectos" className="btn btn-secondary">Ver proyectos</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Webs creadas</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
            <div className="stat">
              <span className="stat-number">24h</span>
              <span className="stat-label">Respuesta</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="browser-mockup">
            <div className="browser-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="browser-url">tunegocio.cl</span>
            </div>
            <div className="browser-content">
              <div className="mockup-header"></div>
              <div className="mockup-text"></div>
              <div className="mockup-text short"></div>
              <div className="mockup-button"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="servicios">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <div className="servicio-icon">🎨</div>
            <h3>Landing Pages</h3>
            <p>Páginas de aterrizaje que convierten visitas en clientes. Diseño moderno y copy persuasivo.</p>
            <span className="precio">Desde $199.000 CLP</span>
          </div>
          <div className="servicio-card featured">
            <div className="servicio-icon">🛒</div>
            <h3>Tiendas Online</h3>
            <p>E-commerce completo con carrito, pagos y gestión. Vende las 24 horas.</p>
            <span className="precio">Desde $499.000 CLP</span>
          </div>
          <div className="servicio-card">
            <div className="servicio-icon">📱</div>
            <h3>Sitios Corporativos</h3>
            <p>Presencia web profesional para tu empresa. Secciones, blog, contacto y más.</p>
            <span className="precio">Desde $349.000 CLP</span>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="proyectos">
        <h2>Proyectos Recientes</h2>
        <div className="proyectos-grid">
          <div className="proyecto-card">
            <div className="proyecto-preview preview-1"></div>
            <h3>Café del Centro</h3>
            <p>Landing page para cafetería artesanal</p>
          </div>
          <div className="proyecto-card">
            <div className="proyecto-preview preview-2"></div>
            <h3>TecnoMax</h3>
            <p>Tienda online de accesorios tech</p>
          </div>
          <div className="proyecto-card">
            <div className="proyecto-preview preview-3"></div>
            <h3>Estudio Legal</h3>
            <p>Sitio corporativo para abogados</p>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="proceso">
        <h2>¿Cómo trabajamos?</h2>
        <div className="pasos">
          <div className="paso">
            <span className="paso-numero">1</span>
            <h3>Cuentas tu proyecto</h3>
            <p>Me contás qué necesitás y para qué. Sin compromiso.</p>
          </div>
          <div className="paso">
            <span className="paso-numero">2</span>
            <h3>Propuesta + mockup</h3>
            <p>Te muestro cómo quedará antes de programar.</p>
          </div>
          <div className="paso">
            <span className="paso-numero">3</span>
            <h3>Desarrollo</h3>
            <p>Construyo tu web en tiempo récord.</p>
          </div>
          <div className="paso">
            <span className="paso-numero">4</span>
            <h3>¡Lanzamiento!</h3>
            <p>Tu web está live y lista para vender.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contacto">
        <h2>¿Listo para arrancar?</h2>
        <p>Escribime y en 24 horas tienes propuesta.</p>
        <div className="contacto-buttons">
          <a 
            href="https://wa.me/56950617042" 
            className="btn btn-whatsapp" 
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <a 
            href="mailto:george.ganamillones@gmail.com" 
            className="btn btn-email"
          >
            📧 Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Orus Web Studio — Hecho con ⚡ en Chile</p>
      </footer>
    </div>
  )
}

export default App
