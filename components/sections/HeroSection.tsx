'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Countdown } from '@/components/features/Countdown'
import { COUPLE, WEDDING_DATE } from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('couple')
        nextSection?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Section id="hero" bgVariant="gradient-sunset" className="min-h-screen flex items-center justify-center">
            {/* Decorative blobs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-peachy/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-ceramic/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Opening text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="font-serif text-lg md:text-xl text-white/90 mb-6"
                    >
                        Dengan memohon rahmat dan ridho Allah SWT
                    </motion.p>

                    {/* Couple names */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-white mb-4">
                            {COUPLE.bride.shortName} & {COUPLE.groom.shortName}
                        </h1>
                        <div className="w-32 h-1 bg-white/50 mx-auto rounded-full" />
                    </motion.div>

                    {/* Date */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="mb-12"
                    >
                        <p className="font-heading text-2xl md:text-3xl text-white">
                            {formatDate(WEDDING_DATE)}
                        </p>
                    </motion.div>

                    {/* Countdown */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="mb-16"
                    >
                        <Countdown />
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        onClick={scrollToNext}
                        className="animate-bounce"
                        aria-label="Scroll to next section"
                    >
                        <ChevronDown className="w-8 h-8 text-white/75" />
                    </motion.button>
                </motion.div>
            </Container>
        </Section>
    )
}
