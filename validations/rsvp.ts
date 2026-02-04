import { z } from 'zod'

export const rsvpSchema = z.object({
    name: z.string().min(2, 'Nama minimal 2 karakter').max(100, 'Nama maksimal 100 karakter'),
    attending: z.boolean(),
    guestCount: z.number().min(1, 'Minimal 1 tamu').max(10, 'Maksimal 10 tamu'),
    message: z.string().max(500, 'Pesan maksimal 500 karakter').optional(),
    guestId: z.string().optional()
})

export type RsvpInput = z.infer<typeof rsvpSchema>
