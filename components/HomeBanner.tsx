import React from 'react'
import BannerImages from './BannerImages'
import Title from './Title'
import {
  getCategories,
  getImagesBanner,
  getProducts,
  // productsByCategory,
} from '@/sanity/lib/query'
import ProductGrid from './ProductGrid'
// import { getImagesBannerAction } from '@/sanity/lib/actions'

const HomeBanner = async () => {
  // Obtention des images
  const data = await getImagesBanner()
  const categories = await getCategories()
  const products = await getProducts()

  return (
    <div className='flex flex-col items-center gap-5'>
      <BannerImages images={data} />

      <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>
        Style urbain. Attitude garantie.
      </Title>
      <p className='text-sm text-center text-light-color/80 font-medium max-w-[480px]'>
        Des pièces streetwear audacieuses, conçues pour te démarquer et vivre
        ton style au quotidien.
      </p>

      {/* Section des produits */}
      <ProductGrid categoriesParam={categories} productsParam={products} />
    </div>
  )
}

export default HomeBanner
