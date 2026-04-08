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
      <main className="py-[80px] min-h-[70vh]">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="font-display text-[32px] md:text-[42px] leading-none text-[var(--color-brand-light)] mb-10 tracking-tighter font-bold">TUS PROYECTOS</h1>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[80px] bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-3xl text-center backdrop-blur-md">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-purple)" strokeWidth="1.5" className="mb-6 opacity-50">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="text-[var(--color-brand-muted)] text-lg mb-6">No tienes proyectos en tu lista</p>
              <p className="text-[var(--color-brand-muted-dark)] text-base mb-8 max-w-[400px] text-center">
                Explora nuestros servicios y añade los que te interesen para solicitar una cotizacion personalizada.
              </p>
              <Link href="/#servicios" className="inline-block px-9 py-[18px] font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-purple-dark)] text-[var(--color-brand-light)] border border-[rgba(124,58,237,0.5)] shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_30px_rgba(124,58,237,0.6)] hover:-translate-y-0.5">
                VER SERVICIOS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
              {/* Cart Items */}
              <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center p-6 bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl gap-6 backdrop-blur-md transition-all duration-300 hover:border-[rgba(124,58,237,0.4)] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(124,58,237,0.2)]">
                    <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-[120px] h-[120px] object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[var(--color-brand-light)] mb-2">{item.name}</h3>
                      <p className="text-[var(--color-brand-muted)] text-sm">{item.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-transparent text-[var(--color-brand-muted-dark)] text-[11px] font-bold tracking-wider hover:text-[#ef4444] transition-colors border-none cursor-pointer p-0 font-display" onClick={() => removeItem(item.id)}>
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-[var(--color-brand-bg-card)] border border-[var(--color-brand-border-card)] rounded-2xl p-8 sticky top-[120px] backdrop-blur-md">
                <h2 className="font-display text-[18px] text-[var(--color-brand-light)] mb-6 border-b border-[rgba(124,58,237,0.2)] pb-4 tracking-wider">SOLICITAR COTIZACION</h2>
                <p className="text-[var(--color-brand-muted)] text-sm mb-5 leading-relaxed">
                  Cada proyecto es unico. Enviaremos tu lista por WhatsApp para darte un presupuesto personalizado.
                </p>
                <div className="flex justify-between items-center py-4 border-t border-b border-[rgba(124,58,237,0.2)] mb-8 font-semibold">
                  <span className="text-[var(--color-brand-muted)]">Proyectos seleccionados</span>
                  <span className="text-[var(--color-brand-green)] font-display text-xl">{cartItems.length}</span>
                </div>
                <button onClick={handleRequestQuote} className="w-full text-center px-9 py-[18px] font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-gradient-to-br from-[var(--color-brand-purple)] to-[var(--color-brand-purple-dark)] text-[var(--color-brand-light)] border border-[rgba(124,58,237,0.5)] shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_30px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 cursor-pointer">
                  SOLICITAR COTIZACION POR WHATSAPP
                </button>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-[60px] p-10 bg-[var(--color-brand-bg-card)] rounded-[16px] border border-[var(--color-brand-border-card)] text-center">
            <h3 className="font-display text-[var(--color-brand-light)] mb-4 text-[24px]">¿Tienes un proyecto en mente?</h3>
            <p className="text-[var(--color-brand-muted)] mb-6 max-w-[500px] mx-auto">
              No importa si es una figura coleccionable, una maqueta arquitectonica o un prototipo industrial. 
              Te acompañamos desde la idea hasta la pieza final.
            </p>
            <a 
              href="https://wa.me/59891037258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-center px-9 py-[18px] font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-[rgba(16,185,129,0.1)] text-[var(--color-brand-green)] border border-[rgba(16,185,129,0.4)] backdrop-blur-md hover:bg-[rgba(16,185,129,0.2)] hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
            >
              CONTACTAR POR WHATSAPP
            </a>
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
