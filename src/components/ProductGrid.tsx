import { Link } from 'react-router-dom'
import {
  averageRating,
  categoryLabels,
  products,
  type Category,
  type Product,
} from '../data/products'
import { formatPrice } from '../utils/format'
import { Star } from 'lucide-react'

type ProductCardProps = {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const rating = averageRating(product)
  const fromPrice = Math.min(...product.variants.map((v) => v.price))

  return (
    <article
      className="product"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <Link to={`/product/${product.id}`} className="product-link">
        <div
          className="product-image"
          style={{ backgroundColor: product.accent }}
        >
          <img src={product.image} alt="" loading="lazy" />
          {product.bestseller && (
            <span className="product-badge">Bestseller</span>
          )}
        </div>
        <div className="product-body">
          <div className="product-meta">
            <span>{categoryLabels[product.category]}</span>
            <span aria-hidden="true">·</span>
            <span>{product.size}</span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.tagline}</p>
          <div className="product-footer">
            <span className="price">
              {product.variants.length > 1
                ? `From ${formatPrice(fromPrice)}`
                : formatPrice(fromPrice)}
            </span>
            {rating > 0 && (
              <span className="rating-chip">
                <Star size={12} fill="currentColor" strokeWidth={0} />
                {rating}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

type ProductGridProps = {
  active: Category
  onFilterChange: (cat: Category) => void
  heading?: string
  subheading?: string
  showFilters?: boolean
  limit?: number
}

export function ProductGrid({
  active,
  onFilterChange,
  heading = 'Shop by ritual',
  subheading = 'Soaps, serums, sunscreens, and more — curated for everyday glow.',
  showFilters = true,
  limit,
}: ProductGridProps) {
  const filtered =
    active === 'all'
      ? products
      : products.filter((p) => p.category === active)

  const list = typeof limit === 'number' ? filtered.slice(0, limit) : filtered

  return (
    <section className="shop" id="shop" aria-labelledby="shop-heading">
      <div className="section-intro">
        <h2 id="shop-heading">{heading}</h2>
        <p>{subheading}</p>
      </div>

      {showFilters && (
        <div className="filters" role="tablist" aria-label="Product categories">
          {(
            [
              'all',
              'soaps',
              'face-washes',
              'serums',
              'moisturizers',
              'sunscreens',
              'lip-tints',
              'under-eye-gels',
            ] as Category[]
          ).map((id) => {
            const label =
              id === 'all'
                ? 'All'
                : categoryLabels[id as Exclude<Category, 'all'>]
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active === id}
                className={active === id ? 'filter is-active' : 'filter'}
                onClick={() => onFilterChange(id)}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      <div className="product-grid">
        {list.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  )
}
