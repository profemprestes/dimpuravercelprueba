'use client'

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductForm } from './ProductForm';

export function AddProductDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-slate-950 font-bold uppercase tracking-widest shadow-neon hover:shadow-neon-lg transition-all gap-2">
          <Plus size={20} />
          Nuevo Producto
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-slate-900 border-white/10 text-white shadow-2xl backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold uppercase tracking-widest">Añadir Producto</DialogTitle>
          <DialogDescription className="text-slate-400">
            Completa los detalles para añadir un nuevo producto al catálogo de Dimpura3D.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ProductForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
