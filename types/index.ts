export interface WishFormData {
    name: string
    message: string
    guestId?: string
}

export interface RsvpFormData {
    name: string
    attending: boolean
    guestCount: number
    message?: string
    guestId?: string
}

export interface GuestData {
    id: string
    name: string
    slug: string
    category?: string
}

export interface WishData {
    id: string
    name: string
    message: string
    createdAt: Date
}

export interface RsvpData {
    id: string
    attending: boolean
    guestCount: number
    message?: string
    createdAt: Date
}
