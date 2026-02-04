import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
    id?: string
    className?: string
    bgVariant?: 'white' | 'apricot' | 'endless' | 'gradient-sunset' | 'gradient-ocean'
    children: React.ReactNode
}

export function Section({ id, className, bgVariant = 'white', children }: SectionProps) {
    const backgrounds = {
        white: 'bg-white',
        apricot: 'bg-apricot',
        endless: 'bg-endless',
        'gradient-sunset': 'bg-gradient-sunset',
        'gradient-ocean': 'bg-gradient-ocean'
    }

    return (
        <section
            id={id}
            className={cn(
                'py-16 md:py-24 relative overflow-hidden',
                backgrounds[bgVariant],
                className
            )}
        >
            {children}
        </section>
    )
}
