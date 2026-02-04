'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { rsvpSchema, type RsvpInput } from '@/validations/rsvp'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Check, X } from 'lucide-react'

export function RsvpSection() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm<RsvpInput>({
        resolver: zodResolver(rsvpSchema),
        defaultValues: {
            attending: true,
            guestCount: 1
        }
    })

    const attending = watch('attending')

    const onSubmit = async (data: RsvpInput) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log(data)
        setIsSuccess(true)
        setIsSubmitting(false)
    }

    if (isSuccess) {
        return (
            <Section id="rsvp" bgVariant="apricot">
                <Container maxWidth="sm">
                    <Card variant="glass" className="text-center py-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <Check className="w-10 h-10 text-success" />
                        </motion.div>
                        <h3 className="font-heading text-3xl text-peachy-dark mb-4">Terima Kasih!</h3>
                        <p className="font-sans text-text-secondary mb-8">
                            Konfirmasi kehadiran Anda telah kami terima. <br />
                            Sampai jumpa di hari bahagia kami!
                        </p>
                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                            Kirim Konfirmasi Lain
                        </Button>
                    </Card>
                </Container>
            </Section>
        )
    }

    return (
        <Section id="rsvp" bgVariant="apricot">
            <Container maxWidth="md">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-script text-5xl md:text-6xl text-peachy-dark mb-4"
                    >
                        RSVP
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-sans text-text-secondary"
                    >
                        Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara dengan lebih baik.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Card variant="solid" className="p-8 md:p-12 shadow-soft-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <Input
                                    label="Nama Lengkap"
                                    placeholder="Masukkan nama Anda"
                                    error={errors.name?.message}
                                    {...register('name')}
                                />

                                <Input
                                    type="number"
                                    label="Jumlah Tamu"
                                    min={1}
                                    max={10}
                                    error={errors.guestCount?.message}
                                    {...register('guestCount', { valueAsNumber: true })}
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="block font-sans text-sm font-medium text-text-primary">
                                    Konfirmasi Kehadiran
                                </label>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setValue('attending', true)}
                                        className={`flex-1 py-4 px-6 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${attending
                                            ? 'border-peachy bg-peachy/10 text-peachy-dark'
                                            : 'border-pennies/30 text-text-muted hover:border-peachy/50'
                                            }`}
                                    >
                                        <Check size={20} />
                                        Hadir
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setValue('attending', false)}
                                        className={`flex-1 py-4 px-6 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${!attending
                                            ? 'border-error bg-error/10 text-error'
                                            : 'border-pennies/30 text-text-muted hover:border-error/50'
                                            }`}
                                    >
                                        <X size={20} />
                                        Tidak Hadir
                                    </button>
                                </div>
                            </div>

                            <Textarea
                                label="Pesan / Doa (Opsional)"
                                placeholder="Tuliskan pesan atau doa untuk kami..."
                                error={errors.message?.message}
                                {...register('message')}
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full mt-8"
                                loading={isSubmitting}
                            >
                                Kirim Konfirmasi
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </Container>
        </Section>
    )
}
