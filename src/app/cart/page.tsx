"use client"

import { useState } from "react"
import Link from "next/link"

export default function CartPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItems, setCartItems] = useState<{
    id: number
    name: string
    description: string
    image: string
  }[]>([])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleRequestQuote = () => {
    if (cartItems.length === 0) return
    const itemsList = cartItems.map(item => item.name).join(", ")
    const message = `Hola! Me interesa solicitar cotizacion para los siguientes servicios: ${itemsList}. Me gustaria recibir mas informacion.`
    window.open(`https://wa.me/59891037258?text=${encodeURIComponent(message)}`, "_blank")
  }

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
            <span className="cart-badge">{cartItems.length}</span>
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

      {/* Cart Section */}
      <main className="cart-section">
        <div className="cart-container">
          <h1 className="cart-title">TUS PROYECTOS</h1>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" className="icon-faded">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="empty-state-text">No tienes proyectos en tu lista</p>
              <p className="empty-state-subtext">
                Explora nuestros servicios y añade los que te interesen para solicitar una cotizacion personalizada.
              </p>
              <Link href="/#servicios" className="btn-primary hover-lift">
                VER SERVICIOS
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Cart Items */}
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <h2 className="summary-title">SOLICITAR COTIZACION</h2>
                <p className="summary-description">
                  Cada proyecto es unico. Enviaremos tu lista por WhatsApp para darte un presupuesto personalizado.
                </p>
                <div className="summary-line">
                  <span>Proyectos seleccionados</span>
                  <span>{cartItems.length}</span>
                </div>
                <button onClick={handleRequestQuote} className="btn-primary hover-lift checkout-btn">
                  SOLICITAR COTIZACION POR WHATSAPP
                </button>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="cta-banner">
            <h3 className="cta-banner-title">¿Tienes un proyecto en mente?</h3>
            <p className="cta-banner-text">
              No importa si es una figura coleccionable, una maqueta arquitectonica o un prototipo industrial. 
              Te acompañamos desde la idea hasta la pieza final.
            </p>
            <a 
              href="https://wa.me/59891037258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary hover-lift btn-inline"
            >
              CONTACTAR POR WHATSAPP
            </a>
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
