"use client"

import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"

export default function ProfilePage() {
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

      {/* About Section */}
      <main className="py-[80px] min-h-[70vh]">
        <div className="max-w-[800px] mx-auto px-5 flex flex-col gap-6">
          <h1 className="font-display text-[32px] md:text-[42px] leading-none text-[var(--color-brand-light)] mb-10 tracking-tighter font-bold">
            SOBRE NOSOTROS
          </h1>

          {/* Header Card */}
          <div className="glass-purple rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[var(--color-brand-cyan)] to-[#ff00ff] flex items-center justify-center mb-5 text-[36px] font-display font-bold text-(--color-brand-dark)">
                D3D
              </div>
              <div className="text-center">
                <h2 className="font-display text-[28px] md:text-[36px] text-[var(--color-brand-light)] font-bold mb-2 tracking-wide">
                  DIMPURA 3D
                </h2>
                <p className="text-[var(--color-brand-cyan)] font-semibold neon-text-cyan text-center">
                  Estudio de Impresion 3D en Montevideo
                </p>
              </div>
            </div>

            <div className="flex justify-around w-full border-t border-[var(--color-brand-cyan)]/20 pt-8 mt-4 gap-4">
              <div className="text-center flex-1">
                <span className="block font-display text-[24px] text-[var(--color-brand-light)] font-bold mb-1">+500</span>
                <span className="text-[12px] text-[var(--color-brand-muted-dark)] font-bold tracking-wider uppercase">Proyectos</span>
              </div>
              <div className="text-center flex-1 border-l border-r border-[var(--color-brand-cyan)]/20">
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
          <div className="glass-purple rounded-2xl p-8">
            <h3 className="font-display text-[16px] text-[var(--color-brand-cyan)] mb-6 border-b border-[var(--color-brand-cyan)]/20 pb-4 tracking-widest neon-text-cyan">
              NUESTRA HISTORIA
            </h3>
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
          <div className="glass-purple rounded-2xl p-8">
            <h3 className="font-display text-[16px] text-[var(--color-brand-cyan)] mb-6 border-b border-[var(--color-brand-cyan)]/20 pb-4 tracking-widest neon-text-cyan">
              QUE HACEMOS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "MODELADO 3D", desc: "Diseño digital desde cero" },
                { title: "IMPRESION 3D", desc: "FDM y Resina de alta resolucion" },
                { title: "PINTURA", desc: "Acabados profesionales" },
                { title: "MAQUETAS", desc: "Arquitectura e ingenieria" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-5 bg-[var(--color-brand-cyan)]/5 rounded-xl border border-[var(--color-brand-cyan)]/15 hover:border-[var(--color-brand-cyan)]/30 transition-colors"
                >
                  <h4 className="text-[var(--color-brand-cyan)] mb-2 font-display text-[14px] neon-text-cyan">{service.title}</h4>
                  <p className="text-[var(--color-brand-muted)] text-[13px]">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="glass-purple rounded-2xl p-8">
            <h3 className="font-display text-[16px] text-[var(--color-brand-cyan)] mb-6 border-b border-[var(--color-brand-cyan)]/20 pb-4 tracking-widest neon-text-cyan">
              CONTACTO
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/59891037258"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                WHATSAPP: +598 91 037 258
              </a>
              <a
                href="mailto:dimpura3d@gmail.com"
                className="btn-secondary w-full text-center"
              >
                EMAIL: dimpura3d@gmail.com
              </a>
              <div className="p-4 bg-[var(--color-brand-cyan)]/5 rounded-lg border border-[var(--color-brand-cyan)]/15 text-center">
                <p className="text-[var(--color-brand-cyan)] font-display text-[12px] mb-2 tracking-widest font-bold">TALLER</p>
                <p className="text-[var(--color-brand-muted)]">Ignacio Medina 3257, Montevideo, Uruguay</p>
              </div>
            </div>
          </div>

          {/* Social Links — CRIT-01 FIX: clases fantasmas reemplazadas */}
          <div className="glass-purple rounded-2xl p-8">
            <h3 className="font-display text-[16px] text-[var(--color-brand-cyan)] mb-6 border-b border-[var(--color-brand-cyan)]/20 pb-4 tracking-widest neon-text-cyan">
              REDES SOCIALES
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/dimpura3d/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/25 backdrop-blur-md hover:shadow-[0_4px_20px_rgba(81,251,239,0.2)] hover:-translate-y-0.5"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.facebook.com/dimpura3d.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-6 py-4 font-display text-[13px] no-underline rounded-lg transition-all duration-300 tracking-wider font-semibold bg-[#ff00ff]/10 text-[#ff00ff] border border-[#ff00ff]/25 backdrop-blur-md hover:shadow-[0_4px_20px_rgba(255,0,255,0.2)] hover:-translate-y-0.5"
              >
                FACEBOOK
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CRIT-03 FIX: Footer canónico — reemplaza footer inline */}
      <Footer />
    </>
  )
}
