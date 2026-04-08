'use server'

import { createClient } from "@/lib/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const supabase = await createClient();

  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;
  const stock_quantity = parseInt(formData.get('stock') as string) || 0;
  const active = formData.get('active') === 'on';
  const sku = formData.get('sku') as string;

  const { error } = await supabase
    .from('products')
    .insert({
      name,
      description,
      category,
      stock_quantity,
      active,
      sku
    });

  if (error) {
    console.error("Error creating product:", error);
    return { error: error.message };
  }

  revalidatePath('/admin/productos');
  return { success: true };
}

export async function toggleProductStatus(id: string, currentStatus: boolean) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('products')
    .update({ active: !currentStatus })
    .eq('id', id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/admin/productos');
  return { success: true };
}

export async function deleteProduct(id: string) {
    const supabase = await createClient();
  
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
  
    if (error) {
      return { error: error.message };
    }
  
    revalidatePath('/admin/productos');
    return { success: true };
}
