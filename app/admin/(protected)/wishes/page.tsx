'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Trash2, Heart, Check, X } from 'lucide-react'

interface WishData {
    id: string
    name: string
    message: string
    isVisible: boolean
    createdAt: string
}

export default function WishesPage() {
    const [wishes, setWishes] = useState<WishData[]>([])

    useEffect(() => {
        const mockWishes: WishData[] = Array.from({ length: 8 }).map((_, i) => ({
            id: `wish-${i}`,
            name: `Pengirim Ucapan ${i + 1}`,
            message: `Selamat menempuh hidup baru! Semoga menjadi keluarga yang Sakinah, Mawaddah, Warahmah. Bahagia selalu ya! (${i + 1})`,
            isVisible: true,
            createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 5).toISOString()
        }))
        setWishes(mockWishes)
    }, [])

    const toggleVisibility = (id: string) => {
        setWishes(wishes.map(w => w.id === id ? { ...w, isVisible: !w.isVisible } : w))
    }

    const handleDelete = (id: string) => {
        if (confirm('Hapus ucapan ini?')) {
            setWishes(wishes.filter(w => w.id !== id))
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="font-heading text-3xl font-bold text-text-primary">Ucapan & Doa</h2>
                <p className="text-text-secondary">Moderasi ucapan dari para tamu.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                    {wishes.map((wish) => (
                        <motion.div
                            key={wish.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <Card variant="white" className={`p-6 relative overflow-hidden transition-all ${!wish.isVisible ? 'opacity-60 bg-gray-50' : ''}`}>
                                {!wish.isVisible && (
                                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-gray-200 text-gray-500 text-[10px] rounded uppercase font-bold tracking-wider">
                                        Hidden
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-peachy/10 rounded-full flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-peachy fill-current" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-primary">{wish.name}</h4>
                                            <span className="text-xs text-text-muted">
                                                {new Date(wish.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => toggleVisibility(wish.id)}
                                            className={`p-2 rounded-full transition-colors ${wish.isVisible
                                                ? 'bg-success/10 text-success hover:bg-success/20'
                                                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                                                }`}
                                            title={wish.isVisible ? "Sembunyikan" : "Tampilkan"}
                                        >
                                            {wish.isVisible ? <Check size={16} /> : <X size={16} />}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(wish.id)}
                                            className="p-2 rounded-full bg-error/10 text-error hover:bg-error/20 transition-colors"
                                            title="Hapus"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className="pl-13">
                                    <p className="text-text-secondary font-serif italic leading-relaxed">
                                        &quot;{wish.message}&quot;
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}
