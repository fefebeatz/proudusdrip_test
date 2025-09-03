import React from 'react'
import BannerImages from './BannerImages'
import Title from './Title'
import { client } from '@/sanity/lib/client'
import { sliderQuery } from '@/sanity/lib/query'
import ProductGrid from './ProductGrid'

const HomeBanner = async () => {
  const data = await client.fetch(sliderQuery)

  return (
    <div className='flex flex-col items-center gap-5'>
      <BannerImages images={data.images} />

      <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>
        Style urbain. Attitude garantie.
      </Title>
      <p className='text-sm text-center text-light-color/80 font-medium max-w-[480px]'>
        Des pièces streetwear audacieuses, conçues pour te démarquer et vivre
        ton style au quotidien.
      </p>

      {/* Section des produits */}
      <ProductGrid />
    </div>
  )
}

export default HomeBanner
