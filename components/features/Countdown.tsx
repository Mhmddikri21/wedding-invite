'use client'

import React, { useState, useEffect } from 'react'
import { WEDDING_DATE } from '@/lib/constants'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime()
            const target = WEDDING_DATE.getTime()
            const difference = target - now

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                }
            }

            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const timeUnits = [
        { label: 'Hari', value: timeLeft.days },
        { label: 'Jam', value: timeLeft.hours },
        { label: 'Menit', value: timeLeft.minutes },
        { label: 'Detik', value: timeLeft.seconds }
    ]

    return (
        <div className="flex gap-4 justify-center items-center">
            {timeUnits.map((unit, index) => (
                <div key={unit.label} className="flex flex-col items-center">
                    <div className="bg-white/90 backdrop-blur-sm border border-peachy/30 rounded-2xl shadow-soft px-6 py-4 min-w-[80px] md:min-w-[100px]">
                        <span className="font-heading text-3xl md:text-5xl text-peachy font-bold">
                            {String(unit.value).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="font-sans text-sm md:text-base text-white mt-2">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    )
}
