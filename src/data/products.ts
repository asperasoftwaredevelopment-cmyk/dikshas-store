export type Category =
  | 'all'
  | 'kitchen'
  | 'bathroom'
  | 'laundry'
  | 'surfaces'
  | 'floor'

export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: Exclude<Category, 'all'>
  size: string
  scent: string
  image: string
  accent: string
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'surfaces', label: 'Surfaces' },
  { id: 'floor', label: 'Floors' },
]

export const products: Product[] = [
  {
    id: 'lizol-floral',
    name: 'Lizol Disinfectant Floor Cleaner',
    description:
      'Trusted Indian floor cleaner that kills germs and leaves a lasting floral freshness.',
    price: 215,
    category: 'floor',
    size: '975 ml',
    scent: 'Floral',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    accent: '#E8F6F1',
  },
  {
    id: 'harpic-power',
    name: 'Harpic Power Plus Toilet Cleaner',
    description:
      'Thick liquid that removes tough stains and kills germs under the toilet rim.',
    price: 189,
    category: 'bathroom',
    size: '1 L',
    scent: 'Original',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    accent: '#E8FBFF',
  },
  {
    id: 'vim-dishwash',
    name: 'Vim Dishwash Gel',
    description:
      'Cuts through masala and oil residue on utensils, kadhais, and kitchenware.',
    price: 110,
    category: 'kitchen',
    size: '750 ml',
    scent: 'Lemon',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    accent: '#FFF6E0',
  },
  {
    id: 'surf-excel-matic',
    name: 'Surf Excel Matic Front Load',
    description:
      'Front-load detergent powder made for Indian washing machines and tough stains.',
    price: 549,
    category: 'laundry',
    size: '2 kg',
    scent: 'Fresh',
    image:
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
    accent: '#E6F0FF',
  },
  {
    id: 'colin-glass',
    name: 'Colin Glass Cleaner',
    description:
      'Streak-free spray for windows, mirrors, and glass tabletops across the home.',
    price: 99,
    category: 'surfaces',
    size: '500 ml',
    scent: 'Citrus',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    accent: '#EAF7FF',
  },
  {
    id: 'domex-floor',
    name: 'Domex Floor Cleaner',
    description:
      'Strong disinfectant for Indian homes — ideal for tiles, bathrooms, and corridors.',
    price: 175,
    category: 'floor',
    size: '1 L',
    scent: 'Pine',
    image:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    accent: '#EEF8E8',
  },
  {
    id: 'pril-liquid',
    name: 'Pril Dishwashing Liquid',
    description:
      'Concentrated dishwash liquid that handles everyday Indian cooking grease fast.',
    price: 145,
    category: 'kitchen',
    size: '750 ml',
    scent: 'Lime',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dce?auto=format&fit=crop&w=800&q=80',
    accent: '#F5EDE3',
  },
  {
    id: 'dettol-surface',
    name: 'Dettol Surface Disinfectant',
    description:
      'Kills 99.9% of germs on kitchen counters, switches, and high-touch surfaces.',
    price: 199,
    category: 'surfaces',
    size: '500 ml',
    scent: 'Crisp',
    image:
      'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=800&q=80',
    accent: '#F3ECFF',
  },
  {
    id: 'comfort-fabric',
    name: 'Comfort Fabric Conditioner',
    description:
      'Softens clothes after every wash and keeps that fresh feeling through the day.',
    price: 235,
    category: 'laundry',
    size: '860 ml',
    scent: 'Morning dew',
    image:
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
    accent: '#F0E8FF',
  },
  {
    id: 'gainda-phenyl',
    name: 'Gainda White Phenyl',
    description:
      'Classic Indian phenyl for floors and drains — strong clean, long-lasting fragrance.',
    price: 85,
    category: 'floor',
    size: '1 L',
    scent: 'Jasmine',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    accent: '#E8F0FF',
  },
]
