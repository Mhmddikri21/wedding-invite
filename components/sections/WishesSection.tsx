'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { wishSchema, type WishInput } from '@/validations/wish'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { MessageCircleHeart, User, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { id } from 'date-fns/locale'

// Dummy data for initial display
const initialWishes = [
    {
        id: '1',
        name: 'Budi & Keluarga',
        message: 'Selamat menempuh hidup baru Sarah & Michael! Semoga menjadi keluarga yang Sakinah, Mawaddah, Warahmah. Bahagia selalu!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    {
        id: '2',
        name: 'Siska Anggraini',
        message: 'Happy wedding! So happy for you two. Wishing you a lifetime of love and happiness together.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
    },
    {
        id: '3',
        name: 'Doni Pratama',
        message: 'Selamat ya bro Michael! Akhirnya sold out juga. Semoga lancar acaranya dan langgeng terus sampai kakek nenek.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
    }
]

export function WishesSection() {
    const [wishes, setWishes] = useState(initialWishes)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<WishInput>({
        resolver: zodResolver(wishSchema)
    })

    const onSubmit = async (data: WishInput) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Add new wish to list (temporary)
        const newWish = {
            id: Math.random().toString(),
            name: data.name,
            message: data.message,
            createdAt: new Date()
        }

        setWishes([newWish, ...wishes])
        reset()
        setIsSubmitting(false)
    }

    return (
        <Section id="wishes" bgVariant="white">
            <Container maxWidth="lg">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Form Side */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-script text-5xl md:text-6xl text-peachy-dark mb-4">
                                Wedding Wishes
                            </h2>
                            <p className="font-sans text-text-secondary mb-8">
                                Berikan ucapan dan doa terbaik Anda untuk kebahagiaan kami.
                            </p>

                            <Card variant="glass" className="p-8">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <Input
                                        label="Nama"
                                        placeholder="Nama Anda"
                                        icon={<User size={18} />}
                                        error={errors.name?.message}
                                        {...register('name')}
                                    />

                                    <Textarea
                                        label="Ucapan & Doa"
                                        placeholder="Tuliskan ucapan selamat..."
                                        rows={5}
                                        error={errors.message?.message}
                                        {...register('message')}
                                    />

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full gap-2"
                                        loading={isSubmitting}
                                    >
                                        <MessageCircleHeart size={20} />
                                        Kirim Ucapan
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>

                    {/* List Side */}
                    <div className="space-y-6 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-heading text-2xl text-text-primary">
                                {wishes.length} Ucapan
                            </h3>
                        </div>

                        {wishes.map((wish, idx) => (
                            <motion.div
                                key={wish.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card variant="solid" className="p-6 border-l-4 border-l-peachy">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-text-primary font-heading text-lg">
                                            {wish.name}
                                        </h4>
                                        <span className="text-xs text-text-muted flex items-center gap-1 font-sans">
                                            <Clock size={12} />
                                            {formatDistanceToNow(wish.createdAt, { addSuffix: true, locale: id })}
                                        </span>
                                    </div>
                                    <p className="text-text-secondary font-serif leading-relaxed text-lg italic">
                                        "{wish.message}"
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Container>
        </Section>
    )
}
