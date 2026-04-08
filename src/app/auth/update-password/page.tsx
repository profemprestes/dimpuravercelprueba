'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const supabase = createClient()
  const router = useRouter()

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { error } = await supabase.auth.updateUser({
      password: password
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-background-dark">
      <div className="w-full max-w-md space-y-8 bg-surface-dark p-8 rounded-xl border border-white/10 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-display font-bold tracking-widest uppercase text-white">
            Actualizar Contraseña
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary uppercase tracking-widest mb-1">Nueva Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMsg && <p className="text-destructive text-sm bg-destructive/10 p-3 rounded">{errorMsg}</p>}

          <div>
            <Button type="submit" className="w-full bg-primary text-background-dark font-display font-bold uppercase tracking-widest py-6 hover:shadow-neon transition-all" disabled={loading}>
              {loading ? 'Actualizando...' : 'Actualizar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
