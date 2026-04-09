"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  /** Número de ítems en el carrito. Por defecto 0. */
  cartCount?: number
}

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buscando:", searchQuery)
    setSearchOpen(false)
    setSearchQuery("")
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navigation">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Dimpura3D Logo"
              width={120}
              height={40}
              className="object-contain"
              style={{ height: '40px', width: 'auto' }}
              priority
            />
            <span className="hidden sm:inline">
              DIMPURA<span>3D</span>
            </span>
          </Link>
          <div className="beta-badge">MVD</div>
        </div>

        {/* Links */}
        <div className="nav-links">
          <Link href="/catalogo" className="nav-link">CATÁLOGO</Link>
          <Link href="/#servicios" className="nav-link">SERVICIOS</Link>
          <Link href="/#portafolio" className="nav-link">PORTAFOLIO</Link>
          <Link href="/#proceso" className="nav-link">PROCESO</Link>
          <Link href="/#contacto" className="nav-link">CONTACTO</Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="nav-icon"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Abrir búsqueda"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <Link href="/profile" className="nav-icon" aria-label="Mi perfil">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <Link href="/cart" className="nav-icon" aria-label="Carrito de compras">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="flex flex-1 items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#51fbef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="shrink-0 opacity-60">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Buscar coleccionables, maquetas, servicios..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
            <button
              className="search-close"
              onClick={() => setSearchOpen(false)}
              type="button"
              aria-label="Cerrar búsqueda"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}
