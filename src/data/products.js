export const CATEGORIES = ['All', 'Dresses', 'Co-ord Sets', 'Gowns', 'Blouses', 'Jumpsuits']

// Images use picsum.photos (Cloudflare CDN, always loads).
// Replace each `image` path with your real product photo once you have it:
//   e.g.  image: '/images/ankara-dress.jpg'

export const products = [
  {
    id: 1,
    name: 'Vibrant Ankara Wrap Dress',
    image: 'https://picsum.photos/seed/ankara1/600/900',
    description:
      'A stunning wrap dress crafted from premium Ankara fabric. The bold geometric print and flowing silhouette make it perfect for celebrations, outings, and cultural events.',
    price: '₦35,000',
    category: 'Dresses',
    featured: true,
  },
  {
    id: 2,
    name: 'Gold Embroidered Lace Gown',
    image: 'https://picsum.photos/seed/lace2/600/900',
    description:
      'Exquisite Swiss lace gown with hand-embroidered gold detailing. Floor-length elegance designed for weddings, owambe parties, and black-tie events.',
    price: '₦85,000',
    category: 'Gowns',
    featured: true,
  },
  {
    id: 3,
    name: 'Floral Boubou Co-ord Set',
    image: 'https://picsum.photos/seed/boubou3/600/900',
    description:
      'Lightweight floral boubou top and wide-leg trouser set. Breathable cotton-blend fabric perfect for warm weather styling with a modern African touch.',
    price: '₦42,000',
    category: 'Co-ord Sets',
    featured: false,
  },
  {
    id: 4,
    name: 'Elegant Aso-Ebi Blouse',
    image: 'https://picsum.photos/seed/asoebi4/600/900',
    description:
      'Classic Aso-Ebi blouse with puff sleeves and intricate lace trim. Can be paired with the matching wrapper or a high-waist skirt for a versatile look.',
    price: '₦28,000',
    category: 'Blouses',
    featured: false,
  },
  {
    id: 5,
    name: 'Modern Ankara Jumpsuit',
    image: 'https://picsum.photos/seed/jumpsuit5/600/900',
    description:
      'Contemporary wide-leg jumpsuit in a rich Ankara print. Features a cinched waist, deep pockets, and a halter neckline — effortlessly chic and comfortable.',
    price: '₦48,000',
    category: 'Jumpsuits',
    featured: true,
  },
  {
    id: 6,
    name: 'Coral Silk Evening Gown',
    image: 'https://picsum.photos/seed/evening6/600/900',
    description:
      'Flowing silk-blend evening gown in a beautiful coral hue. The asymmetric neckline and thigh-high slit add drama and sophistication to any formal occasion.',
    price: '₦72,000',
    category: 'Gowns',
    featured: false,
  },
  {
    id: 7,
    name: 'Printed Adire Wrap Skirt Set',
    image: 'https://picsum.photos/seed/adire7/600/900',
    description:
      'Authentic Adire-inspired wrap skirt and crop top co-ord. Hand-dyed indigo and white pattern — a celebration of traditional Nigerian craftsmanship.',
    price: '₦38,000',
    category: 'Co-ord Sets',
    featured: false,
  },
  {
    id: 8,
    name: 'Classic Iro & Buba Set',
    image: 'https://picsum.photos/seed/irobuba8/600/900',
    description:
      'Timeless Iro and Buba set in a stunning wax print fabric. Comes with matching gele headwrap. Perfect for traditional ceremonies and cultural events.',
    price: '₦55,000',
    category: 'Co-ord Sets',
    featured: true,
  },
  {
    id: 9,
    name: 'Beaded Off-Shoulder Dress',
    image: 'https://picsum.photos/seed/beaded9/600/900',
    description:
      'Luxurious off-shoulder bodycon dress adorned with hand-sewn beads at the neckline and hem. A show-stopping piece for evenings and celebrations.',
    price: '₦65,000',
    category: 'Dresses',
    featured: false,
  },
  {
    id: 10,
    name: 'Ankara Palazzo Trouser Set',
    image: 'https://picsum.photos/seed/palazzo10/600/900',
    description:
      'Wide-leg palazzo trousers with a matching cropped blazer in a bold Ankara print. Power dressing meets African fashion heritage.',
    price: '₦52,000',
    category: 'Co-ord Sets',
    featured: false,
  },
  {
    id: 11,
    name: 'Ruffle Sleeve Lace Blouse',
    image: 'https://picsum.photos/seed/ruffle11/600/900',
    description:
      'Romantic ruffle-sleeve blouse in French lace. The fitted bodice and dramatic sleeves create a perfectly balanced silhouette for owambe events.',
    price: '₦32,000',
    category: 'Blouses',
    featured: false,
  },
  {
    id: 12,
    name: 'Purple Aso-Oke Gown',
    image: 'https://picsum.photos/seed/asoke12/600/900',
    description:
      'Regal Aso-Oke fabric transformed into a modern column gown. The deep purple woven texture and structured fit exude royalty and grace.',
    price: '₦95,000',
    category: 'Gowns',
    featured: true,
  },
]

export const getFeaturedProducts = () => products.filter((p) => p.featured)
export const getProductById = (id) => products.find((p) => p.id === Number(id))
export const getProductsByCategory = (cat) =>
  cat === 'All' ? products : products.filter((p) => p.category === cat)
