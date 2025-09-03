'use server'
import AddToCardButton from '@/components/AddToCardButton'
import Container from '@/components/Container'
import ImageView from '@/components/ImageView'
import PriceView from '@/components/PriceView'
import ProductCaracteristics from '@/components/ProductCaracteristics'
import { ProductType } from '@/components/ProductGrid'
import ExpandableText from '@/components/SeeMore'
import { Badge } from '@/components/ui/badge'
import { getProductBySlug } from '@/sanity/lib/query'
import { cn } from '@/lib/utils'
import { BoxIcon, FileQuestion, Heart, Share2, Truck } from 'lucide-react'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const product: ProductType = await getProductBySlug(slug)

  if (!product) return notFound()

  return (
    <Container className='py-10 flex flex-col md:flex-row gap-10'>
      {/* Aperçu des images */}
      {product.images && (
        <ImageView images={product.images} product={product} />
      )}

      {/* Détails de l'article */}
      <div className='w-full md:w-1/2 flex flex-col gap-5'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2'>{product.name}</h2>
        <div className='flex items-center gap-2'>
          <p className='text-dark-color text-lg md:text-xl'>Prix:</p>
          <PriceView
            price={product.price}
            discount={product?.discount}
            className='text-lg font-bold'
          />
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-dark-color text-lg md:text-xl'>Couleur:</p>
          <div
            className={`w-4 h-4 rounded-full border-none`}
            style={{ backgroundColor: product.color?.hex }}
          ></div>
          <p className='text-gray-600 text-lg md:text-xl'>
            {product.colorName}
          </p>
        </div>

        <>
          {product.status && (
            <Badge
              className={cn('text-lg text-white', {
                'bg-red-500': product.status === 'Hot',
                'bg-green-500': product.status === 'Nouveau',
                'bg-amber-500': product.status === 'Promo',
              })}
            >
              {product.status === 'Promo' ? (
                <span>
                  {product.status}{' '}
                  <span className='font-semibold'>-{product.discount}%</span>
                </span>
              ) : (
                <span>{product.status}</span>
              )}
            </Badge>
          )}
        </>

        {product.description ? (
          <ExpandableText text={product.description} />
        ) : (
          <p className='text-sm text-gray-600 tracking-wide'>
            {product.description ? product.description : '...'}
          </p>
        )}

        <div className='flex items-center gap-2.5 lg:gap-5 w-full'>
          <AddToCardButton
            product={product}
            className='bg-dark-color/80 text-white hover:bg-dark-color hoverEffect cursor-pointer'
          />
          <button className='border-2 border-dark-color/30 text-dark-color/60 px-2.5 py-1.5 rounded-md hover:text-dark-color hover:border-dark-color hoverEffect cursor-pointer'>
            <Heart className='w-5 h-5' />
          </button>
        </div>

        {/* Caratéristiques de l'article */}
        <ProductCaracteristics product={product} />

        <div className='flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2'>
          <div className='flex items-center gap-2 text-sm text-dark-color hover:text-dark-blue hoverEffect'>
            <BoxIcon className='w-5 h-5' />
            <p>Comparer les couleurs</p>
          </div>
          <div className='flex items-center gap-2 text-sm text-dark-color hover:text-dark-blue hoverEffect'>
            <FileQuestion className='w-5 h-5' />
            <p>Poser une question</p>
          </div>
          <div className='flex items-center gap-2 text-sm text-dark-color hover:text-dark-blue hoverEffect'>
            <Truck className='w-5 h-5' />
            <p>Livraison et retours</p>
          </div>
          <div className='flex items-center gap-2 text-sm text-dark-color hover:text-dark-blue hoverEffect'>
            <Share2 className='w-5 h-5' />
            <p>Partager</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default page
