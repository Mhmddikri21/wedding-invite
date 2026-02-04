'use client'

import { Container } from '@/components/layout/Container'
import { Heart } from 'lucide-react'

export function FooterSection() {
    return (
        <footer className="bg-white py-12 border-t border-pennies/10">
            <Container>
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="font-script text-4xl text-peachy-dark mb-6">
                        Sarah & Michael
                    </h2>

                    <p className="font-sans text-text-muted text-sm flex items-center gap-2 mb-2">
                        Created with <Heart size={14} className="fill-error text-error" /> for our special day
                    </p>

                    <p className="font-sans text-xs text-text-muted/60">
                        © 2026 The Wedding of Sarah & Michael. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
