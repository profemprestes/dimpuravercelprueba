'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()
    const supabase = createClient()

    const redirectUrl = searchParams.get('redirect') || '/dashboard'

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setErrorMsg('')

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setErrorMsg('Error: ' + error.message)
            setLoading(false)
        } else {
            router.push(redirectUrl)
            router.refresh()
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
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
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="block text-sm font-medium text-primary uppercase tracking-widest">Contraseña</label>
                        <Link href="/auth/forgot-password" className="text-xs text-slate-400 hover:text-white transition-colors">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {errorMsg && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded text-sm">
                    {errorMsg}
                </div>
            )}

            <div>
                <Button type="submit" className="w-full bg-primary text-background-dark font-display font-bold uppercase tracking-widest py-6 hover:shadow-neon transition-all" disabled={loading}>
                    {loading ? 'Ingresando...' : 'Ingresar'}
                </Button>
            </div>

            <div className="text-center mt-4">
                <Link href={`/signup${redirectUrl ? `?redirect=${redirectUrl}` : ''}`} className="text-sm text-slate-400 hover:text-white transition-colors">¿No tienes cuenta? Regístrate aquí</Link>
            </div>
        </form>
    )
}

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-background-dark">
            <div className="w-full max-w-md space-y-8 bg-surface-dark p-8 rounded-xl border border-white/10 shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-display font-bold tracking-widest uppercase text-white">
                        Iniciar Sesión
                    </h2>
                </div>
                <Suspense fallback={<div className="text-center text-slate-400 py-8">Cargando...</div>}>
                    <LoginForm />
                </Suspense>
            </div>
        </div>
    )
}