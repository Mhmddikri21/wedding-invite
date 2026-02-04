'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function GiftSection() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const accounts = [
        {
            bank: 'BCA',
            number: '1234567890',
            name: 'Sarah Amanda Putri',
            logo: 'Bank Central Asia'
        },
        {
            bank: 'Mandiri',
            number: '0987654321',
            name: 'Michael Budi Santoso',
            logo: 'Bank Mandiri'
        }
    ]

    const address = "Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190"

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <Section id="gift" bgVariant="endless">
            <Container maxWidth="md">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-script text-5xl md:text-6xl text-peachy-dark mb-4"
                    >
                        Wedding Gift
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-text-secondary leading-relaxed"
                    >
                        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                        Namun jika memberi adalah ungkapan tanda kasih Anda, kami dengan senang hati menerimanya.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {accounts.map((acc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                            <Card variant="glass" className="h-full flex flex-col items-center text-center p-6 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-peach opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />

                                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">{acc.bank}</h3>
                                <p className="font-sans text-sm text-text-muted mb-4">{acc.name}</p>

                                <div className="mt-auto w-full">
                                    <div className="bg-white/50 rounded-xl p-4 mb-4 border border-pennies/20">
                                        <p className="font-mono text-lg font-bold text-peachy-dark tracking-wider">{acc.number}</p>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleCopy(acc.number, idx)}
                                        className="w-full gap-2"
                                    >
                                        {copiedIndex === idx ? (
                                            <>
                                                <Check size={16} />
                                                Disalin
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={16} />
                                                Salin No. Rekening
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Card variant="colored" className="text-center p-8">
                        <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">Kirim Kado Fisik</h3>
                        <p className="font-serif text-lg text-text-secondary mb-2">Alamat Penerima:</p>
                        <p className="font-sans text-text-primary font-medium mb-6">{address}</p>
                        <Button
                            variant="secondary"
                            onClick={() => handleCopy(address, 3)}
                            className="gap-2"
                        >
                            {copiedIndex === 3 ? (
                                <>
                                    <Check size={18} />
                                    Alamat Disalin
                                </>
                            ) : (
                                <>
                                    <Copy size={18} />
                                    Salin Alamat
                                </>
                            )}
                        </Button>
                    </Card>
                </motion.div>

            </Container>
        </Section>
    )
}
