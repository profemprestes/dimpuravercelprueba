'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const supabase = createClient()

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setMessage('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setMessage('Te hemos enviado un enlace para restablecer tu contraseña. Revisa tu bandeja de entrada.')
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-background-dark">
      <div className="w-full max-w-md space-y-8 bg-surface-dark p-8 rounded-xl border border-white/10 shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-display font-bold tracking-widest uppercase text-white">
            Recuperar Contraseña
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleReset}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-primary uppercase tracking-widest mb-1">Correo Electrónico</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {errorMsg && <p className="text-destructive text-sm bg-destructive/10 p-3 rounded">{errorMsg}</p>}
          {message && <p className="text-accent-green text-sm bg-accent-green/10 p-3 rounded">{message}</p>}

          <div>
            <Button type="submit" className="w-full bg-primary text-background-dark font-display font-bold uppercase tracking-widest py-6 hover:shadow-neon transition-all" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Enlace'}
            </Button>
          </div>
          <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-slate-400 hover:text-white transition-colors">Volver al inicio de sesión</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
