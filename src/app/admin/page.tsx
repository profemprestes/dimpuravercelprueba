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
          <div key={stat.label} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:shadow-neon-sm transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
         <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Actividad Reciente</h3>
            <div className="flex items-center justify-center h-48 border border-white/5 bg-white/5 rounded-xl border-dashed">
              <p className="text-slate-500 text-sm">No hay actividad reciente para mostrar</p>
            </div>
         </div>
         <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Alertas del Sistema</h3>
            <div className="space-y-4">
               {[1, 2].map((i) => (
                 <div key={i} className="flex gap-4 p-4 rounded-xl bg-orange-400/5 border border-orange-400/20">
                   <div className="w-2 h-2 rounded-full bg-orange-400 mt-1.5" />
                   <div>
                     <p className="text-sm font-bold text-orange-400 uppercase tracking-tighter">Stock Bajo</p>
                     <p className="text-xs text-slate-400 mt-0.5">Varios productos están por debajo del límite mínimo.</p>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
