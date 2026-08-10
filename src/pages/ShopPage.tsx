import { useState } from 'react'
import { ProductGrid } from '../components/ProductGrid'
import type { Category } from '../data/products'

export function ShopPage() {
  const [active, setActive] = useState<Category>('all')

  return (
    <div className="page-shell">
      <ProductGrid
        active={active}
        onFilterChange={setActive}
        heading="All products"
        subheading="Soaps, face washes, serums, moisturizers, sunscreens, lip tints, and under-eye gels."
      />
    </div>
  )
}
