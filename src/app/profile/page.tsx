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
      <main className="py-[80px] min-h-[70vh]">
        <div className="max-w-[800px] mx-auto px-5 flex flex-col gap-6">
          <h1 className="font-display text-[32px] md:text-[42px] leading-none text-[var(--color-brand-light)] mb-10 tracking-tighter font-bold">SOBRE NOSOTROS</h1>

          {/* Header Card */}
          <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-8 backdrop-blur-md flex flex-col items-center text-center">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-green)] flex items-center justify-center mb-5 text-[36px] font-display font-bold text-[var(--color-brand-light)]">
                D3D
              </div>
              <div className="text-center">
                <h1 className="font-display text-[28px] md:text-[36px] text-[var(--color-brand-light)] font-bold mb-2 tracking-wide">DIMPURA 3D</h1>
                <p className="text-[var(--color-brand-green)] font-semibold text-center">Estudio de Impresion 3D en Montevideo</p>
              </div>
            </div>
            
            <div className="flex justify-around w-full border-t border-[rgba(124,58,237,0.2)] pt-8 mt-4 gap-4">
              <div className="text-center flex-1">
                <span className="block font-display text-[24px] text-[var(--color-brand-light)] font-bold mb-1">+500</span>
                <span className="text-[12px] text-[var(--color-brand-muted-dark)] font-bold tracking-wider uppercase">Proyectos</span>
              </div>
              <div className="text-center flex-1 border-l border-r border-[rgba(124,58,237,0.2)]">
                <span className="block font-display text-[24px] text-[var(--color-brand-light)] font-bold mb-1">5+</span>
                <span className="text-[12px] text-[var(--color-brand-muted-dark)] font-bold tracking-wider uppercase">Años</span>
              </div>
              <div className="text-center flex-1">
                <span className="block font-display text-[24px] text-[var(--color-brand-light)] font-bold mb-1">100%</span>
                <span className="text-[12px] text-[var(--color-brand-muted-dark)] font-bold tracking-wider uppercase">Satisfaccion</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-8 backdrop-blur-md">
            <h3 className="font-display text-[16px] text-[var(--color-brand-light)] mb-6 border-b border-[rgba(124,58,237,0.2)] pb-4 tracking-widest">NUESTRA HISTORIA</h3>
            <p className="text-[var(--color-brand-muted)] leading-[1.8] mb-4">
              Somos un estudio en Montevideo dedicado a materializar ideas. No solo imprimimos; diseñamos, 
              pulimos y pintamos para dar un acabado profesional a maquetas, coleccionables y prototipos industriales.
            </p>
            <p className="text-[var(--color-brand-muted)] leading-[1.8]">
              Desde figuras de cultura pop hasta maquetas arquitectonicas, cada proyecto recibe atencion al detalle 
              y acabados que superan expectativas. Trabajamos con tecnologia FDM y resina para garantizar la mejor 
              calidad en cada pieza.
            </p>
          </div>

          {/* Services Summary */}
          <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-8 backdrop-blur-md">
            <h3 className="font-display text-[16px] text-[var(--color-brand-light)] mb-6 border-b border-[rgba(124,58,237,0.2)] pb-4 tracking-widest">QUE HACEMOS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[rgba(124,58,237,0.1)] rounded-xl border border-[rgba(124,58,237,0.2)]">
                <h4 className="text-[var(--color-brand-green)] mb-2 font-display text-[14px]">MODELADO 3D</h4>
                <p className="text-[var(--color-brand-muted)] text-[13px]">Diseño digital desde cero</p>
              </div>
              <div className="p-5 bg-[rgba(124,58,237,0.1)] rounded-xl border border-[rgba(124,58,237,0.2)]">
                <h4 className="text-[var(--color-brand-green)] mb-2 font-display text-[14px]">IMPRESION 3D</h4>
                <p className="text-[var(--color-brand-muted)] text-[13px]">FDM y Resina de alta resolucion</p>
              </div>
              <div className="p-5 bg-[rgba(124,58,237,0.1)] rounded-xl border border-[rgba(124,58,237,0.2)]">
                <h4 className="text-[var(--color-brand-green)] mb-2 font-display text-[14px]">PINTURA</h4>
                <p className="text-[var(--color-brand-muted)] text-[13px]">Acabados profesionales</p>
              </div>
              <div className="p-5 bg-[rgba(124,58,237,0.1)] rounded-xl border border-[rgba(124,58,237,0.2)]">
                <h4 className="text-[var(--color-brand-green)] mb-2 font-display text-[14px]">MAQUETAS</h4>
                <p className="text-[var(--color-brand-muted)] text-[13px]">Arquitectura e ingenieria</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-8 backdrop-blur-md">
            <h3 className="font-display text-[16px] text-[var(--color-brand-light)] mb-6 border-b border-[rgba(124,58,237,0.2)] pb-4 tracking-widest">CONTACTO</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/59891037258"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-9 py-[18px] font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-purple-dark)] text-[var(--color-brand-light)] border border-[rgba(124,58,237,0.5)] shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_30px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
              >
                WHATSAPP: +598 91 037 258
              </a>
              <a 
                href="mailto:dimpura3d@gmail.com"
                className="w-full text-center px-9 py-[18px] font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-[rgba(16,185,129,0.1)] text-[var(--color-brand-green)] border border-[rgba(16,185,129,0.4)] backdrop-blur-md hover:bg-[rgba(16,185,129,0.2)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
              >
                EMAIL: dimpura3d@gmail.com
              </a>
              <div className="p-4 bg-[rgba(16,185,129,0.1)] rounded-lg border border-[rgba(16,185,129,0.2)] text-center">
                <p className="text-[var(--color-brand-green)] font-display text-[12px] mb-2 tracking-widest font-bold">TALLER</p>
                <p className="text-[var(--color-brand-muted)]">Ignacio Medina 3257, Montevideo, Uruguay</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="profile-card">
            <h3 className="profile-section-title">REDES SOCIALES</h3>
            <div className="social-links-container">
              <a 
                href="https://www.instagram.com/dimpura3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-lift social-link-btn"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://www.facebook.com/dimpura3d.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-lift social-link-btn"
              >
                FACEBOOK
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
