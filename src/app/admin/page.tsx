import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { createClient } from "@/lib/server";

export default async function AdminDashboard() {
  const supabase = await createClient();
  
  // Real stats could be fetched here
  const { count: productCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
  const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });

  const stats = [
    { label: "Productos", value: productCount || 0, icon: Package, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Usuarios", value: userCount || 0, icon: Users, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Ventas", value: "0", icon: ShoppingCart, color: "text-purple-400", bg: "bg-purple-400/10" },
    { label: "Crecimiento", value: "+0%", icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-400/10" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Dashboard</h2>
        <p className="text-slate-400 mt-2">Bienvenido al panel central de Dimpura3D.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 hover:shadow-neon-sm hover:border-primary/30 transition-all duration-300 backdrop-blur-xl group">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-display font-bold text-white mt-2 group-hover:text-primary transition-colors">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} shadow-lg shadow-black/20`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
         <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full shadow-neon-sm" />
              Actividad Reciente
            </h3>
            <div className="flex flex-col items-center justify-center h-48 border border-white/5 bg-white/5 rounded-xl border-dashed">
              <TrendingUp size={32} className="text-slate-800 mb-4" />
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Sin datos de tráfico</p>
              <p className="text-[10px] text-slate-600 mt-1">Conecta Google Analytics para ver estadísticas.</p>
            </div>
         </div>
         <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full shadow-neon-magenta" />
              Alertas del Sistema
            </h3>
            <div className="space-y-4">
               {[
                 { title: "Stock Crítico", desc: "El busto de Cell Pro está agotado.", type: "error" },
                 { title: "Pendiente Envío", desc: "3 pedidos de Montevideo sin procesar.", type: "warning" }
               ].map((alert, i) => (
                 <div key={i} className={`flex gap-4 p-4 rounded-xl ${alert.type === 'error' ? 'bg-red-500/5 border-red-500/20' : 'bg-orange-400/5 border-orange-400/20'} border`}>
                   <div className={`w-2 h-2 rounded-full ${alert.type === 'error' ? 'bg-red-500 animate-pulse' : 'bg-orange-400'} mt-1.5`} />
                   <div>
                     <p className={`text-sm font-bold ${alert.type === 'error' ? 'text-red-500' : 'text-orange-400'} uppercase tracking-tight`}>{alert.title}</p>
                     <p className="text-xs text-slate-400 mt-0.5">{alert.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
