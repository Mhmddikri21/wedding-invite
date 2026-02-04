'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MailOpen } from 'lucide-react'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

export function OpeningModal() {
    const [isOpen, setIsOpen] = useState(false)

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -1000 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 text-center"
                >
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />

                    {/* Content */}
                    <div className="relative z-10 max-w-md w-full">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="font-sans text-lg text-text-secondary tracking-widest uppercase mb-6">
                                The Wedding Of
                            </h3>

                            <div className="mb-8">
                                <h1 className="font-script text-5xl md:text-6xl text-peachy-dark mb-2">
                                    {COUPLE.bride.shortName}
                                </h1>
                                <span className="font-serif text-4xl text-pennies italic">&</span>
                                <h1 className="font-script text-5xl md:text-6xl text-peachy-dark mt-2">
                                    {COUPLE.groom.shortName}
                                </h1>
                            </div>

                            <div className="flex items-center justify-center gap-4 mb-12">
                                <div className="h-[1px] w-12 bg-text-muted" />
                                <p className="font-serif text-xl text-text-primary italic">
                                    {formatDate(WEDDING_DATE)}
                                </p>
                                <div className="h-[1px] w-12 bg-text-muted" />
                            </div>

                            <div className="bg-endless/30 p-6 rounded-2xl mb-8 backdrop-blur-sm border border-endless-dark/20">
                                <p className="font-sans text-sm text-text-muted mb-2">Kepada Yth.</p>
                                <h4 className="font-heading text-xl font-bold text-text-primary mb-1">
                                    Bapak/Ibu/Saudara/i
                                </h4>
                                <p className="font-sans text-xs text-text-secondary">
                                    (Mohon maaf apabila ada kesalahan penulisan nama)
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setIsOpen(true)
                                    // Dispatch event to start music
                                    document.dispatchEvent(new Event('start-music'))
                                }}
                                className="group relative px-8 py-4 bg-peachy text-white font-sans font-medium rounded-full shadow-soft-lg hover:bg-peachy-dark hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                            >
                                <MailOpen size={20} className="group-hover:animate-bounce" />
                                <span>Buka Undangan</span>
                                <div className="absolute inset-0 rounded-full ring-2 ring-white/30 animate-ping group-hover:animate-none" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
