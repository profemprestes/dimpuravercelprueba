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
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS • 
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            DIMPURA<span>3D</span>
          </Link>
          <div className="beta-badge">MVD</div>
        </div>

        {/* Links */}
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
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar coleccionables, maquetas, servicios..."
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
          <div className="season-badge">ESTUDIO 3D // MONTEVIDEO, URUGUAY</div>

          {/* Headline */}
          <h1 className="hero-headline">
            DEL ARCHIVO
            <br />
            <span className="hero-headline-highlight">A LA REALIDAD.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtext">
            Materializamos tus ideas. Diseñamos, imprimimos y pintamos coleccionables, 
            maquetas arquitectonicas y proyectos personalizados con acabados profesionales.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="#servicios" className="btn-primary hover-lift">
              VER SERVICIOS
            </Link>
            <Link href="#contacto" className="btn-secondary hover-lift">
              SOLICITAR COTIZACION
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
              <div className="social-proof-title">+500 Proyectos</div>
              <div className="social-proof-subtitle">Entregados con acabado profesional</div>
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
              fill="#7C3AED"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.6C59,41.7,47.1,49,35.3,55.1C23.5,61.2,11.8,66.1,-0.6,67.1C-12.9,68.1,-25.8,65.2,-37.9,59.2C-50,53.2,-61.3,44.1,-70.5,32.6C-79.7,21.1,-86.8,7.2,-85.1,-6.1C-83.3,-19.4,-72.7,-32.1,-61.6,-41.8C-50.5,-51.5,-38.9,-58.2,-27.1,-66.9C-15.3,-75.6,-3.3,-86.3,10.2,-83.8C23.7,-81.3,30.5,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            ></path>
          </svg>

          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Impresora 3D creando figura coleccionable"
            />
            <div className="price-tag">FDM + RESINA</div>
          </div>

          {/* Secondary Image (Floating) */}
          <div className="secondary-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Figura coleccionable pintada"
            />
          </div>

          {/* Sticker Graphic */}
          <div className="sticker-graphic">
            <img
              src="https://images.unsplash.com/photo-1612441804231-fe428ec7f38d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Detalle de pintura 3D"
            />
            <div className="hot-badge">PRO</div>
          </div>

          {/* Decorative Star */}
          <svg
            className="decorative-star"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="#10B981"
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
            <Link href="#contacto">Consultar</Link>
          </div>

          <div className="product-grid">
            {/* Service 1 */}
            <Link href="/product/modelado-3d" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge new">DISEÑO</span>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Modelado y Diseño 3D"
                />
              </div>
              <h4>Modelado y Diseño 3D</h4>
              <p>Desde USD $30</p>
            </Link>

            {/* Service 2 */}
            <Link href="/product/impresion-3d" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Impresion 3D FDM y Resina"
                />
              </div>
              <h4>Impresion 3D</h4>
              <p>FDM y Resina</p>
            </Link>

            {/* Service 3 */}
            <Link href="/product/pintura-3d" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge sale">PREMIUM</span>
                <img
                  src="https://images.unsplash.com/photo-1612441804231-fe428ec7f38d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Pintura y Acabados Profesionales"
                />
              </div>
              <h4>Pintura y Acabados</h4>
              <p>Acabado Profesional</p>
            </Link>

            {/* Service 4 */}
            <Link href="/product/maquetas" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Maquetas Arquitectonicas"
                />
              </div>
              <h4>Maquetas Arquitectonicas</h4>
              <p>A escala profesional</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="trending-section" id="portafolio">
        <div className="container">
          <div className="trending-header">
            <h3>Proyectos Destacados</h3>
            <a href="https://www.instagram.com/dimpura3d/" target="_blank" rel="noopener noreferrer">Ver mas en Instagram</a>
          </div>

          <div className="product-grid">
            {/* Project 1 */}
            <div className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge new">COLECCIONABLE</span>
                <img
                  src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Coleccionables Pop Culture"
                />
              </div>
              <h4>Coleccionables Pop</h4>
              <p>Marvel, DC, Anime</p>
            </div>

            {/* Project 2 */}
            <div className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Maqueta Arquitectonica"
                />
              </div>
              <h4>Maquetas de Edificios</h4>
              <p>Acabados Realistas</p>
            </div>

            {/* Project 3 */}
            <div className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge sale">CUSTOM</span>
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Retratos 3D de Mascotas"
                />
              </div>
              <h4>Retratos de Mascotas</h4>
              <p>Personalizados</p>
            </div>

            {/* Project 4 */}
            <div className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Figuras de Anime"
                />
              </div>
              <h4>Figuras de Anime</h4>
              <p>Alto detalle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="trending-section" id="proceso">
        <div className="container">
          <div className="trending-header">
            <h3>Como Trabajamos</h3>
            <Link href="#contacto">Iniciar Proyecto</Link>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124, 58, 237, 0.2)' }}>
                <span style={{ fontSize: '48px', fontFamily: 'Orbitron', color: '#7C3AED' }}>01</span>
              </div>
              <h4>Consulta Inicial</h4>
              <p>Nos cuentas tu idea</p>
            </div>

            <div className="product-card">
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16, 185, 129, 0.2)' }}>
                <span style={{ fontSize: '48px', fontFamily: 'Orbitron', color: '#10B981' }}>02</span>
              </div>
              <h4>Diseño y Modelado</h4>
              <p>Creamos el archivo 3D</p>
            </div>

            <div className="product-card">
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(124, 58, 237, 0.2)' }}>
                <span style={{ fontSize: '48px', fontFamily: 'Orbitron', color: '#7C3AED' }}>03</span>
              </div>
              <h4>Impresion 3D</h4>
              <p>Materializamos la pieza</p>
            </div>

            <div className="product-card">
              <div className="product-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16, 185, 129, 0.2)' }}>
                <span style={{ fontSize: '48px', fontFamily: 'Orbitron', color: '#10B981' }}>04</span>
              </div>
              <h4>Pintura y Entrega</h4>
              <p>Acabado profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="trending-section" id="contacto">
        <div className="container">
          <div className="trending-header">
            <h3>Contactanos</h3>
            <span style={{ color: '#10B981' }}>Respondemos en 24hs</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* WhatsApp */}
            <a 
              href="https://wa.me/59891037258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="product-card hover-lift"
              style={{ textAlign: 'center', padding: '32px' }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#10B981" style={{ marginBottom: '16px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <h4>WhatsApp</h4>
              <p style={{ color: '#94a3b8' }}>+598 91 037 258</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:dimpura3d@gmail.com"
              className="product-card hover-lift"
              style={{ textAlign: 'center', padding: '32px' }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" style={{ marginBottom: '16px' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h4>Email</h4>
              <p style={{ color: '#94a3b8' }}>dimpura3d@gmail.com</p>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/dimpura3d/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="product-card hover-lift"
              style={{ textAlign: 'center', padding: '32px' }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#7C3AED" style={{ marginBottom: '16px' }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <h4>Instagram</h4>
              <p style={{ color: '#94a3b8' }}>@dimpura3d</p>
            </a>

            {/* Location */}
            <div 
              className="product-card"
              style={{ textAlign: 'center', padding: '32px' }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" style={{ marginBottom: '16px' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h4>Taller</h4>
              <p style={{ color: '#94a3b8' }}>Ignacio Medina 3257, Montevideo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
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
