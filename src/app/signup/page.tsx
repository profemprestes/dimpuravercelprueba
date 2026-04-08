'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const router = useRouter()
    const supabase = createClient()

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setErrorMsg('')

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                }
            }
        })

        if (error) {
            setErrorMsg(error.message)
            setLoading(false)
        } else {
            router.push('/dashboard')
            router.refresh()
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 px-4 bg-background-dark">
            <div className="w-full max-w-md space-y-8 bg-surface-dark p-8 rounded-xl border border-white/10 shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-display font-bold tracking-widest uppercase text-white">
                        Crear Cuenta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-primary uppercase tracking-widest mb-1">Nombre Completo</label>
                            <input
                                id="full-name"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
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
                            <label htmlFor="password" className="block text-sm font-medium text-primary uppercase tracking-widest mb-1">Contraseña</label>
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
                            {loading ? 'Creando cuenta...' : 'Registrarse'}
                        </Button>
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/login" className="text-sm text-slate-400 hover:text-white transition-colors">¿Ya tienes cuenta? Inicia sesión</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}