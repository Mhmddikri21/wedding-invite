'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'
import { EVENTS } from '@/lib/constants'
import { formatDate, formatTime } from '@/lib/utils'
import { Calendar, Clock, MapPin } from 'lucide-react'

export function EventSection() {
    const events = [
        {
            ...EVENTS.akad,
            icon: Calendar,
            color: 'peachy'
        },
        {
            ...EVENTS.resepsi,
            icon: Calendar,
            color: 'pennies'
        }
    ]

    return (
        <Section id="event" bgVariant="white">
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
                        Waktu & Tempat
                    </h2>
                    <div className="w-24 h-1 bg-gradient-peach mx-auto rounded-full" />
                </motion.div>

                {/* Event cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card variant="glass">
                                {/* Icon */}
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                                    style={{
                                        backgroundColor: event.color === 'peachy' ? 'rgba(244, 199, 187, 0.1)' : 'rgba(161, 190, 201, 0.1)'
                                    }}
                                >
                                    <event.icon
                                        className="w-8 h-8"
                                        style={{
                                            color: event.color === 'peachy' ? '#F4C7BB' : '#A1BEC9'
                                        }}
                                    />
                                </div>

                                {/* Event name */}
                                <h3 className="font-heading text-2xl text-text-primary text-center mb-6">
                                    {event.name}
                                </h3>

                                {/* Details */}
                                <div className="space-y-4">
                                    {/* Date */}
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-text-muted mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-sans text-sm text-text-muted mb-0.5">Tanggal</p>
                                            <p className="font-serif text-base text-text-primary">
                                                {formatDate(event.date)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-text-muted mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-sans text-sm text-text-muted mb-0.5">Waktu</p>
                                            <p className="font-serif text-base text-text-primary">
                                                {formatTime(event.date)} WIB
                                            </p>
                                        </div>
                                    </div>

                                    {/* Venue */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-text-muted mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-sans text-sm text-text-muted mb-0.5">Tempat</p>
                                            <p className="font-serif text-base text-text-primary font-semibold mb-1">
                                                {event.venue}
                                            </p>
                                            <p className="font-serif text-sm text-text-secondary">
                                                {event.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
