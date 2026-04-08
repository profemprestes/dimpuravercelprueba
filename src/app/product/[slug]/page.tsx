"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const [selectedMaterial, setSelectedMaterial] = useState("PLA")
  const [selectedFinish, setSelectedFinish] = useState("Basico")
  const [searchOpen, setSearchOpen] = useState(false)

  // Mock service data based on Dimpura3D services
  const services: Record<string, {
    name: string
    priceFrom: string
    description: string
    materials?: string[]
    finishes?: string[]
    image: string
    badge: string
  }> = {
    "modelado-3d": {
      name: "Modelado y Diseño 3D",
      priceFrom: "USD $30",
      description:
        "Creacion de archivos digitales desde cero. Diseñamos tu idea en 3D con precision profesional. Incluye revisiones ilimitadas hasta tu aprobacion. Ideal para coleccionables, maquetas, prototipos y piezas personalizadas.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "DISEÑO"
    },
    "impresion-3d": {
      name: "Impresion 3D",
      priceFrom: "Consultar",
      description:
        "Impresion en tecnologia FDM (filamento) y Resina de alta resolucion. Capacidad para piezas grandes como cascos tamaño real y miniaturas de alta definicion. Material PLA, PETG, ABS y resinas especiales.",
      materials: ["PLA", "PETG", "ABS", "Resina"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "FDM + RESINA"
    },
    "pintura-3d": {
      name: "Pintura y Acabados",
      priceFrom: "Consultar",
      description:
        "Acabado artesanal y detallado de las piezas impresas para lograr resultados realistas o decorativos. Incluye alisado, pintado a mano con aerografo y pinceles, azules metalicos, sombreados y acabados hiperrealistas.",
      finishes: ["Basico", "Metalizado", "Hiperrealista", "Automotriz"],
      image: "https://images.unsplash.com/photo-1612441804231-fe428ec7f38d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "PREMIUM"
    },
    "maquetas": {
      name: "Maquetas Arquitectonicas",
      priceFrom: "Consultar",
      description:
        "Creacion de edificios y estructuras a escala con acabados profesionales para arquitectura e ingenieria. Trabajamos con estudios de arquitectura y constructoras para validacion de proyectos.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "ARQUITECTURA"
    }
  }

  const slug = params.slug as string
  const service = services[slug] || services["modelado-3d"]

  const handleRequestQuote = () => {
    const message = `Hola! Me interesa el servicio de ${service.name}. ${service.materials ? `Material: ${selectedMaterial}. ` : ""}${service.finishes ? `Acabado: ${selectedFinish}. ` : ""}Me gustaria recibir una cotizacion.`
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

      {/* Service Detail Section */}
      <main className="product-detail-section">
        <div className="product-detail-container">
          {/* Service Image */}
          <div className="product-detail-image">
            <img src={service.image || "/placeholder.svg"} alt={service.name} />
          </div>

          {/* Service Info */}
          <div className="product-detail-info">
            <div className="product-badge new">{service.badge}</div>
            <h1 className="product-detail-title">{service.name}</h1>
            <div className="product-detail-price">{service.priceFrom}</div>

            <p className="product-detail-description">{service.description}</p>

            {/* Material Selection (for impresion-3d) */}
            {service.materials && (
              <div className="size-selection">
                <label className="size-label">MATERIAL</label>
                <div className="size-options">
                  {service.materials.map((material) => (
                    <button
                      key={material}
                      className={`size-button ${selectedMaterial === material ? "selected" : ""}`}
                      onClick={() => setSelectedMaterial(material)}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Finish Selection (for pintura-3d) */}
            {service.finishes && (
              <div className="size-selection">
                <label className="size-label">TIPO DE ACABADO</label>
                <div className="size-options">
                  {service.finishes.map((finish) => (
                    <button
                      key={finish}
                      className={`size-button ${selectedFinish === finish ? "selected" : ""}`}
                      onClick={() => setSelectedFinish(finish)}
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Request Quote Button */}
            <button
              onClick={handleRequestQuote}
              className="btn-primary hover-lift btn-block-mt"
            >
              SOLICITAR COTIZACION POR WHATSAPP
            </button>

            {/* Additional Info */}
            <div className="info-box">
              <h4 className="info-box-title">Incluye:</h4>
              <ul className="info-box-list">
                <li>Asesoria personalizada</li>
                <li>Revisiones hasta aprobacion</li>
                <li>Entrega en Montevideo o envio</li>
                <li>Garantia de calidad</li>
              </ul>
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
