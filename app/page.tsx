"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buscando:", searchQuery)
    setSearchOpen(false)
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
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            DOS<span>RUEDAS</span>
          </Link>
          <div className="beta-badge">MDP</div>
        </div>

        {/* Links */}
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

        {/* Actions */}
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
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Rastrear envio o buscar servicio..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <main className="hero-section">
        {/* Left Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="season-badge">LOGISTICA URBANA // MAR DEL PLATA</div>

          {/* Headline */}
          <h1 className="hero-headline">
            TU ENVIO
            <br />
            <span className="hero-headline-highlight">CONFIABLE.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtext">
            Logistica urbana de alta precision y confiabilidad. Envios inmediatos, programados 
            y soluciones comerciales para tu negocio en Mar del Plata.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="#servicios" className="btn-primary hover-lift">
              SOLICITAR ENVIO
            </Link>
            <Link href="#como-funciona" className="btn-secondary hover-lift">
              COMO FUNCIONA
            </Link>
          </div>

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Cliente" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Cliente" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Cliente" />
            </div>
            <div>
              <div className="social-proof-title">+5,000 Envios</div>
              <div className="social-proof-subtitle">Entregados con exito en MDP</div>
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="hero-visuals">
          {/* Abstract Background Shape */}
          <svg
            className="abstract-shape"
            width="500"
            height="500"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1E40AF"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.6C59,41.7,47.1,49,35.3,55.1C23.5,61.2,11.8,66.1,-0.6,67.1C-12.9,68.1,-25.8,65.2,-37.9,59.2C-50,53.2,-61.3,44.1,-70.5,32.6C-79.7,21.1,-86.8,7.2,-85.1,-6.1C-83.3,-19.4,-72.7,-32.1,-61.6,-41.8C-50.5,-51.5,-38.9,-58.2,-27.1,-66.9C-15.3,-75.6,-3.3,-86.3,10.2,-83.8C23.7,-81.3,30.5,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            ></path>
          </svg>

          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Mensajero en moto realizando entrega"
            />
            <div className="price-tag">30 MIN</div>
          </div>

          {/* Secondary Image (Floating) */}
          <div className="secondary-image">
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Paquete listo para enviar"
            />
          </div>

          {/* Sticker Graphic */}
          <div className="sticker-graphic">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Tracking GPS"
            />
            <div className="hot-badge">GPS</div>
          </div>

          {/* Decorative Star */}
          <svg
            className="decorative-star"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="#F9A825"
            stroke="#020817"
            strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </main>

      {/* Services Section */}
      <section className="trending-section" id="servicios">
        <div className="container">
          <div className="trending-header">
            <h3>Nuestros Servicios</h3>
            <Link href="#contacto">Contactar</Link>
          </div>

          <div className="product-grid">
            {/* Service 1 */}
            <Link href="/product/envio-express" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge new">RAPIDO</span>
                <img
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Envio Express"
                />
              </div>
              <h4>Envio Express</h4>
              <p>Desde $800</p>
            </Link>

            {/* Service 2 */}
            <Link href="/product/envio-programado" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Envio Programado"
                />
              </div>
              <h4>Envio Programado</h4>
              <p>Desde $600</p>
            </Link>

            {/* Service 3 */}
            <Link href="/product/paqueteria-comercial" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge sale">PROMO</span>
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Paqueteria Comercial"
                />
              </div>
              <h4>Paqueteria Comercial</h4>
              <p>
                <span className="price-old">$1200</span> $950
              </p>
            </Link>

            {/* Service 4 */}
            <Link href="/product/delivery-empresarial" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Delivery Empresarial"
                />
              </div>
              <h4>Delivery Empresarial</h4>
              <p>Consultar</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
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
