// Wedding Event Details
export const WEDDING_DATE = new Date('2026-08-15T10:00:00+07:00')

export const COUPLE = {
    bride: {
        fullName: 'Sarah Amanda Putri',
        shortName: 'Sarah',
        parents: {
            father: 'Bapak Jonathan Susanto',
            mother: 'Ibu Maria Angelina'
        },
        instagram: '@sarah.amanda',
        image: '/images/bride.jpg'
    },
    groom: {
        fullName: 'Michael Budi Santoso',
        shortName: 'Michael',
        parents: {
            father: 'Bapak Budi Hartono',
            mother: 'Ibu Siti Rahayu'
        },
        instagram: '@michael.budi',
        image: '/images/groom.jpg'
    }
}

export const EVENTS = {
    akad: {
        name: 'Akad Nikah',
        date: new Date('2026-08-15T10:00:00+07:00'),
        venue: 'Masjid Al-Hidayah',
        address: 'Jl. Merdeka No. 123, Jakarta Selatan'
    },
    resepsi: {
        name: 'Resepsi Pernikahan',
        date: new Date('2026-08-15T14:00:00+07:00'),
        venue: 'Grand Ballroom Hotel Mulia',
        address: 'Jl. Asia Afrika No. 8, Jakarta Selatan, DKI Jakarta 12160'
    }
}

export const LOCATION = {
    name: 'Grand Ballroom Hotel Mulia',
    address: 'Jl. Asia Afrika No. 8, Jakarta Selatan, DKI Jakarta 12160',
    googleMapsUrl: 'https://goo.gl/maps/example',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890'
}

export const GIFT_INFO = {
    banks: [
        {
            name: 'Bank BCA',
            accountNumber: '1234567890',
            accountName: 'Sarah Amanda Putri'
        },
        {
            name: 'Bank Mandiri',
            accountNumber: '9876543210',
            accountName: 'Michael Budi Santoso'
        }
    ],
    qris: '/images/qris.png',
    ewallets: [
        {
            name: 'GoPay',
            number: '081234567890'
        },
        {
            name: 'OVO',
            number: '081234567890'
        }
    ]
}

export const GALLERY_IMAGES = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
]

export const BACKGROUND_MUSIC = '/audio/background-music.mp3'
