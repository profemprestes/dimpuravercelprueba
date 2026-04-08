import Link from "next/link";
import { Instagram, Facebook, MessageSquare } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-black/60 pt-20 pb-10 px-6 mt-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Col 1: Brand */}
                <div className="space-y-6">
                    <Link href="/" className="inline-block group">
                        <span className="font-orbitron text-2xl font-bold tracking-widest text-primary neon-text-cyan transition-transform duration-500 group-hover:scale-105">
                            DIMPURA<span className="text-white">3D</span>
                        </span>
                    </Link>
                    <p className="font-space-grotesk text-slate-400 text-sm leading-relaxed max-w-[280px]">
                        Del archivo digital a la realidad tangible. Especialistas en impresión 3D de alta precisión y acabados artesanales.
                    </p>
                </div>

                {/* Col 2: Quick Links */}
                <div>
                    <h4 className="font-orbitron font-bold tracking-widest text-primary text-xs uppercase mb-8 glow-cyan">Enlaces Rápidos</h4>
                    <ul className="space-y-4">
                        <li><Link href="/#historia" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Nuestra Historia</Link></li>
                        <li><Link href="/catalog" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Catálogo 3D</Link></li>
                        <li><Link href="/contact" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Contacto</Link></li>
                    </ul>
                </div>

                {/* Col 3: Services */}
                <div>
                    <h4 className="font-orbitron font-bold tracking-widest text-primary text-xs uppercase mb-8 glow-cyan">Servicios</h4>
                    <ul className="space-y-4">
                        <li><Link href="/#servicios" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Impresión FDM/Resina</Link></li>
                        <li><Link href="/#servicios" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Pintura Artesanal</Link></li>
                        <li><Link href="/#servicios" className="text-slate-500 hover:text-primary transition-all text-sm font-space-grotesk uppercase tracking-wider">Prototipado</Link></li>
                    </ul>
                </div>

                {/* Col 4: Contact */}
                <div>
                    <h4 className="font-orbitron font-bold tracking-widest text-primary text-xs uppercase mb-8 glow-cyan">Contactanos</h4>
                    <ul className="space-y-4 text-sm font-space-grotesk text-slate-500">
                        <li className="flex items-center gap-3">
                            <span className="text-primary/60">Email:</span>
                            <a href="mailto:hola@dimpura3d.com" className="hover:text-primary transition-colors">hola@dimpura3d.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-primary/60">WhatsApp:</span>
                            <a href="tel:+59890000000" className="hover:text-primary transition-colors">+598 900 000 000</a>
                        </li>
                        <li className="mt-6 flex items-center gap-6">
                            <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-primary hover:shadow-neon transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-secondary hover:shadow-neon-magenta transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-accent hover:shadow-neon-green transition-all">
                                <MessageSquare size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <span className="text-slate-600 font-space-grotesk text-[10px] uppercase tracking-[0.2em]">© 2024 DIMPURA3D. MONTEVIDEO, URUGUAY.</span>
                <div className="flex items-center gap-8">
                    <Link href="/terms" className="text-slate-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Términos</Link>
                    <Link href="/privacy" className="text-slate-600 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacidad</Link>
                </div>
            </div>
        </footer>
    );
}

