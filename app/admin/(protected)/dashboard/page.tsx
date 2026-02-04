'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Users, UserCheck, MessageCircleHeart, Clock } from 'lucide-react'

// Dummy Stats
const stats = [
    {
        label: 'Total Tamu',
        value: '142',
        desc: 'Orang terdaftar',
        icon: Users,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        label: 'Akan Hadir',
        value: '118',
        desc: 'Konfirmasi hadir',
        icon: UserCheck,
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        label: 'Ucapan Masuk',
        value: '45',
        desc: 'Doa & harapan',
        icon: MessageCircleHeart,
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    },
    {
        label: 'Menunggu',
        value: '12',
        desc: 'Belum konfirmasi',
        icon: Clock,
        color: 'text-orange-500',
        bg: 'bg-orange-50'
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="font-heading text-3xl font-bold text-text-primary">Dashboard Overview</h2>
                <p className="text-text-secondary">Ringkasan aktivitas website undangan Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className="font-heading text-3xl font-bold text-text-primary">
                                    {stat.value}
                                </span>
                            </div>
                            <h3 className="font-sans font-medium text-text-primary">{stat.label}</h3>
                            <p className="text-xs text-text-muted mt-1">{stat.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card variant="white" className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-6">RSVP Terbaru</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-peachy/20 rounded-full flex items-center justify-center text-peachy-dark font-bold font-heading">
                                        AD
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-text-primary">Aditya Pratama</h4>
                                        <p className="text-xs text-text-muted">2 Menit yang lalu</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-success/10 text-success text-xs rounded-full font-medium">
                                    Hadir
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card variant="white" className="p-6">
                    <h3 className="font-heading text-xl font-bold mb-6">Ucapan Terbaru</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 bg-gray-50 rounded-lg border-l-4 border-peachy">
                                <p className="text-sm text-text-secondary italic mb-2">
                                    &quot;Selamat menempuh hidup baru, semoga selamanya bahagia!&quot;
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-text-primary">- Rina & Dodi</span>
                                    <span className="text-[10px] text-text-muted">5 Menit lalu</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
