'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { LOCATION } from '@/lib/constants'
import { MapPin, Navigation } from 'lucide-react'

export function LocationSection() {
    return (
        <Section id="location" bgVariant="endless">
            <Container>
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">
                        Lokasi Acara
                    </h2>
                    <div className="w-24 h-1 bg-gradient-peach mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Location info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-sm border border-pennies/20 rounded-3xl shadow-soft p-8 mb-8 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-pennies/10 flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-pennies" />
                        </div>

                        <h3 className="font-heading text-2xl text-text-primary mb-2">
                            {LOCATION.name}
                        </h3>
                        <p className="font-serif text-base text-text-secondary mb-6">
                            {LOCATION.address}
                        </p>

                        <Button
                            variant="primary"
                            onClick={() => window.open(LOCATION.googleMapsUrl, '_blank')}
                            className="gap-2"
                        >
                            <Navigation className="w-5 h-5" />
                            Buka di Google Maps
                        </Button>
                    </motion.div>

                    {/* Google Maps embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-soft-lg border border-pennies/20"
                    >
                        <iframe
                            src={LOCATION.googleMapsEmbed}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
