import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helperText?: string
    icon?: React.ReactNode
}

export function Input({ label, error, helperText, icon, className, ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block font-sans text-sm font-medium text-text-primary mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
                        {icon}
                    </div>
                )}
                <input
                    className={cn(
                        'w-full px-4 py-3',
                        icon && 'pl-11',
                        'bg-white',
                        'border-2',
                        error ? 'border-error' : 'border-alchemy focus:border-peachy',
                        'focus:outline-none',
                        'rounded-xl',
                        'text-text-primary font-serif',
                        'placeholder:text-text-muted',
                        'transition-colors duration-200',
                        className
                    )}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1.5 text-sm text-error font-sans">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1.5 text-sm text-text-muted font-sans">{helperText}</p>
            )}
        </div>
    )
}
