'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Lock } from 'lucide-react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        // Simulate login delay
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                // "Login" successful - strictly simulation
                localStorage.setItem('isAdmin', 'true')
                router.push('/admin/dashboard')
            } else {
                setError('Username atau password salah')
                setLoading(false)
            }
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-apricot/30 flex items-center justify-center p-4">
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Card variant="white" className="p-8 shadow-soft-lg">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-peachy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lock className="text-peachy w-8 h-8" />
                            </div>
                            <h1 className="font-heading text-2xl font-bold text-text-primary">Admin Login</h1>
                            <p className="text-text-secondary font-sans">Masuk untuk mengelola undangan</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <Input
                                label="Username"
                                placeholder="Masukkan username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={error}
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                                loading={loading}
                            >
                                Masuk Dashboard
                            </Button>
                        </form>

                        <p className="mt-8 text-center text-xs text-text-muted">
                            Hint: admin / admin123
                        </p>
                    </Card>
                </motion.div>
            </Container>
        </div>
    )
}
