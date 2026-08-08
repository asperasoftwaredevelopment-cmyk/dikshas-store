import { useState } from 'react'
import { Plus } from 'lucide-react'
import { categories, products, type Category } from '../data/products'
import { useCart } from '../context/CartContext'

function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function ProductGrid() {
  const [active, setActive] = useState<Category>('all')
  const { addItem } = useCart()

  const filtered =
    active === 'all'
      ? products
      : products.filter((p) => p.category === active)

  return (
    <section className="shop" id="shop" aria-labelledby="shop-heading">
      <div className="section-intro">
        <h2 id="shop-heading">Shop Indian cleaning essentials</h2>
        <p>Trusted brands for kitchen, bathroom, laundry, and floors.</p>
      </div>

      <div className="filters" role="tablist" aria-label="Product categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={active === cat.id ? 'filter is-active' : 'filter'}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((product, index) => (
          <article
            key={product.id}
            className="product"
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div
              className="product-image"
              style={{ backgroundColor: product.accent }}
            >
              <img src={product.image} alt="" loading="lazy" />
            </div>
            <div className="product-body">
              <div className="product-meta">
                <span>{product.size}</span>
                <span aria-hidden="true">·</span>
                <span>{product.scent}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">{formatPrice(product.price)}</span>
                <button
                  type="button"
                  className="btn btn-add"
                  onClick={() => addItem(product)}
                >
                  <Plus size={16} strokeWidth={2.25} />
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
