import React from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
    helperText?: string
}

export function Textarea({ label, error, helperText, className, ...props }: TextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block font-sans text-sm font-medium text-text-primary mb-2">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    'w-full px-4 py-3',
                    'bg-white',
                    'border-2',
                    error ? 'border-error' : 'border-alchemy focus:border-peachy',
                    'focus:outline-none',
                    'rounded-xl',
                    'text-text-primary font-serif',
                    'placeholder:text-text-muted',
                    'transition-colors duration-200',
                    'resize-none',
                    className
                )}
                rows={4}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-sm text-error font-sans">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1.5 text-sm text-text-muted font-sans">{helperText}</p>
            )}
        </div>
    )
}
