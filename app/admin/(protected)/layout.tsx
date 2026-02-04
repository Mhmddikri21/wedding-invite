'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    LayoutDashboard,
    Users,
    MessageCircleHeart,
    LogOut,
    Menu,
    X
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [mounted, setMounted] = useState(false)

    // Client-side auth check
    useEffect(() => {
        setMounted(true)
        const isAdmin = localStorage.getItem('isAdmin')
        if (!isAdmin) {
            router.push('/admin/login')
        }
    }, [router])

    if (!mounted) return null

    const navigation = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'RSVP Data', href: '/admin/rsvp', icon: Users },
        { name: 'Ucapan & Doa', href: '/admin/wishes', icon: MessageCircleHeart },
    ]

    const handleLogout = () => {
        localStorage.removeItem('isAdmin')
        router.push('/admin/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                    }`}
            >
                <div className="h-full flex flex-col">
                    <div className="p-6 border-b border-gray-100">
                        <h1 className="font-heading text-2xl font-bold text-peachy-dark">
                            Admin Panel
                        </h1>
                        <p className="text-xs text-text-muted font-sans mt-1">Wedding of Sarah & Michael</p>
                    </div>

                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                            ? 'bg-peachy/10 text-peachy-dark font-medium'
                                            : 'text-text-secondary hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="p-4 border-t border-gray-100">
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-3 border-error/20 text-error hover:bg-error/5 hover:text-error"
                            onClick={handleLogout}
                        >
                            <LogOut size={20} />
                            Logout
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Header (Mobile) */}
                <header className="lg:hidden bg-white border-b border-gray-200 p-4 flex items-center gap-4">
                    <button onClick={() => setIsSidebarOpen(true)}>
                        <Menu className="text-text-primary" />
                    </button>
                    <span className="font-heading font-bold text-lg text-text-primary">Menu</span>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
