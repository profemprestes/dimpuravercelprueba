"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProfilePage() {
  const [searchOpen, setSearchOpen] = useState(false)

  const envios = [
    {
      id: "#DR-00124",
      date: "8 Abr, 2024",
      status: "Entregado",
      total: 1600,
      items: 2,
    },
    {
      id: "#DR-00098",
      date: "5 Abr, 2024",
      status: "En Camino",
      total: 800,
      items: 1,
    },
  ]

  const handleEditProfile = () => {
    console.log("Editar perfil clickeado")
    alert("Editar perfil proximamente!")
  }

  const handleViewOrder = (orderId: string) => {
    console.log("Ver envio:", orderId)
    alert(`Detalles del envio ${orderId} proximamente!`)
  }

  const handleSettingClick = (setting: string) => {
    console.log("Setting clicked:", setting)
    if (setting === "logout") {
      alert("Cerrar sesion proximamente!")
    } else {
      alert(`${setting} proximamente!`)
    }
  }

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            ENVIOS EN 30 MINUTOS EN MAR DEL PLATA • RASTREO EN TIEMPO REAL • TARIFAS TRANSPARENTES • SOCIOS COMERCIALES BIENVENIDOS • 
            ENVIOS EN 30 MINUTOS EN MAR DEL PLATA • RASTREO EN TIEMPO REAL • TARIFAS TRANSPARENTES • SOCIOS COMERCIALES BIENVENIDOS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">
          <Link href="/">
            DOS<span>RUEDAS</span>
          </Link>
          <div className="beta-badge">MDP</div>
        </div>

        <div className="nav-links">
          <Link href="/#servicios" className="nav-link">
            SERVICIOS
          </Link>
          <Link href="/#como-funciona" className="nav-link">
            COMO FUNCIONA
          </Link>
          <Link href="/#tarifas" className="nav-link">
            TARIFAS
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
              <rect x="1" y="3" width="15" height="13" rx="2"></rect>
              <path d="M16 8h4l3 4v5a1 1 0 0 1-1 1h-3"></path>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span className="cart-badge">2</span>
          </Link>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Rastrear envio o buscar servicio..." className="search-input" autoFocus />
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {/* Profile Section */}
      <main className="profile-section">
        <div className="profile-container">
          <h1 className="profile-title">MI CUENTA</h1>

          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Perfil" 
                className="profile-avatar"
              />
              <div>
                <h2 className="profile-name">Carlos Martinez</h2>
                <p className="profile-email">carlos.martinez@email.com</p>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">24</span>
                <span className="stat-label">Envios</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">A Tiempo</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">$12.4k</span>
                <span className="stat-label">Total</span>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="profile-card">
            <h3 className="profile-section-title">ENVIOS RECIENTES</h3>
            {envios.map((envio) => (
              <div key={envio.id} className="order-item">
                <div>
                  <span className="order-id">{envio.id}</span>
                  <span className="order-date"> - {envio.date}</span>
                </div>
                <span className={`order-status ${envio.status === "Entregado" ? "delivered" : "pending"}`}>
                  {envio.status}
                </span>
                <span className="order-total">${envio.total}</span>
              </div>
            ))}
          </div>

          {/* Settings */}
          <div className="profile-card">
            <h3 className="profile-section-title">CONFIGURACION</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button 
                onClick={() => handleSettingClick("Direcciones guardadas")}
                className="btn-secondary hover-lift"
                style={{ width: "100%", textAlign: "left" }}
              >
                Direcciones Guardadas
              </button>
              <button 
                onClick={() => handleSettingClick("Metodos de pago")}
                className="btn-secondary hover-lift"
                style={{ width: "100%", textAlign: "left" }}
              >
                Metodos de Pago
              </button>
              <button 
                onClick={() => handleSettingClick("Notificaciones")}
                className="btn-secondary hover-lift"
                style={{ width: "100%", textAlign: "left" }}
              >
                Notificaciones
              </button>
              <button 
                onClick={() => handleSettingClick("logout")}
                className="btn-primary hover-lift"
                style={{ width: "100%", marginTop: "12px" }}
              >
                CERRAR SESION
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            DOSRUEDAS
          </Link>
          <div className="footer-copyright">2024 Envios DosRuedas. Todos los derechos reservados. Mar del Plata.</div>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://wa.me/542234000000" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:info@dosruedas.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
