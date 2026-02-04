import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
    variant?: 'glass' | 'colored' | 'solid'
    className?: string
    children: React.ReactNode
}

export function Card({ variant = 'glass', className, children }: CardProps) {
    const variants = {
        glass: 'bg-white/80 backdrop-blur-sm border border-pennies/20 rounded-3xl shadow-soft hover:shadow-soft-lg transition-shadow duration-300',
        colored: 'bg-gradient-peach rounded-2xl shadow-soft border border-peachy/30',
        solid: 'bg-white border border-pennies/30 rounded-2xl shadow-soft'
    }

    return (
        <div className={cn(variants[variant], 'p-8', className)}>
            {children}
        </div>
    )
}
