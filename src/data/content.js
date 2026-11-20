export const artists = [
  {
    name: 'Andreia Asmodeus',
    role: 'Neo-Traditional · Fine Line · Surrealism',
    image: '/images/image artist 1.jpeg',
  },
  {
    name: 'Maria Amorim',
    role: 'Traditional · Colour Realism',
    image: '/images/image artist 2.jpeg',
  },
]

export const galleryStyles = [
  'Estúdio', 'Blackwork', 'Neo Tradicional', 'Ornamental', 'Fine Line',
  'Tradicional', 'Aguarela', 'Lettering', 'Floral', 'Piercing', 'Sardas',
]

export const galleryItems = galleryStyles.flatMap((style, styleIndex) =>
  [1, 2, 3].map((itemIndex) => ({
    id: `${style}-${itemIndex}`,
    style,
    image: style === 'Estúdio'
      ? `/images/image studio ${itemIndex}.jpeg`
      : `/images/image studio ${((itemIndex + styleIndex) % 4) + 1}.jpeg`,
  }))
)

