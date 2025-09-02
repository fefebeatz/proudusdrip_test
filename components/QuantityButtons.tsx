import React from 'react'
import { ProductType } from './ProductGrid'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

interface Props {
  product: ProductType
  className?: string
}

const QuantityButtons = ({ product, className }: Props) => {
  const itemCount = 4
  return (
    <div className={cn('flex items-center gap-1 text-base pb-1', className)}>
      <Button variant='outline' size='icon' className='h-6 w-6'>
        <Minus />
      </Button>
      <span className='font-semibold w-8 text-center text-dark-color'>
        {itemCount}
      </span>
      <Button variant='outline' size='icon' className='h-6 w-6'>
        <Plus />
      </Button>
    </div>
  )
}

export default QuantityButtons
