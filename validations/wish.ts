import { z } from 'zod'

export const wishSchema = z.object({
    name: z.string().min(2, 'Nama minimal 2 karakter').max(100, 'Nama maksimal 100 karakter'),
    message: z.string().min(10, 'Ucapan minimal 10 karakter').max(500, 'Ucapan maksimal 500 karakter'),
    guestId: z.string().optional()
})

export type WishInput = z.infer<typeof wishSchema>
