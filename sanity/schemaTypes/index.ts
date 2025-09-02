import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { sliderType } from './sliderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, sliderType, productType],
}
