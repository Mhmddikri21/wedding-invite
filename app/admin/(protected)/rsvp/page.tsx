'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Search, Download, Trash2, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface RsvpData {
    id: string
    name: string
    email: string
    phone: string
    attending: boolean
    guestCount: number
    message: string
    createdAt: string
}

export default function RsvpPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [rsvps, setRsvps] = useState<RsvpData[]>([])

    // Generate mock data on client-side only to prevent hydration mismatch
    useEffect(() => {
        const mockData: RsvpData[] = Array.from({ length: 15 }).map((_, i) => ({
            id: `rsvp-${i}`,
            name: `Tamu Undangan ${i + 1}`,
            email: `tamu${i + 1}@example.com`,
            phone: `0812345678${i}`,
            attending: i % 3 !== 0,
            guestCount: i % 3 === 0 ? 0 : Math.floor(Math.random() * 2) + 1,
            message: i % 5 === 0 ? 'Selamat menikah, semoga bahagia selalu!' : '',
            createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7).toISOString()
        }))
        setRsvps(mockData)
    }, [])

    const filteredRsvps = rsvps.filter(rsvp =>
        rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rsvp.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleDelete = (id: string) => {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            setRsvps(rsvps.filter(r => r.id !== id))
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="font-heading text-3xl font-bold text-text-primary">Data RSVP</h2>
                    <p className="text-text-secondary">Kelola daftar kehadiran tamu undangan.</p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Download size={18} />
                    Export CSV
                </Button>
            </div>

            <Card variant="white" className="p-6">
                <div className="mb-6 max-w-md">
                    <Input
                        placeholder="Cari nama atau email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    // icon={<Search className="text-gray-400" />} // Assuming Input supports icon prop based on previous edits
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="p-4 font-sans font-bold text-text-primary">Nama Tamu</th>
                                <th className="p-4 font-sans font-bold text-text-primary">Status</th>
                                <th className="p-4 font-sans font-bold text-text-primary">Jumlah</th>
                                <th className="p-4 font-sans font-bold text-text-primary">Pesan</th>
                                <th className="p-4 font-sans font-bold text-text-primary">Terdaftar</th>
                                <th className="p-4 font-sans font-bold text-text-primary text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRsvps.map((rsvp) => (
                                <tr key={rsvp.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-medium text-text-primary">{rsvp.name}</div>
                                        <div className="text-xs text-text-muted">{rsvp.email}</div>
                                    </td>
                                    <td className="p-4">
                                        {rsvp.attending ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                                                <CheckCircle size={12} /> Hadir
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-error/10 text-error text-xs font-medium">
                                                <XCircle size={12} /> Tidak Hadir
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 text-text-secondary">{rsvp.guestCount} Orang</td>
                                    <td className="p-4 text-sm text-text-secondary max-w-xs truncate">
                                        {rsvp.message || '-'}
                                    </td>
                                    <td className="p-4 text-xs text-text-muted">
                                        {new Date(rsvp.createdAt).toLocaleDateString('id-ID')}
                                    </td>
                                    <td className="p-4 text-right">
                                        <button
                                            onClick={() => handleDelete(rsvp.id)}
                                            className="text-text-muted hover:text-error transition-colors p-2"
                                            title="Hapus"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredRsvps.length === 0 && (
                        <div className="text-center py-12 text-text-muted">
                            Tidak ada data ditemukan.
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
}
