"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

export default function CatalogoPage() {
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
          <Link href="/catalogo" className="nav-link">
            CATÁLOGO
          </Link>
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

      {/* Catalog Section */}
      <section className="bg-[rgba(15,23,42,0.5)] py-[60px] border-t border-[rgba(124,58,237,0.2)] backdrop-blur-md" id="catalogo">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-display text-[28px] text-[var(--color-brand-light)] tracking-wide">Catálogo de Productos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <Link href="/catalogo/figura-anime-1" className="block bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-4 transition-all duration-300 backdrop-blur-md hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 no-underline group">
              <div className="relative h-[200px] bg-[rgba(15,23,42,0.5)] mb-4 overflow-hidden rounded-xl">
                <span className="absolute top-3 left-3 text-[10px] px-3 py-1.5 font-bold text-[var(--color-brand-light)] bg-gradient-to-br from-[var(--color-brand-purple)] to-[#A78BFA] rounded-full font-display tracking-widest z-10">NUEVO</span>
                <img
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Figura de Anime"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="font-semibold mb-2 text-[var(--color-brand-light)] text-base">Figura de Anime</h4>
              <p className="text-[var(--color-brand-green)] text-sm font-semibold font-display">USD $45</p>
            </Link>

            {/* Product 2 */}
            <Link href="/catalogo/coleccionable-pop" className="block bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-4 transition-all duration-300 backdrop-blur-md hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 no-underline group">
              <div className="relative h-[200px] bg-[rgba(15,23,42,0.5)] mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Coleccionables Pop"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="font-semibold mb-2 text-[var(--color-brand-light)] text-base">Coleccionables Pop</h4>
              <p className="text-[var(--color-brand-green)] text-sm font-semibold font-display">USD $35</p>
            </Link>

            {/* Product 3 */}
            <Link href="/catalogo/retrato-mascota" className="block bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-4 transition-all duration-300 backdrop-blur-md hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 no-underline group">
              <div className="relative h-[200px] bg-[rgba(15,23,42,0.5)] mb-4 overflow-hidden rounded-xl">
                <span className="absolute top-3 left-3 text-[10px] px-3 py-1.5 font-bold text-[var(--color-brand-dark)] bg-gradient-to-br from-[var(--color-brand-green)] to-[var(--color-brand-green-dark)] rounded-full font-display tracking-widest z-10">CUSTOM</span>
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Retrato de Mascota"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="font-semibold mb-2 text-[var(--color-brand-light)] text-base">Retrato de Mascota</h4>
              <p className="text-[var(--color-brand-green)] text-sm font-semibold font-display">USD $60</p>
            </Link>

            {/* Product 4 */}
            <Link href="/catalogo/maqueta-edificio" className="block bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-4 transition-all duration-300 backdrop-blur-md hover:border-[rgba(16,185,129,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1 no-underline group">
              <div className="relative h-[200px] bg-[rgba(15,23,42,0.5)] mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Maqueta Arquitectonica"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="font-semibold mb-2 text-[var(--color-brand-light)] text-base">Maqueta de Edificio</h4>
              <p className="text-[var(--color-brand-green)] text-sm font-semibold font-display">USD $120</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
      <footer className="bg-[rgba(2,8,23,0.8)] border-t border-[rgba(124,58,237,0.2)] py-8 mt-auto relative z-10 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="font-display font-bold text-xl tracking-wider text-[var(--color-brand-light)] no-underline">
            DIMPURA<span className="text-[var(--color-brand-green)]">3D</span>
          </Link>
          <div className="text-[var(--color-brand-muted-dark)] text-sm text-center">2026 Dimpura3D. Todos los derechos reservados. Montevideo, Uruguay.</div>
          <div className="flex gap-4 text-sm font-semibold">
            <a href="https://www.instagram.com/dimpura3d/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-green)] transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/dimpura3d.uy/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-green)] transition-colors">
              Facebook
            </a>
            <a href="https://wa.me/59891037258" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand-muted)] hover:text-[var(--color-brand-green)] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
