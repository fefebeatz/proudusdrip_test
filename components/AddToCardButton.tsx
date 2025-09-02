import React from 'react'
import { ProductType } from './ProductGrid'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { ShoppingBag } from 'lucide-react'
import QuantityButtons from './QuantityButtons'

interface Props {
  product: ProductType
  className?: string
}

const AddToCardButton = ({ product, className }: Props) => {
  const isOutOfStock = product.stock === 0
  const itemCount = 0
  return (
    <div className='w-full'>
      {itemCount ? (
        <div className='w-full text-sm'>
          <div className='flex items-center justify-between pb-1'>
            <span className='text-xs text-muted-foreground'>Quantité</span>
            <QuantityButtons product={product} />
          </div>
          <div className='flex items-center justify-between border-t pt-1'>
            <span className='text-xs font-semibold'>Sous-total</span>
            <span className='text-sm font-semibold text-dark-color'>
              {product.price ? product.price * itemCount : 0} €
            </span>
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            'w-full bg-transparent text-dark-color shadow-none border border-dark-color/30 font-semibold tracking-wide hover:bg-dark-color hover:text-white hoverEffect cursor-pointer',
            className
          )}
        >
          Ajouter au panier <ShoppingBag className='w-5 h-5 ml-2' />
        </Button>
      )}
    </div>
  )
}

export default AddToCardButton
