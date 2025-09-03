import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') || ''

  if (!q.trim()) return NextResponse.json([])

  try {
    const products = await client.fetch(
      `*[_type == "product" && name match $q || intro match $q]{
        _id,
        name,
        intro,
        slug,
        price,
        discount,
        images
      }`,
      { q: `*${q}*` }
    )
    return NextResponse.json(products)
  } catch (error) {
    console.error('Erreur Sanity:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
