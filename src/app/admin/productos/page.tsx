import { createClient } from "@/lib/server";
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, ExternalLink, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AddProductDialog } from "@/components/admin/AddProductDialog";

export default async function AdminProductsPage() {
  const supabase = await createClient();

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold uppercase tracking-widest text-white">CMS de Productos</h1>
          <p className="text-slate-400 mt-2">Gestiona el catálogo de Dimpura3D, stock y precios.</p>
        </div>
        <AddProductDialog />
      </div>

      <div className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
        {/* Filters bar */}
        <div className="p-4 border-b border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full bg-slate-950 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="bg-transparent border-white/10 text-slate-400 gap-2 flex-1 md:flex-none">
              <Filter size={16} />
              Filtrar
            </Button>
            <span className="text-xs text-slate-500 ml-2 hidden md:inline">Mostrando {products?.length || 0} resultados</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Producto</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Categoría</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Stock</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-800 border border-white/10 overflow-hidden shrink-0">
                          {product.image_url ? (
                            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-600">
                              <Package size={20} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">{product.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5">SKU: {product.sku || 'N/A'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold text-slate-500">
                        {product.category || 'Sin categoría'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`font-bold ${product.stock_quantity && product.stock_quantity < 10 ? 'text-orange-400' : 'text-slate-300'}`}>
                        {product.stock_quantity ?? 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${product.active ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' : 'bg-slate-800 text-slate-500 border border-white/10'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${product.active ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-slate-600'}`} />
                        {product.active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/20 hover:text-primary">
                          <Edit2 size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-destructive/20 hover:text-destructive">
                          <Trash2 size={16} />
                        </Button>
                        <Link href={`/product/${product.id}`} target="_blank">
                          <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-white/10">
                            <ExternalLink size={16} />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-500 italic">
                    <div className="flex flex-col items-center gap-4">
                      <Package size={48} className="opacity-10" />
                      <p>No hay productos en el catálogo todavía.</p>
                      <Button variant="outline" className="text-xs uppercase tracking-widest border-white/10 mt-2">
                        Cargar Producto Inicial
                      </Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination bar dummy */}
        <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-slate-500">Página 1 de 1</p>
          <div className="flex gap-2">
            <Button disabled size="sm" variant="outline" className="bg-transparent border-white/5 text-slate-600">Anterior</Button>
            <Button disabled size="sm" variant="outline" className="bg-transparent border-white/5 text-slate-600">Siguiente</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
