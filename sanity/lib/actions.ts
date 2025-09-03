'use server'

import {
  getSearchedProducts,
  getProductBySlug,
  productsByCategory,
  getCategories,
  getImagesBanner,
} from './query'

export async function getImagesBannerAction() {
  return await getImagesBanner()
}

export async function searchProductsAction(searchTerm: string) {
  return await getSearchedProducts(searchTerm)
}

export async function getProductBySlugAction(slug: string) {
  return await getProductBySlug(slug)
}

export async function getProductByCategoryAction(categoryTitle: string) {
  return await productsByCategory(categoryTitle)
}

export async function getCategoryAction() {
  return await getCategories()
}
