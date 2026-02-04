'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { COUPLE } from '@/lib/constants'
import { Instagram } from 'lucide-react'

export function CoupleSection() {
    return (
        <Section id="couple" bgVariant="apricot">
            <Container>
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">
                        Mempelai
                    </h2>
                    <div className="w-24 h-1 bg-gradient-peach mx-auto rounded-full" />
                </motion.div>

                {/* Couple cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Bride */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="glass" className="text-center">
                            {/* Profile image */}
                            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-peachy/30">
                                <div className="w-full h-full bg-ceramic/30 flex items-center justify-center">
                                    <span className="font-script text-6xl text-peachy">
                                        {COUPLE.bride.shortName.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="font-heading text-3xl text-text-primary mb-2">
                                {COUPLE.bride.fullName}
                            </h3>

                            {/* Parents */}
                            <p className="font-serif text-lg text-text-secondary mb-1">
                                Putri dari
                            </p>
                            <p className="font-serif text-base text-text-secondary mb-4">
                                {COUPLE.bride.parents.father}
                                <br />
                                & {COUPLE.bride.parents.mother}
                            </p>

                            {/* Instagram */}
                            <a
                                href={`https://instagram.com/${COUPLE.bride.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-peachy hover:text-peachy-dark transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="font-sans text-sm">{COUPLE.bride.instagram}</span>
                            </a>
                        </Card>
                    </motion.div>

                    {/* Groom */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Card variant="glass" className="text-center">
                            {/* Profile image */}
                            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pennies/30">
                                <div className="w-full h-full bg-alchemy/30 flex items-center justify-center">
                                    <span className="font-script text-6xl text-pennies">
                                        {COUPLE.groom.shortName.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="font-heading text-3xl text-text-primary mb-2">
                                {COUPLE.groom.fullName}
                            </h3>

                            {/* Parents */}
                            <p className="font-serif text-lg text-text-secondary mb-1">
                                Putra dari
                            </p>
                            <p className="font-serif text-base text-text-secondary mb-4">
                                {COUPLE.groom.parents.father}
                                <br />
                                & {COUPLE.groom.parents.mother}
                            </p>

                            {/* Instagram */}
                            <a
                                href={`https://instagram.com/${COUPLE.groom.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-pennies hover:text-pennies-dark transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="font-sans text-sm">{COUPLE.groom.instagram}</span>
                            </a>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
