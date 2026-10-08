import { NextResponse } from 'next/server'
import { rsvpSchema } from '@/validations/rsvp'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

function dbConfig() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Supabase environment variables are not configured')
  }
  return { supabaseUrl, supabaseServiceRoleKey }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = rsvpSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ message: 'Data RSVP tidak valid', errors: parsed.error.flatten() }, { status: 400 })
    }

    const { supabaseUrl, supabaseServiceRoleKey } = dbConfig()
    const data = parsed.data
    const guestCount = data.attending ? data.guestCount : 0

    const response = await fetch(`${supabaseUrl}/rest/v1/rsvps`, {
      method: 'POST',
      headers: {
        apikey: supabaseServiceRoleKey,
        Authorization: `Bearer ${supabaseServiceRoleKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        name: data.name.trim(),
        attending: data.attending,
        guest_count: guestCount,
        message: data.message?.trim() || null,
        guest_id: data.guestId || null,
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('RSVP database error:', detail)
      return NextResponse.json({ message: 'RSVP gagal disimpan. Silakan coba lagi.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'RSVP berhasil disimpan' }, { status: 201 })
  } catch (error) {
    console.error('RSVP API error:', error)
    return NextResponse.json({ message: 'Terjadi kesalahan pada server.' }, { status: 500 })
  }
}
