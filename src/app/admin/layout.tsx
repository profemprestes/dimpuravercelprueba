import { requireAdmin } from "@/lib/auth";
import Link from "next/link";
import "@/src/styles/globals.css";
import {
  Package,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Strict admin check
  await requireAdmin();

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-slate-900/50 backdrop-blur-xl">
        <div className="p-6 border-bottom border-white/5">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-display font-bold uppercase tracking-widest text-xl group-hover:text-primary transition-colors">Dimpura<span className="text-primary">3D</span></span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-primary border border-primary/20 shadow-neon-sm">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/productos" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all">
            <Package size={20} />
            <span className="font-medium">Productos</span>
          </Link>
          <Link href="/admin/usuarios" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all">
            <Users size={20} />
            <span className="font-medium">Usuarios</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link href="/admin/configuracion" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-all mb-4">
            <Settings size={20} />
            <span className="font-medium">Configuración</span>
          </Link>
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive">
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-white/10 bg-slate-900/50 backdrop-blur-xl flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
            <span className="font-display font-bold uppercase tracking-widest">Admin</span>
          </div>

          <div className="hidden md:block">
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-widest">Panel de Administración</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-primary uppercase tracking-tighter">Administrador</span>
              <span className="text-[10px] text-slate-500">Sesión Activa</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
              <Users size={16} className="text-slate-400" />
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {children}
        </section>
      </main>
    </div>
  );
}
