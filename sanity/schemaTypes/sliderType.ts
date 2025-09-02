import { MegaphoneIcon } from 'lucide-react'
import { defineType, defineField } from 'sanity'

export const sliderType = defineType({
  name: 'slider',
  title: 'Bannière',
  type: 'document',
  icon: MegaphoneIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'description',
            },
          },
        },
      ],
    }),
  ],
})
