// app/api/products/route.ts
import { NextResponse } from 'next/server'
import { productsByCategory } from '@/sanity/lib/query'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')

  if (!category) {
    return NextResponse.json({ error: 'Category is required' }, { status: 400 })
  }

  try {
    const products = await productsByCategory(category)
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur lors de la récupération des produits. ${error}` },
      { status: 500 }
    )
  }
}
