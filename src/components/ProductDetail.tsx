import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, Minus, Plus, Star } from 'lucide-react'
import {
  averageRating,
  categoryLabels,
  getProductById,
  products,
} from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { ProductCard } from './ProductGrid'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = id ? getProductById(id) : undefined
  const { addItem } = useCart()

  const [variantId, setVariantId] = useState<string | null>(null)
  const [qty, setQty] = useState(1)
  const [addedFlash, setAddedFlash] = useState(false)

  useEffect(() => {
    setVariantId(null)
    setQty(1)
    setAddedFlash(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  const selected = useMemo(() => {
    if (!product) return null
    return (
      product.variants.find((v) => v.id === (variantId ?? product.variants[0].id)) ??
      product.variants[0]
    )
  }, [product, variantId])

  if (!product || !selected) {
    return (
      <section className="product-detail missing">
        <h1>Product not found</h1>
        <Link to="/shop" className="btn btn-primary">
          Back to shop
        </Link>
      </section>
    )
  }

  const activeProduct = product
  const activeVariant = selected
  const rating = averageRating(activeProduct)
  const related = products
    .filter(
      (p) => p.category === activeProduct.category && p.id !== activeProduct.id,
    )
    .slice(0, 3)

  function handleAdd() {
    addItem(activeProduct, activeVariant, qty)
    setAddedFlash(true)
    window.setTimeout(() => setAddedFlash(false), 1600)
  }

  function handleBuyNow() {
    addItem(activeProduct, activeVariant, qty)
  }

  return (
    <div className="product-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/shop">{categoryLabels[activeProduct.category]}</Link>
        <span aria-hidden="true">/</span>
        <span>{activeProduct.name}</span>
      </nav>

      <section className="product-detail">
        <div
          className="detail-gallery"
          style={{ backgroundColor: activeProduct.accent }}
        >
          <img
            src={activeVariant.image || activeProduct.image}
            alt={activeProduct.name}
          />
          {activeProduct.bestseller && (
            <span className="product-badge">Bestseller</span>
          )}
        </div>

        <div className="detail-info">
          <p className="detail-eyebrow">
            {categoryLabels[activeProduct.category]} · {activeProduct.size}
          </p>
          <h1>{activeProduct.name}</h1>
          <p className="detail-tagline">{activeProduct.tagline}</p>

          <div className="detail-rating">
            <div className="stars" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.round(rating) ? 'currentColor' : 'none'}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span>
              {rating} · {activeProduct.reviews.length} review
              {activeProduct.reviews.length === 1 ? '' : 's'}
            </span>
          </div>

          <p className="detail-price">{formatPrice(activeVariant.price)}</p>
          <p className="detail-desc">{activeProduct.description}</p>

          <div className="variant-block">
            <p className="variant-label">
              Variant · <strong>{activeVariant.label}</strong>
            </p>
            <div className="variant-list" role="list">
              {activeProduct.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  role="listitem"
                  className={
                    v.id === activeVariant.id ? 'variant is-active' : 'variant'
                  }
                  onClick={() => setVariantId(v.id)}
                >
                  {v.label}
                  <span>{formatPrice(v.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="qty-row">
            <div className="qty">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus size={14} />
              </button>
              <span>{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="detail-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAdd}
            >
              {addedFlash ? (
                <>
                  <Check size={16} /> Added
                </>
              ) : (
                'Add to cart'
              )}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBuyNow}
            >
              Buy now
            </button>
          </div>
        </div>
      </section>

      <section className="detail-panels">
        <div className="panel">
          <h2>Benefits</h2>
          <ul>
            {activeProduct.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {activeProduct.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="reviews" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading">Reviews</h2>
        <div className="review-grid">
          {activeProduct.reviews.map((r) => (
            <article key={r.id} className="review">
              <div className="review-top">
                <strong>{r.author}</strong>
                <span className="stars" aria-label={`${r.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < r.rating ? 'currentColor' : 'none'}
                      strokeWidth={1.5}
                    />
                  ))}
                </span>
              </div>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
              <time dateTime={r.date}>
                {new Date(r.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="related">
          <h2>You may also like</h2>
          <div className="product-grid">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
