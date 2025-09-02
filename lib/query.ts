import { client } from '@/sanity/lib/client'

// La bannière
export const sliderQuery = `
  *[_type == "slider"][0]{
    title,
    images[]{
      description,
      "url": image.asset->url
    }
  }
`

export async function getCategories() {
  const categories = await client.fetch(`
    *[_type == "category"]{
      title,
    }
  `)
  return categories
}

export async function getCategoryIdByTitle(title: string) {
  const category = await client.fetch(
    `*[_type == "category" && title == $title][0]{ _id }`,
    { title }
  )
  return category?._id || null
}

export async function productsByCategory(categoryTitle: string) {
  const categoryId = await getCategoryIdByTitle(categoryTitle)

  const query = `*[_type == "product" && category._ref == $categoryId] | order(name asc)`
  const params = { categoryId: categoryId }
  const products = await client.fetch(query, params)
  return products
}

// obtenir tous les produits
export async function getProducts() {
  const query = `*[_type == "product"] | order(name asc)`
  const products = await client.fetch(query)
  return products
}

// obtention de l'article à partir du slug
export async function getProductBySlug(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug]| order(name asc) [0]`
  const params = { slug }
  try {
    const product = await client.fetch(query, params)
    return product
  } catch (error) {
    console.error("Erreur lors de l'obtention du produit:", error)
  }
}

// get searched products

export async function getSearchedProducts(searchTerm: string) {
  const query = `*[_type == "product" && name match $searchTerm] | order(name asc)`
  const params = { searchTerm: `*${searchTerm}*` }
  const products = await client.fetch(query, params)
  return products
}
