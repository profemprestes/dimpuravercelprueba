"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProfilePage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS • 
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">
          <Link href="/">
            DIMPURA<span>3D</span>
          </Link>
          <div className="beta-badge">MVD</div>
        </div>

        <div className="nav-links">
          <Link href="/#servicios" className="nav-link">
            SERVICIOS
          </Link>
          <Link href="/#portafolio" className="nav-link">
            PORTAFOLIO
          </Link>
          <Link href="/#proceso" className="nav-link">
            PROCESO
          </Link>
          <Link href="/#contacto" className="nav-link">
            CONTACTO
          </Link>
        </div>

        <div className="nav-actions">
          <div className="nav-icon" onClick={() => setSearchOpen(!searchOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <Link href="/profile" className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <Link href="/cart" className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Buscar coleccionables, maquetas, servicios..." className="search-input" autoFocus />
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <main className="profile-section">
        <div className="profile-container">
          <h1 className="profile-title">SOBRE NOSOTROS</h1>

          {/* About Card */}
          <div className="profile-card">
            <div className="profile-header" style={{ flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ 
                width: "120px", 
                height: "120px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, #7C3AED 0%, #10B981 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "36px",
                fontFamily: "Orbitron",
                fontWeight: "bold",
                color: "#f8fafc"
              }}>
                D3D
              </div>
              <div>
                <h2 className="profile-name" style={{ textAlign: "center" }}>Dimpura3D</h2>
                <p className="profile-email" style={{ textAlign: "center" }}>Estudio de Impresion 3D en Montevideo</p>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">+500</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Años</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Satisfaccion</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="profile-card">
            <h3 className="profile-section-title">NUESTRA HISTORIA</h3>
            <p style={{ color: "#94a3b8", lineHeight: "1.8", marginBottom: "16px" }}>
              Somos un estudio en Montevideo dedicado a materializar ideas. No solo imprimimos; diseñamos, 
              pulimos y pintamos para dar un acabado profesional a maquetas, coleccionables y prototipos industriales.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: "1.8" }}>
              Desde figuras de cultura pop hasta maquetas arquitectonicas, cada proyecto recibe atencion al detalle 
              y acabados que superan expectativas. Trabajamos con tecnologia FDM y resina para garantizar la mejor 
              calidad en cada pieza.
            </p>
          </div>

          {/* Services Summary */}
          <div className="profile-card">
            <h3 className="profile-section-title">QUE HACEMOS</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "20px", background: "rgba(124, 58, 237, 0.1)", borderRadius: "12px", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
                <h4 style={{ color: "#10B981", marginBottom: "8px", fontFamily: "Orbitron", fontSize: "14px" }}>MODELADO 3D</h4>
                <p style={{ color: "#94a3b8", fontSize: "13px" }}>Diseño digital desde cero</p>
              </div>
              <div style={{ padding: "20px", background: "rgba(124, 58, 237, 0.1)", borderRadius: "12px", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
                <h4 style={{ color: "#10B981", marginBottom: "8px", fontFamily: "Orbitron", fontSize: "14px" }}>IMPRESION 3D</h4>
                <p style={{ color: "#94a3b8", fontSize: "13px" }}>FDM y Resina de alta resolucion</p>
              </div>
              <div style={{ padding: "20px", background: "rgba(124, 58, 237, 0.1)", borderRadius: "12px", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
                <h4 style={{ color: "#10B981", marginBottom: "8px", fontFamily: "Orbitron", fontSize: "14px" }}>PINTURA</h4>
                <p style={{ color: "#94a3b8", fontSize: "13px" }}>Acabados profesionales</p>
              </div>
              <div style={{ padding: "20px", background: "rgba(124, 58, 237, 0.1)", borderRadius: "12px", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
                <h4 style={{ color: "#10B981", marginBottom: "8px", fontFamily: "Orbitron", fontSize: "14px" }}>MAQUETAS</h4>
                <p style={{ color: "#94a3b8", fontSize: "13px" }}>Arquitectura e ingenieria</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="profile-card">
            <h3 className="profile-section-title">CONTACTO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a 
                href="https://wa.me/59891037258"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover-lift"
                style={{ width: "100%", textAlign: "center" }}
              >
                WHATSAPP: +598 91 037 258
              </a>
              <a 
                href="mailto:dimpura3d@gmail.com"
                className="btn-secondary hover-lift"
                style={{ width: "100%", textAlign: "center" }}
              >
                EMAIL: dimpura3d@gmail.com
              </a>
              <div style={{ padding: "16px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.2)", textAlign: "center" }}>
                <p style={{ color: "#10B981", fontFamily: "Orbitron", fontSize: "12px", marginBottom: "8px" }}>TALLER</p>
                <p style={{ color: "#94a3b8" }}>Ignacio Medina 3257, Montevideo, Uruguay</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="profile-card">
            <h3 className="profile-section-title">REDES SOCIALES</h3>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a 
                href="https://www.instagram.com/dimpura3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-lift"
                style={{ flex: 1, minWidth: "150px", textAlign: "center" }}
              >
                INSTAGRAM
              </a>
              <a 
                href="https://www.facebook.com/dimpura3d.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-lift"
                style={{ flex: 1, minWidth: "150px", textAlign: "center" }}
              >
                FACEBOOK
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            DIMPURA3D
          </Link>
          <div className="footer-copyright">2026 Dimpura3D. Todos los derechos reservados. Montevideo, Uruguay.</div>
          <div className="footer-links">
            <a href="https://www.instagram.com/dimpura3d/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/dimpura3d.uy/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://wa.me/59891037258" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
