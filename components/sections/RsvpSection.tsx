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
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RsvpInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { attending: true, guestCount: 1 }
  })

  const attending = watch('attending')

  const onSubmit = async (data: RsvpInput) => {
    setIsSubmitting(true)
    setServerError('')

    try {
      const params = new URLSearchParams(window.location.search)
      const guestId = params.get('to')?.trim() || undefined

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, guestId }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'RSVP gagal disimpan')
      }

      setIsSuccess(true)
    } catch (error) {
      setServerError(error instanceof Error ? error.message : 'RSVP gagal disimpan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Section id="rsvp" bgVariant="apricot">
        <Container maxWidth="sm">
          <Card variant="glass" className="py-16 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/20">
              <Check className="h-10 w-10 text-success" />
            </motion.div>
            <h3 className="mb-4 font-heading text-3xl text-peachy-dark">Terima Kasih!</h3>
            <p className="mb-8 font-sans text-text-secondary">
              Konfirmasi kehadiran Anda telah tersimpan.<br />
              Sampai jumpa di hari bahagia kami!
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">Kirim Konfirmasi Lain</Button>
          </Card>
        </Container>
      </Section>
    )
  }

  return (
    <Section id="rsvp" bgVariant="apricot">
      <Container maxWidth="md">
        <div className="mb-12 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="mb-4 font-script text-5xl text-peachy-dark md:text-6xl">RSVP</motion.h2>
          <p className="font-sans text-text-secondary">Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card variant="solid" className="p-8 shadow-soft-lg md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Nama Lengkap" placeholder="Masukkan nama Anda" error={errors.name?.message} {...register('name')} />
                <Input type="number" label="Jumlah Tamu" min={1} max={10} disabled={!attending}
                  error={errors.guestCount?.message} {...register('guestCount', { valueAsNumber: true })} />
              </div>

              <div className="space-y-3">
                <label className="block font-sans text-sm font-medium text-text-primary">Konfirmasi Kehadiran</label>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setValue('attending', true, { shouldValidate: true })}
                    className={`flex-1 rounded-xl border-2 px-6 py-4 transition-all ${attending ? 'border-peachy bg-peachy/10 text-peachy-dark' : 'border-pennies/30 text-text-muted hover:border-peachy/50'}`}>
                    <Check className="mx-auto mb-1" size={20} />Hadir
                  </button>
                  <button type="button" onClick={() => setValue('attending', false, { shouldValidate: true })}
                    className={`flex-1 rounded-xl border-2 px-6 py-4 transition-all ${!attending ? 'border-error bg-error/10 text-error' : 'border-pennies/30 text-text-muted hover:border-error/50'}`}>
                    <X className="mx-auto mb-1" size={20} />Tidak Hadir
                  </button>
                </div>
              </div>

              <Textarea label="Pesan / Doa (Opsional)" placeholder="Tuliskan pesan atau doa untuk kami..."
                error={errors.message?.message} {...register('message')} />

              {serverError && (
                <p role="alert" className="rounded-xl bg-error/10 px-4 py-3 text-sm text-error">{serverError}</p>
              )}

              <Button type="submit" variant="primary" size="lg" className="mt-8 w-full" loading={isSubmitting}>
                {isSubmitting ? 'Menyimpan...' : 'Kirim Konfirmasi'}
              </Button>
            </form>
          </Card>
        </motion.div>
      </Container>
    </Section>
  )
}
