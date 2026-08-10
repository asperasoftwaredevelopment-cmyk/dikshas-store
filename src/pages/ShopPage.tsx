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
        heading="Shop Auréva"
        subheading="Browse every category — or filter to find your next ritual."
      />
    </div>
  )
}
