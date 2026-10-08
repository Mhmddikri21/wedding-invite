'use client'

import { useEffect, useState } from 'react'
import { WEDDING_DATE } from '@/lib/constants'

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
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
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    setTimeLeft(calculate())
    const timer = setInterval(() => setTimeLeft(calculate()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (started) {
    return <div className="inline-flex rounded-full border border-white/40 bg-white/15 px-6 py-3 backdrop-blur-md">
      <span className="font-serif text-lg italic text-white">Hari bahagia kami telah tiba ♡</span>
    </div>
  }

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-2 sm:gap-3">
      {[
        ['Hari', timeLeft.days],
        ['Jam', timeLeft.hours],
        ['Menit', timeLeft.minutes],
        ['Detik', timeLeft.seconds],
      ].map(([label, value]) => (
        <div key={label as string} className="rounded-2xl border border-white/35 bg-white/20 px-1.5 py-3 backdrop-blur-md shadow-lg sm:px-4 sm:py-4">
          <div className="font-heading text-2xl sm:text-4xl">{String(value).padStart(2, '0')}</div>
          <div className="mt-1 text-[9px] uppercase tracking-[.12em] text-white/75 sm:text-xs sm:tracking-[.18em]">{label}</div>
        </div>
      ))}
    </div>
  )
}