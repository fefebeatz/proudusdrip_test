import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Proud Us Drip Admin.')
    .items([
      S.documentTypeListItem('category').title('Catégorie'),
      S.documentTypeListItem('slider').title('Bannière'),
      S.documentTypeListItem('product').title('Articles'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['category', 'slider', 'product'].includes(item.getId()!)
      ),
    ])
