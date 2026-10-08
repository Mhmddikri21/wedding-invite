'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Countdown } from '@/components/features/Countdown'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

export function HeroSection() {
  const scrollToNext = () => document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Section id="hero" bgVariant="gradient-sunset" className="min-h-[100svh] flex items-center justify-center wedding-grain">
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#b9c8c4]/25 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          className="relative z-10 mx-auto max-w-3xl text-center text-white"
        >
          <div className="mb-7 flex items-center justify-center gap-3 text-xs uppercase tracking-[.32em] text-white/75">
            <span className="h-px w-10 bg-white/40" />
            The Wedding Of
            <span className="h-px w-10 bg-white/40" />
          </div>

          <p className="font-serif text-lg italic text-white/85">
            Dengan memohon rahmat dan ridho Allah SWT
          </p>

          <motion.h1
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .2, duration: 1 }}
            className="mt-5 font-script text-6xl leading-none drop-shadow-sm sm:text-8xl md:text-9xl"
          >
            {COUPLE.bride.shortName}
            <span className="mx-3 font-serif text-3xl italic align-middle opacity-80 sm:text-5xl">&</span>
            {COUPLE.groom.shortName}
          </motion.h1>

          <div className="mx-auto my-7 h-px w-24 bg-white/50" />

          <p className="font-heading text-xl tracking-wide sm:text-2xl">{formatDate(WEDDING_DATE)}</p>

          <div className="my-10">
            <Countdown />
          </div>

          <button
            onClick={scrollToNext}
            className="group inline-flex flex-col items-center gap-2 text-white/70 transition hover:text-white"
            aria-label="Lihat undangan"
          >
            <span className="text-[10px] uppercase tracking-[.28em]">Scroll untuk melihat</span>
            <ChevronDown className="h-5 w-5 animate-bounce transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </Container>

      <Sparkles className="absolute bottom-10 left-8 h-4 w-4 text-white/50" />
      <Sparkles className="absolute right-10 top-24 h-5 w-5 text-white/40" />
    </Section>
  )
}
