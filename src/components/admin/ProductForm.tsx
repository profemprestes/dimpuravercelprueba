'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createProduct } from '@/app/admin/productos/actions';
import { Loader2 } from 'lucide-react';

export function ProductForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await createProduct(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      if (onSuccess) onSuccess();
      // Reset form or redirect
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nombre del Producto</label>
          <input 
            name="name" 
            required 
            placeholder="Ej: Impresión 3D Personalizada" 
            className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-all shadow-inner"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">SKU / Modelo</label>
          <input 
            name="sku" 
            placeholder="DP-3D-001" 
            className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Descripción</label>
        <textarea 
          name="description" 
          rows={4} 
          placeholder="Describe las especificaciones técnicas..." 
          className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-all resize-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Categoría</label>
          <select name="category" className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-all">
            <option value="Coleccionables">Coleccionables</option>
            <option value="Maquetas">Maquetas</option>
            <option value="Regalos">Regalos</option>
            <option value="Técnico">Técnico</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Stock Inicial</label>
          <input 
            type="number" 
            name="stock" 
            defaultValue={0} 
            className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-all"
          />
        </div>
        <div className="flex items-end pb-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
               <input type="checkbox" name="active" className="sr-only peer" defaultChecked />
               <div className="w-10 h-5 bg-slate-800 rounded-full peer peer-checked:bg-primary/40 transition-all border border-white/5"></div>
               <div className="absolute left-1 top-1 w-3 h-3 bg-slate-400 rounded-full peer-checked:left-6 peer-checked:bg-primary transition-all shadow-neon-sm"></div>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">Estado Activo</span>
          </label>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-4 pt-4 border-t border-white/5">
        <Button 
          type="submit" 
          disabled={loading}
          className="bg-primary text-slate-950 font-bold uppercase tracking-widest px-8 py-6 shadow-neon hover:shadow-neon-lg transition-all"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} />
              Guardando...
            </span>
          ) : 'Crear Producto'}
        </Button>
      </div>
    </form>
  );
}
