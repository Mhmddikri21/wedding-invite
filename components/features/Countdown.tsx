'use client'

import React, { useEffect, useState } from 'react'
import { WEDDING_DATE } from '@/lib/constants'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const calculate = () => {
      const difference = WEDDING_DATE.getTime() - Date.now()
      if (difference <= 0) {
        setStarted(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
      return {
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    setTimeLeft(calculate())
    const timer = setInterval(() => setTimeLeft(calculate()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (started) {
    return (
      <div className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-6 py-3 backdrop-blur-md">
        <span className="font-serif text-lg text-white italic">Hari bahagia kami telah tiba ♡</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
      {[
        ['Hari', timeLeft.days],
        ['Jam', timeLeft.hours],
        ['Menit', timeLeft.minutes],
        ['Detik', timeLeft.seconds],
      ].map(([label, value]) => (
        <div key={label as string} className="rounded-2xl border border-white/35 bg-white/20 px-2 py-3 sm:px-4 sm:py-4 backdrop-blur-md shadow-lg">
          <div className="font-heading text-2xl sm:text-4xl text-white">{String(value).padStart(2, '0')}</div>
          <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[.18em] text-white/75">{label}</div>
        </div>
      ))}
    </div>
  )
}
