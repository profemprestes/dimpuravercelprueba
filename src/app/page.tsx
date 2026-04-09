"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS •&nbsp;
            IMPRESION 3D EN MONTEVIDEO • COLECCIONABLES DE ALTA CALIDAD • MAQUETAS ARQUITECTONICAS • PINTURA PROFESIONAL • PROYECTOS PERSONALIZADOS •
          </div>
        </div>
      </div>

      <Navbar />

      {/* Main Hero Section */}
      <main className="max-w-[1200px] mx-auto w-full px-5 py-10 lg:py-[60px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-[60px] items-center relative lg:min-h-[80vh]">
        {/* Left Content */}
        <div className="z-10">
          {/* Badge */}
          <div className="inline-block glass-purple px-5 py-2.5 rounded-full font-semibold text-xs mb-6 tracking-widest font-display text-(--color-brand-cyan)">
            ESTUDIO 3D // MONTEVIDEO, URUGUAY
          </div>

          {/* Headline */}
          <h1 className="font-display text-[32px] md:text-[42px] lg:text-[72px] leading-none text-(--color-brand-light) mb-5 md:mb-8 tracking-tighter font-bold">
            DEL ARCHIVO
            <br />
            <span className="text-(--color-brand-cyan) neon-text-cyan">A LA REALIDAD.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg leading-relaxed text-(--color-brand-muted) max-w-[480px] mb-8 md:mb-12 font-normal">
            Materializamos tus ideas. Diseñamos, imprimimos y pintamos coleccionables,
            maquetas arquitectonicas y proyectos personalizados con acabados profesionales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Link
              href="#servicios"
              className="btn-primary inline-block w-full sm:w-auto text-center"
            >
              VER SERVICIOS
            </Link>
            <Link
              href="#contacto"
              className="btn-secondary inline-block w-full sm:w-auto text-center"
            >
              SOLICITAR COTIZACION
            </Link>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-[60px] flex items-center gap-4 p-5 glass-purple rounded-xl max-w-fit">
            <div className="flex">
              <Image
                src="/img_exp/20201211_043424_utc_profile_pic.jpg"
                alt="Proyecto 1" width={40} height={40}
                className="w-10 h-10 rounded-full border-2 border-(--color-brand-dark) object-cover"
              />
              <Image
                src="/img_exp/20251217_015133_utc_1.jpg"
                alt="Proyecto 2" width={40} height={40}
                className="w-10 h-10 rounded-full border-2 border-(--color-brand-dark) -ml-3 object-cover"
              />
              <Image
                src="/img_exp/20251217_015133_utc_2.jpg"
                alt="Proyecto 3" width={40} height={40}
                className="w-10 h-10 rounded-full border-2 border-(--color-brand-dark) -ml-3 object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-[14px] text-(--color-brand-light)">+500 Proyectos</div>
              <div className="text-[12px] text-(--color-brand-muted-dark)">Entregados con acabado profesional</div>
            </div>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Abstract Background Shape */}
          <svg
            className="absolute z-1 opacity-30 blur-3xl animate-[rotate_20s_linear_infinite]"
            width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="var(--color-brand-cyan)"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.6C59,41.7,47.1,49,35.3,55.1C23.5,61.2,11.8,66.1,-0.6,67.1C-12.9,68.1,-25.8,65.2,-37.9,59.2C-50,53.2,-61.3,44.1,-70.5,32.6C-79.7,21.1,-86.8,7.2,-85.1,-6.1C-83.3,-19.4,-72.7,-32.1,-61.6,-41.8C-50.5,-51.5,-38.9,-58.2,-27.1,-66.9C-15.3,-75.6,-3.3,-86.3,10.2,-83.8C23.7,-81.3,30.5,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Main Display Item */}
          <div className="relative z-2 w-[380px] h-[480px] rounded-[20px] glass-purple overflow-hidden animate-[glow_4s_ease-in-out_infinite]">
            <Image
              src="/img_exp/cascomasterchief.jpg"
              alt="Impresora 3D creando figura coleccionable"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-5 -left-2.5 bg-linear-to-br from-(--color-brand-cyan) to-[#39e8dd] px-5 py-3 font-bold font-display text-[14px] rounded-lg text-(--color-brand-dark) shadow-[0_4px_20px_rgba(81,251,239,0.4)]">
              FDM + RESINA
            </div>
          </div>

          {/* Secondary Floating Image */}
          <div className="absolute top-10 -right-2.5 w-[160px] h-[160px] rounded-2xl z-3 glass-purple overflow-hidden animate-[float_3s_ease-in-out_infinite]">
            <Image
              src="/img_exp/figuraarticuladachimuelo.jpg"
              alt="Figura coleccionable pintada"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Sticker Graphic */}
          <div className="absolute bottom-10 right-2.5 z-4">
            <div className="absolute -top-2 -right-2 bg-linear-to-br from-(--color-brand-cyan) to-[#39e8dd] text-(--color-brand-dark) w-[45px] h-[45px] rounded-full flex items-center justify-center font-bold text-[11px] font-display border-2 border-(--color-brand-dark)">
              PRO
            </div>
            <Image
              src="/img_exp/máscaradeadpool.jpg"
              alt="Detalle de pintura 3D"
              width={120} height={120}
              className="w-[120px] h-[120px] rounded-full border-2 border-brand-cyan/50 object-cover shadow-[0_4px_20px_rgba(81,251,239,0.3)]"
            />
          </div>

          {/* Decorative Star */}
          <svg
            className="absolute top-20 left-10 z-5 animate-[rotate_10s_linear_infinite]"
            width="60" height="60" viewBox="0 0 24 24"
            fill="var(--color-brand-cyan)" stroke="var(--color-brand-dark)" strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </main>

      {/* Services Section */}
      <section className="glass-section py-[60px] border-t border-brand-cyan/10" id="servicios">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-[28px] text-(--color-brand-light) tracking-wide">Nuestros Servicios</h2>
            <Link href="#contacto" className="text-(--color-brand-cyan) font-semibold hover:underline">Consultar</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/product/modelado-3d", img: "/img_exp/asísaleun.jpg", badge: "DISEÑO", badgeColor: "from-(--color-brand-cyan) to-[#39e8dd] text-(--color-brand-dark)", title: "Modelado y Diseño 3D", desc: "Desde USD $30" },
              { href: "/product/impresion-3d", img: "/img_exp/lemostramoslanuevaimpresoraderesina.jpg", badge: null, badgeColor: "", title: "Impresion 3D", desc: "FDM y Resina" },
              { href: "/product/pintura-3d", img: "/img_exp/bustodeadpool.jpg", badge: "PREMIUM", badgeColor: "from-brand-magenta to-[#cc00cc] text-white", title: "Pintura y Acabados", desc: "Acabado Profesional" },
              { href: "/product/maquetas", img: "/img_exp/réplicadecopalibertadores.jpg", badge: null, badgeColor: "", title: "Maquetas Arquitectonicas", desc: "A escala profesional" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block glass-purple rounded-2xl p-4 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_8px_30px_rgba(81,251,239,0.15)] hover:-translate-y-1 no-underline group"
              >
                <div className="relative h-[200px] bg-(--color-brand-section-bg) mb-4 overflow-hidden rounded-xl">
                  {item.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] px-3 py-1.5 font-bold bg-linear-to-br ${item.badgeColor} rounded-full font-display tracking-widest z-10`}>
                      {item.badge}
                    </span>
                  )}
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">{item.title}</h3>
                <p className="text-(--color-brand-cyan) text-sm font-semibold font-display">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="glass-section py-[60px] border-t border-brand-cyan/10" id="portafolio">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-[28px] text-(--color-brand-light) tracking-wide">Proyectos Destacados</h2>
            <a href="https://www.instagram.com/dimpura3d/" target="_blank" rel="noopener noreferrer"
              className="text-(--color-brand-cyan) font-semibold hover:underline">Ver mas en Instagram</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/img_exp/bustodecellperfecto.jpg", badge: "COLECCIONABLE", badgeColor: "from-(--color-brand-cyan) to-[#39e8dd] text-(--color-brand-dark)", title: "Coleccionables Pop", desc: "Marvel, DC, Anime" },
              { img: "/img_exp/cascogriffith.jpg", badge: null, badgeColor: "", title: "Maquetas de Edificios", desc: "Acabados Realistas" },
              { img: "/img_exp/estatuilladiscóbolodemirón.jpg", badge: "CUSTOM", badgeColor: "from-brand-magenta to-[#cc00cc] text-white", title: "Esculturas Clásicas", desc: "Réplicas históricas" },
              { img: "/img_exp/figuraalbedo.jpg", badge: null, badgeColor: "", title: "Figuras de Anime", desc: "Alto detalle" },
            ].map((item, i) => (
              <div key={i} className="glass-purple rounded-2xl p-4 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_8px_30px_rgba(81,251,239,0.15)] hover:-translate-y-1 group">
                <div className="relative h-[200px] bg-(--color-brand-section-bg) mb-4 overflow-hidden rounded-xl">
                  {item.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] px-3 py-1.5 font-bold bg-linear-to-br ${item.badgeColor} rounded-full font-display tracking-widest z-10`}>
                      {item.badge}
                    </span>
                  )}
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">{item.title}</h3>
                <p className="text-(--color-brand-cyan) text-sm font-semibold font-display">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="glass-section py-[60px] border-t border-brand-cyan/10" id="proceso">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-[28px] text-(--color-brand-light) tracking-wide">Como Trabajamos</h2>
            <Link href="#contacto" className="text-(--color-brand-cyan) font-semibold hover:underline">Iniciar Proyecto</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", color: "text-(--color-brand-cyan)", bg: "bg-brand-cyan/10", title: "Consulta Inicial", desc: "Nos cuentas tu idea" },
              { num: "02", color: "text-brand-magenta", bg: "bg-brand-magenta/10", title: "Diseño y Modelado", desc: "Creamos el archivo 3D" },
              { num: "03", color: "text-(--color-brand-cyan)", bg: "bg-brand-cyan/10", title: "Impresion 3D", desc: "Materializamos la pieza" },
              { num: "04", color: "text-brand-magenta", bg: "bg-brand-magenta/10", title: "Pintura y Entrega", desc: "Acabado profesional" },
            ].map((step) => (
              <div key={step.num} className="glass-purple rounded-2xl p-4">
                <div className={`relative h-[200px] mb-4 overflow-hidden rounded-xl flex items-center justify-center ${step.bg}`}>
                  <span className={`text-[48px] font-display ${step.color} font-bold neon-text-cyan`}>{step.num}</span>
                </div>
                <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">{step.title}</h3>
                <p className="text-(--color-brand-cyan) text-sm font-semibold font-display">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="glass-section py-[60px] border-t border-brand-cyan/10" id="contacto">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-display text-[28px] text-(--color-brand-light) tracking-wide">Contactanos</h2>
            <span className="text-(--color-brand-cyan) font-semibold">Respondemos en 24hs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="https://wa.me/59891037258" target="_blank" rel="noopener noreferrer"
              className="block glass-purple rounded-2xl p-8 text-center transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_8px_30px_rgba(81,251,239,0.15)] hover:-translate-y-1 no-underline group">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--color-brand-cyan)" className="mb-4 mx-auto">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">WhatsApp</h3>
              <p className="text-(--color-brand-muted) text-sm">+598 91 037 258</p>
            </a>

            <a href="mailto:dimpura3d@gmail.com"
              className="block glass-purple rounded-2xl p-8 text-center transition-all duration-300 hover:border-brand-magenta/30 hover:shadow-[0_8px_30px_rgba(255,0,255,0.15)] hover:-translate-y-1 no-underline group">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff00ff" strokeWidth="2" className="mb-4 mx-auto">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">Email</h3>
              <p className="text-(--color-brand-muted) text-sm">dimpura3d@gmail.com</p>
            </a>

            <a href="https://www.instagram.com/dimpura3d/" target="_blank" rel="noopener noreferrer"
              className="block glass-purple rounded-2xl p-8 text-center transition-all duration-300 hover:border-brand-cyan/30 hover:shadow-[0_8px_30px_rgba(81,251,239,0.1)] hover:-translate-y-1 no-underline group">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--color-brand-cyan)" className="mb-4 mx-auto">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">Instagram</h3>
              <p className="text-(--color-brand-muted) text-sm">@dimpura3d</p>
            </a>

            <div className="glass-purple rounded-2xl p-8 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-cyan)" strokeWidth="2" className="mb-4 mx-auto">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <h3 className="font-semibold mb-2 text-(--color-brand-light) text-base">Taller</h3>
              <p className="text-(--color-brand-muted) text-sm">Ignacio Medina 3257, Montevideo</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
