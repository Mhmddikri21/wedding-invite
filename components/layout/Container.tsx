import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
    className?: string
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    children: React.ReactNode
}

export function Container({ className, maxWidth = 'xl', children }: ContainerProps) {
    const maxWidths = {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-5xl',
        xl: 'max-w-7xl',
        '2xl': 'max-w-[1400px]',
        full: 'max-w-full'
    }

    return (
        <div className={cn(
            'container mx-auto px-4 md:px-8 relative z-10',
            maxWidths[maxWidth],
            className
        )}>
            {children}
        </div>
    )
}
