"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [selectedZone, setSelectedZone] = useState("Centro")
  const [searchOpen, setSearchOpen] = useState(false)

  // Mock service data
  const service = {
    name: "Envio Express",
    price: 800,
    description:
      "Entrega rapida en menos de 30 minutos dentro de Mar del Plata. Ideal para documentos, paquetes pequenos y envios urgentes. Rastreo GPS en tiempo real y confirmacion de entrega.",
    zones: ["Centro", "Puerto", "La Perla", "Guemes", "Constitucion", "Punta Mogotes"],
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }

  const handleRequestService = () => {
    console.log("Servicio solicitado:", { service: service.name, zone: selectedZone, quantity })
    router.push("/cart")
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

      {/* Service Detail Section */}
      <main className="product-detail-section">
        <div className="product-detail-container">
          {/* Service Image */}
          <div className="product-detail-image">
            <img src={service.image || "/placeholder.svg"} alt={service.name} />
          </div>

          {/* Service Info */}
          <div className="product-detail-info">
            <div className="product-badge new">RAPIDO</div>
            <h1 className="product-detail-title">{service.name}</h1>
            <div className="product-detail-price">Desde ${service.price}</div>

            <p className="product-detail-description">{service.description}</p>

            {/* Zone Selection */}
            <div className="size-selection">
              <label className="size-label">ZONA DE ENTREGA</label>
              <div className="size-options">
                {service.zones.map((zone) => (
                  <button
                    key={zone}
                    className={`size-button ${selectedZone === zone ? "selected" : ""}`}
                    onClick={() => setSelectedZone(zone)}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <label className="quantity-label">CANTIDAD DE ENVIOS</label>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </div>
            </div>

            {/* Request Service Button */}
            <button
              onClick={handleRequestService}
              className="btn-primary hover-lift"
              style={{ textAlign: "center", display: "block", width: "100%" }}
            >
              SOLICITAR SERVICIO
            </button>
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
