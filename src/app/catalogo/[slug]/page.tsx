"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const [selectedMaterial, setSelectedMaterial] = useState("PLA")
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Mock catalog data based on Dimpura3D physical products
  const products: Record<string, {
    name: string
    price: string
    description: string
    materials?: string[]
    image: string
    badge: string
  }> = {
    "figura-anime-1": {
      name: "Figura de Anime",
      price: "USD $45",
      description:
        "Figura de anime de alta calidad impresa en resina para un nivel de detalle extremo. Pintada a mano con pinturas acrílicas premium y sellada con barniz protector. Ideal para coleccionistas.",
      materials: ["Resina", "PLA"],
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "NUEVO"
    },
    "coleccionable-pop": {
      name: "Coleccionable Pop",
      price: "USD $35",
      description:
        "Figura estilo Pop culture impresa en 3D. Diseño estilizado y acabados vibrantes. Personalizable bajo pedido para personajes específicos.",
      materials: ["PLA", "PETG"],
      image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "COLECCIONABLE"
    },
    "retrato-mascota": {
      name: "Retrato de Mascota",
      price: "USD $60",
      description:
        "Modelado y pintura personalizada de tu mascota. Envíanos fotos y crearemos una réplica fiel en 3D para tener un recuerdo único.",
      materials: ["Resina", "PLA"],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "CUSTOM"
    },
    "maqueta-edificio": {
      name: "Maqueta de Edificio",
      price: "USD $120",
      description:
        "Maqueta arquitectónica a escala para presentaciones o decoración. Nivel de detalle profesional con texturas realistas.",
      materials: ["PLA", "ABS"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "ARQUITECTURA"
    }
  }

  const slug = params.slug as string
  const product = products[slug] || products["figura-anime-1"]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buscando:", searchQuery)
    setSearchOpen(false)
  }

  const handleAddToCart = () => {
    // In a real app, this would add the item to context/state
    alert(`Añadido al carrito: ${product.name} (${selectedMaterial})`)
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

      {/* Product Detail Section */}
      <main className="product-detail-section">
        <div className="product-detail-container">
          {/* Product Image */}
          <div className="product-detail-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <div className="product-badge new">{product.badge}</div>
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-price">{product.price}</div>

            <p className="product-detail-description">{product.description}</p>

            {/* Material Selection */}
            {product.materials && (
              <div className="size-selection">
                <label className="size-label">MATERIAL</label>
                <div className="size-options">
                  {product.materials.map((material) => (
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

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-primary hover-lift"
              style={{ textAlign: "center", display: "block", width: "100%", marginTop: "24px" }}
            >
              AÑADIR AL CARRITO
            </button>

            {/* Additional Info */}
            <div style={{ marginTop: "32px", padding: "20px", background: "rgba(124, 58, 237, 0.1)", borderRadius: "12px", border: "1px solid rgba(124, 58, 237, 0.2)" }}>
              <h4 style={{ color: "#10B981", marginBottom: "12px", fontFamily: "Orbitron" }}>Información Adicional:</h4>
              <ul style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.8", paddingLeft: "20px" }}>
                <li>Envío a todo el país</li>
                <li>Tiempo de preparación: 3-5 días hábiles</li>
                <li>Garantía de calidad Dimpura3D</li>
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
