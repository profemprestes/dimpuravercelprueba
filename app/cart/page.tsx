"use client"

import { useState } from "react"
import Link from "next/link"

export default function CartPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Envio Express",
      price: 800,
      quantity: 1,
      zone: "Centro",
      image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Paqueteria Comercial",
      price: 950,
      quantity: 2,
      zone: "Puerto",
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ])

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const descuento = subtotal > 2000 ? subtotal * 0.1 : 0
  const total = subtotal - descuento

  const handleCheckout = () => {
    console.log("Procesando pedido:", { items: cartItems, total })
    alert("Pedido confirmado! Total: $" + total.toFixed(0))
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
            <span className="cart-badge">{cartItems.length}</span>
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

      {/* Cart Section */}
      <main className="cart-section">
        <div className="cart-container">
          <h1 className="cart-title">TUS SERVICIOS</h1>

          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>No tienes servicios seleccionados</p>
              <Link href="/" className="btn-primary hover-lift">
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
                      <p>Zona: {item.zone}</p>
                      <p className="cart-item-price">${item.price}</p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>
                        ELIMINAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <h2 className="summary-title">RESUMEN DEL PEDIDO</h2>
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="summary-line">
                  <span>Descuento</span>
                  <span>{descuento === 0 ? "-" : `-$${descuento.toFixed(0)}`}</span>
                </div>
                {subtotal < 2000 && <p className="shipping-note">Suma ${(2000 - subtotal).toFixed(0)} mas para obtener 10% de descuento!</p>}
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total.toFixed(0)}</span>
                </div>
                <button onClick={handleCheckout} className="btn-primary hover-lift checkout-btn">
                  CONFIRMAR PEDIDO
                </button>
              </div>
            </div>
          )}
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
