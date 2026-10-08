'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, MailOpen } from 'lucide-react'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

export function OpeningModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [guest, setGuest] = useState('Bapak/Ibu/Saudara/i')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('to')
    if (name?.trim()) setGuest(name.trim().replace(/\+/g, ' '))
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'unset' : 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#f8f3ed] px-5 text-center">
          <div className="absolute inset-0 wedding-grain opacity-60" />
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#e6cfc1]/50 blur-3xl" />
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#cbd9d5]/50 blur-3xl" />
          <div className="relative z-10 w-full max-w-md">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}
              className="rounded-[2rem] border border-white/80 bg-white/65 p-8 shadow-[0_25px_80px_rgba(91,75,65,.12)] backdrop-blur-xl sm:p-10">
              <Heart className="mx-auto mb-5 h-5 w-5 fill-[#d9b9a6] text-[#d9b9a6]" />
              <p className="font-sans text-[10px] uppercase tracking-[.35em] text-[#8b8179]">The Wedding Of</p>
              <h1 className="mt-5 font-script text-6xl leading-none text-[#8e6658] sm:text-7xl">
                {COUPLE.bride.shortName}<span className="mx-2 font-serif text-3xl italic text-[#b69a8c]">&</span>{COUPLE.groom.shortName}
              </h1>
              <div className="mx-auto my-6 h-px w-16 bg-[#d9b9a6]" />
              <p className="font-heading text-sm text-[#655e58]">{formatDate(WEDDING_DATE)}</p>
              <div className="my-8 rounded-2xl border border-[#e5d7ce] bg-white/55 px-5 py-4">
                <p className="font-sans text-[10px] uppercase tracking-[.22em] text-[#a0958c]">Kepada Yth.</p>
                <p className="mt-2 font-heading text-lg text-[#514b46]">{guest}</p>
                <p className="mt-1 font-serif text-sm italic text-[#91867d]">di tempat</p>
              </div>
              <button onClick={() => { setIsOpen(true); document.dispatchEvent(new Event('start-music')) }}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8e6658] px-6 py-4 font-sans text-sm font-medium text-white shadow-lg shadow-[#8e6658]/20 transition hover:-translate-y-0.5 hover:bg-[#765247]">
                <MailOpen className="h-4 w-4 transition-transform group-hover:-rotate-6" />Buka Undangan
              </button>
              <p className="mt-5 text-[10px] tracking-wide text-[#aaa097]">Mohon maaf apabila ada kesalahan penulisan nama.</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}