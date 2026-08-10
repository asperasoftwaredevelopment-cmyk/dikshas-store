export type Category =
  | 'all'
  | 'soaps'
  | 'face-washes'
  | 'serums'
  | 'moisturizers'
  | 'sunscreens'
  | 'lip-tints'
  | 'under-eye-gels'

export type Review = {
  id: string
  author: string
  rating: number
  date: string
  title: string
  body: string
}

export type Variant = {
  id: string
  label: string
  price: number
  image: string
}

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  category: Exclude<Category, 'all'>
  size: string
  accent: string
  image: string
  price: number
  bestseller?: boolean
  hero?: boolean
  ingredients: string[]
  benefits: string[]
  variants: Variant[]
  reviews: Review[]
}

export const brand = {
  name: 'Auréva',
  tagline: 'Botanical skincare, rooted in earth',
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'soaps', label: 'Soaps' },
  { id: 'face-washes', label: 'Face Washes' },
  { id: 'serums', label: 'Face Serums' },
  { id: 'moisturizers', label: 'Moisturizers' },
  { id: 'sunscreens', label: 'Sunscreens' },
  { id: 'lip-tints', label: 'Lip Tints' },
  { id: 'under-eye-gels', label: 'Under-Eye Gels' },
]

export const categoryLabels: Record<Exclude<Category, 'all'>, string> = {
  soaps: 'Soaps',
  'face-washes': 'Face Washes',
  serums: 'Face Serums',
  moisturizers: 'Moisturizers',
  sunscreens: 'Sunscreens',
  'lip-tints': 'Lip Tints',
  'under-eye-gels': 'Under-Eye Gels',
}

const soapReviews: Review[] = [
  {
    id: 'r1',
    author: 'Ananya R.',
    rating: 5,
    date: '2026-06-12',
    title: 'My skin finally feels calm',
    body: 'Multani Mitti has always been my go-to, but this soap is next level. Oiliness is under control without stripping my face.',
  },
  {
    id: 'r2',
    author: 'Priya S.',
    rating: 5,
    date: '2026-05-28',
    title: 'Bestseller for a reason',
    body: 'I tried the sandalwood variant and the classic — both are divine. Gentle lather, earthy scent, and my T-zone looks clearer.',
  },
  {
    id: 'r3',
    author: 'Meera K.',
    rating: 4,
    date: '2026-04-02',
    title: 'Lovely everyday cleanse',
    body: 'Soft on skin and leaves a matte finish. The rose variant smells subtle, not perfumey.',
  },
]

export const products: Product[] = [
  {
    id: 'multani-mitti-soap',
    name: 'Multani Mitti Soap',
    tagline: 'Our bestselling clay cleanse',
    description:
      'Handcrafted with purified Multani Mitti (Fuller’s earth), this hero soap draws out excess oil, clarifies pores, and leaves skin soft and balanced. A daily ritual for clear, calm skin.',
    category: 'soaps',
    size: '100 g',
    accent: '#E8DFD0',
    image:
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80',
    price: 249,
    bestseller: true,
    hero: true,
    ingredients: [
      'Multani Mitti (Fuller’s earth)',
      'Cold-pressed coconut oil',
      'Shea butter',
      'Glycerin',
      'Essential oils',
      'Vitamin E',
    ],
    benefits: [
      'Absorbs excess sebum without over-drying',
      'Gently clarifies congested pores',
      'Leaves a soft, matte finish',
      'Suitable for face and body',
    ],
    variants: [
      {
        id: 'mm-classic',
        label: 'Classic Clay',
        price: 249,
        image:
          'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'mm-neem',
        label: 'Neem',
        price: 269,
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'mm-sandalwood',
        label: 'Sandalwood',
        price: 289,
        image:
          'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'mm-rose',
        label: 'Rose',
        price: 279,
        image:
          'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'mm-turmeric',
        label: 'Turmeric',
        price: 269,
        image:
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: soapReviews,
  },
  {
    id: 'charcoal-detox-soap',
    name: 'Activated Charcoal Soap',
    tagline: 'Deep detox for city skin',
    description:
      'Activated charcoal binds impurities while tea tree keeps skin feeling fresh. Ideal for oily and combination skin after a long day.',
    category: 'soaps',
    size: '100 g',
    accent: '#DDE3E0',
    image:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
    price: 229,
    ingredients: [
      'Activated charcoal',
      'Tea tree oil',
      'Coconut oil',
      'Olive oil',
      'Glycerin',
    ],
    benefits: [
      'Draws out surface impurities',
      'Helps control shine',
      'Refreshing clean feel',
    ],
    variants: [
      {
        id: 'char-classic',
        label: 'Classic',
        price: 229,
        image:
          'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'char-mint',
        label: 'Mint',
        price: 239,
        image:
          'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'c1',
        author: 'Rohan M.',
        rating: 5,
        date: '2026-03-18',
        title: 'Great for gym days',
        body: 'Deep clean without that tight, dry feeling. Mint variant is refreshing.',
      },
    ],
  },
  {
    id: 'honey-oat-soap',
    name: 'Honey & Oat Soap',
    tagline: 'Nourish and soothe',
    description:
      'Colloidal oats and raw honey wrap dry skin in comfort. A gentle bar for sensitive and dehydrated skin types.',
    category: 'soaps',
    size: '100 g',
    accent: '#F0E6D8',
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
    price: 259,
    ingredients: [
      'Colloidal oatmeal',
      'Raw honey',
      'Shea butter',
      'Sweet almond oil',
      'Chamomile extract',
    ],
    benefits: [
      'Soothes dry, tight skin',
      'Supports a healthy moisture barrier',
      'Soft, creamy lather',
    ],
    variants: [
      {
        id: 'ho-classic',
        label: 'Classic',
        price: 259,
        image:
          'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'ho-lavender',
        label: 'Lavender',
        price: 269,
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'h1',
        author: 'Sara T.',
        rating: 5,
        date: '2026-02-09',
        title: 'Winter staple',
        body: 'My dry patches calmed down within a week. Smells like a spa.',
      },
    ],
  },
  {
    id: 'green-tea-wash',
    name: 'Green Tea Face Wash',
    tagline: 'Antioxidant daily cleanse',
    description:
      'A gel cleanser infused with green tea and mild AHAs to sweep away dirt while keeping the barrier happy.',
    category: 'face-washes',
    size: '100 ml',
    accent: '#E2EDE6',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
    price: 399,
    ingredients: [
      'Camellia sinensis (green tea) extract',
      'Niacinamide',
      'Glycerin',
      'Aloe vera',
      'Mild surfactants',
    ],
    benefits: [
      'Removes pollution residue',
      'Brightens dull tone over time',
      'Non-stripping formula',
    ],
    variants: [
      {
        id: 'gt-classic',
        label: 'Classic',
        price: 399,
        image:
          'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'gt-matcha',
        label: 'Matcha Boost',
        price: 429,
        image:
          'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'g1',
        author: 'Isha P.',
        rating: 5,
        date: '2026-05-01',
        title: 'Morning essential',
        body: 'Foams just enough and my skin feels fresh, never squeaky.',
      },
    ],
  },
  {
    id: 'rosehip-wash',
    name: 'Rosehip Gentle Face Wash',
    tagline: 'Soft cleanse for dry skin',
    description:
      'Creamy rosehip cleanser that melts makeup and residue while leaving a dewy finish.',
    category: 'face-washes',
    size: '100 ml',
    accent: '#F3E4E6',
    image:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
    price: 449,
    ingredients: [
      'Rosehip oil',
      'Hyaluronic acid',
      'Panthenol',
      'Rose water',
      'Ceramides',
    ],
    benefits: [
      'Maintains moisture while cleansing',
      'Softens flaky patches',
      'Subtle floral scent',
    ],
    variants: [
      {
        id: 'rh-classic',
        label: 'Rosehip',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'rh-hibiscus',
        label: 'Hibiscus',
        price: 459,
        image:
          'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'rh1',
        author: 'Neha V.',
        rating: 4,
        date: '2026-01-22',
        title: 'Gentle and creamy',
        body: 'Perfect for dry winters. Makeup comes off easily.',
      },
    ],
  },
  {
    id: 'vitamin-c-serum',
    name: 'Vitamin C Bright Serum',
    tagline: 'Radiance in a drop',
    description:
      'Stabilized 15% vitamin C with ferulic acid to visibly brighten and even tone. Lightweight, fast-absorbing, glow-forward.',
    category: 'serums',
    size: '30 ml',
    accent: '#F5EBD4',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
    price: 899,
    bestseller: true,
    ingredients: [
      '15% Ascorbic acid',
      'Ferulic acid',
      'Vitamin E',
      'Hyaluronic acid',
      'Orange blossom water',
    ],
    benefits: [
      'Visibly brightens dull skin',
      'Supports even-looking tone',
      'Antioxidant protection',
    ],
    variants: [
      {
        id: 'vc-15',
        label: '15% Classic',
        price: 899,
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'vc-20',
        label: '20% Intense',
        price: 1099,
        image:
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'v1',
        author: 'Kavya L.',
        rating: 5,
        date: '2026-06-20',
        title: 'Glow in two weeks',
        body: 'Subtle brightening without irritation. Layered well under moisturizer.',
      },
    ],
  },
  {
    id: 'niacinamide-serum',
    name: 'Niacinamide Balance Serum',
    tagline: 'Refine and calm',
    description:
      '10% niacinamide with zinc to minimize the look of pores and keep oil in check throughout the day.',
    category: 'serums',
    size: '30 ml',
    accent: '#E4EAF2',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80',
    price: 749,
    ingredients: [
      '10% Niacinamide',
      'Zinc PCA',
      'Centella asiatica',
      'Glycerin',
      'Allantoin',
    ],
    benefits: [
      'Minimizes appearance of pores',
      'Balances oil production',
      'Calms redness-prone skin',
    ],
    variants: [
      {
        id: 'nia-10',
        label: '10%',
        price: 749,
        image:
          'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'nia-5',
        label: '5% Gentle',
        price: 649,
        image:
          'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'n1',
        author: 'Aditi B.',
        rating: 5,
        date: '2026-04-14',
        title: 'Pore refining hero',
        body: 'My makeup sits better and midday shine is way more manageable.',
      },
    ],
  },
  {
    id: 'hyaluronic-cream',
    name: 'Hyaluronic Cloud Cream',
    tagline: 'Weightless all-day moisture',
    description:
      'Multi-weight hyaluronic acid and squalane deliver cushiony hydration that never feels heavy.',
    category: 'moisturizers',
    size: '50 ml',
    accent: '#E8EEF5',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
    price: 799,
    ingredients: [
      'Multi-weight hyaluronic acid',
      'Squalane',
      'Ceramides',
      'Panthenol',
      'Aloe vera',
    ],
    benefits: [
      'Plumps dehydrated skin',
      'Lightweight gel-cream texture',
      'Works under sunscreen and makeup',
    ],
    variants: [
      {
        id: 'hc-regular',
        label: 'Regular',
        price: 799,
        image:
          'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'hc-rich',
        label: 'Rich Night',
        price: 849,
        image:
          'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'hc1',
        author: 'Pooja N.',
        rating: 5,
        date: '2026-05-30',
        title: 'Cloud soft',
        body: 'Absorbs fast and my skin stays soft until evening.',
      },
    ],
  },
  {
    id: 'ceramide-barrier',
    name: 'Ceramide Barrier Cream',
    tagline: 'Repair and fortify',
    description:
      'A richer cream with a ceramide complex and shea to restore comfort to compromised, sensitive skin.',
    category: 'moisturizers',
    size: '50 ml',
    accent: '#EDE6DC',
    image:
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80',
    price: 949,
    ingredients: [
      'Ceramide NP, AP, EOP',
      'Cholesterol',
      'Shea butter',
      'Oat extract',
      'Squalane',
    ],
    benefits: [
      'Strengthens the moisture barrier',
      'Relieves tightness and flaking',
      'Fragrance-free comfort',
    ],
    variants: [
      {
        id: 'cb-classic',
        label: 'Classic',
        price: 949,
        image:
          'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'cb-light',
        label: 'Light Lotion',
        price: 849,
        image:
          'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'cb1',
        author: 'Divya G.',
        rating: 5,
        date: '2026-03-05',
        title: 'Barrier saver',
        body: 'After actives, this is what my skin asks for. No sting, just comfort.',
      },
    ],
  },
  {
    id: 'daily-spf50',
    name: 'Daily Shield SPF 50',
    tagline: 'Invisible urban protection',
    description:
      'Broad-spectrum SPF 50 PA++++ that blends sheer, leaves no white cast, and plays well under makeup.',
    category: 'sunscreens',
    size: '50 ml',
    accent: '#E8F0F5',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    price: 699,
    bestseller: true,
    ingredients: [
      'Tinosorb S & M',
      'Uvinul A Plus',
      'Niacinamide',
      'Vitamin E',
      'Silica',
    ],
    benefits: [
      'No white cast on most skin tones',
      'Lightweight matte-satin finish',
      'Water-resistant for 40 minutes',
    ],
    variants: [
      {
        id: 'spf-matte',
        label: 'Matte',
        price: 699,
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'spf-glow',
        label: 'Dewy Glow',
        price: 719,
        image:
          'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 's1',
        author: 'Ayesha F.',
        rating: 5,
        date: '2026-06-01',
        title: 'Finally no cast',
        body: 'Blends clear on my medium skin and doesn’t pill with serum.',
      },
    ],
  },
  {
    id: 'mineral-spf',
    name: 'Mineral Soft SPF 40',
    tagline: 'Gentle mineral defense',
    description:
      'Zinc-led mineral sunscreen for sensitive skin. Soft-focus finish with calming botanicals.',
    category: 'sunscreens',
    size: '50 ml',
    accent: '#EEE8DF',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80',
    price: 749,
    ingredients: [
      'Non-nano zinc oxide',
      'Titanium dioxide',
      'Centella',
      'Bisabolol',
      'Jojoba esters',
    ],
    benefits: [
      'Ideal for reactive skin',
      'Soft-focus finish',
      'Reef-conscious filters',
    ],
    variants: [
      {
        id: 'min-untinted',
        label: 'Untinted',
        price: 749,
        image:
          'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'min-tinted',
        label: 'Light Tint',
        price: 779,
        image:
          'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'm1',
        author: 'Leena C.',
        rating: 4,
        date: '2026-02-18',
        title: 'Sensitive-skin safe',
        body: 'No sting around my eyes. Tint helps even things out.',
      },
    ],
  },
  {
    id: 'berry-lip-tint',
    name: 'Berry Blush Lip Tint',
    tagline: 'Buildable soft color',
    description:
      'A sheer, buildable tint with jojoba and vitamin E for comfortable all-day wear.',
    category: 'lip-tints',
    size: '5 ml',
    accent: '#F5E0E4',
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
    price: 449,
    ingredients: [
      'Jojoba oil',
      'Vitamin E',
      'Plant-derived pigments',
      'Shea butter',
      'Natural flavor',
    ],
    benefits: [
      'Hydrating sheer color',
      'Buildable from wash of color to medium',
      'Non-drying formula',
    ],
    variants: [
      {
        id: 'bl-berry',
        label: 'Wild Berry',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'bl-coral',
        label: 'Soft Coral',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'bl-mauve',
        label: 'Dusty Mauve',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'lt1',
        author: 'Riya D.',
        rating: 5,
        date: '2026-05-11',
        title: 'Everyday pretty',
        body: 'Mauve is perfect for work. Lips feel soft, not sticky.',
      },
    ],
  },
  {
    id: 'nude-lip-tint',
    name: 'Nude Bloom Lip Tint',
    tagline: 'Your lips, but better',
    description:
      'Warm nudes that melt into the lip line for a natural flush. Comfortable enough for all-day wear.',
    category: 'lip-tints',
    size: '5 ml',
    accent: '#F2E6DC',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    price: 449,
    ingredients: [
      'Castor oil',
      'Vitamin E',
      'Beeswax alternative',
      'Plant pigments',
      'Vanilla extract',
    ],
    benefits: [
      'Natural-looking flush',
      'Comfortable wear',
      'Easy to reapply',
    ],
    variants: [
      {
        id: 'nb-peach',
        label: 'Peach Nude',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'nb-rose',
        label: 'Rose Nude',
        price: 449,
        image:
          'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'nb1',
        author: 'Simran J.',
        rating: 4,
        date: '2026-04-08',
        title: 'Natural finish',
        body: 'Peach Nude looks like my lips but healthier. Love it with Multani soap mornings.',
      },
    ],
  },
  {
    id: 'caffeine-eye-gel',
    name: 'Caffeine Under-Eye Gel',
    tagline: 'Depuff and awaken',
    description:
      'Cooling gel with caffeine and peptides to reduce the look of puffiness and tired under-eyes.',
    category: 'under-eye-gels',
    size: '15 ml',
    accent: '#E3EBEF',
    image:
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80',
    price: 599,
    ingredients: [
      'Caffeine',
      'Peptide complex',
      'Hyaluronic acid',
      'Cucumber extract',
      'Green tea',
    ],
    benefits: [
      'Visibly reduces puffiness',
      'Cooling metal-tip applicator feel',
      'Layers under makeup',
    ],
    variants: [
      {
        id: 'ce-classic',
        label: 'Classic',
        price: 599,
        image:
          'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'ce-cooling',
        label: 'Extra Cooling',
        price: 629,
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 'e1',
        author: 'Tara M.',
        rating: 5,
        date: '2026-06-15',
        title: 'Morning rescue',
        body: 'Puffiness softens within minutes. Part of my non-negotiable routine now.',
      },
    ],
  },
  {
    id: 'retinol-eye-gel',
    name: 'Gentle Retinol Eye Gel',
    tagline: 'Nightly firm and smooth',
    description:
      'Encapsulated retinol in a soothing gel base to target fine lines around the eyes with minimal irritation.',
    category: 'under-eye-gels',
    size: '15 ml',
    accent: '#E8E4EF',
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80',
    price: 799,
    ingredients: [
      'Encapsulated retinol 0.15%',
      'Bakuchiol',
      'Squalane',
      'Bisabolol',
      'Peptides',
    ],
    benefits: [
      'Softens fine lines over time',
      'Gentle enough for beginners',
      'Use at night only',
    ],
    variants: [
      {
        id: 're-015',
        label: '0.15%',
        price: 799,
        image:
          'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 're-bakuchiol',
        label: 'Bakuchiol Only',
        price: 749,
        image:
          'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    reviews: [
      {
        id: 're1',
        author: 'Nisha A.',
        rating: 4,
        date: '2026-03-28',
        title: 'Subtle firming',
        body: 'Started slow and my under-eyes look smoother after a month. No peeling.',
      },
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getHeroProduct(): Product {
  return products.find((p) => p.hero) ?? products[0]
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller)
}

export function averageRating(product: Product): number {
  if (product.reviews.length === 0) return 0
  const sum = product.reviews.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / product.reviews.length) * 10) / 10
}
