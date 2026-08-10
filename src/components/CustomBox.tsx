import { useMemo, useState } from 'react'
import { Check, Gift, Minus, Plus } from 'lucide-react'
import {
  categoryLabels,
  products,
  type Category,
  type Product,
  type Variant,
} from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'

const BOX_MIN = 3
const BOX_MAX = 6
const BOX_DISCOUNT = 0.1

type BoxPick = {
  product: Product
  variant: Variant
  quantity: number
}

function pickKey(productId: string, variantId: string) {
  return `${productId}::${variantId}`
}

export function CustomBox() {
  const { addItem, openCart } = useCart()
  const [filter, setFilter] = useState<Category>('all')
  const [picks, setPicks] = useState<Record<string, BoxPick>>({})
  const [added, setAdded] = useState(false)

  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.category === filter)

  const pickList = useMemo(() => Object.values(picks), [picks])
  const totalItems = pickList.reduce((s, p) => s + p.quantity, 0)
  const subtotal = pickList.reduce(
    (s, p) => s + p.variant.price * p.quantity,
    0,
  )
  const discount = totalItems >= BOX_MIN ? subtotal * BOX_DISCOUNT : 0
  const total = subtotal - discount
  const canCheckout = totalItems >= BOX_MIN && totalItems <= BOX_MAX

  function toggleProduct(product: Product) {
    const variant = product.variants[0]
    const key = pickKey(product.id, variant.id)
    setPicks((prev) => {
      if (prev[key]) {
        const next = { ...prev }
        delete next[key]
        return next
      }
      const currentCount = Object.values(prev).reduce(
        (s, p) => s + p.quantity,
        0,
      )
      if (currentCount >= BOX_MAX) return prev
      return {
        ...prev,
        [key]: { product, variant, quantity: 1 },
      }
    })
  }

  function setVariant(product: Product, variant: Variant) {
    setPicks((prev) => {
      const existingKey = Object.keys(prev).find((k) =>
        k.startsWith(`${product.id}::`),
      )
      if (!existingKey) return prev
      const next = { ...prev }
      const old = next[existingKey]
      delete next[existingKey]
      next[pickKey(product.id, variant.id)] = {
        product,
        variant,
        quantity: old.quantity,
      }
      return next
    })
  }

  function changeQty(key: string, delta: number) {
    setPicks((prev) => {
      const item = prev[key]
      if (!item) return prev
      const nextQty = item.quantity + delta
      if (nextQty <= 0) {
        const next = { ...prev }
        delete next[key]
        return next
      }
      const others = Object.entries(prev)
        .filter(([k]) => k !== key)
        .reduce((s, [, p]) => s + p.quantity, 0)
      if (others + nextQty > BOX_MAX) return prev
      return { ...prev, [key]: { ...item, quantity: nextQty } }
    })
  }

  function addBoxToCart() {
    if (!canCheckout) return
    pickList.forEach((pick) => {
      addItem(pick.product, pick.variant, pick.quantity)
    })
    setAdded(true)
    openCart()
    window.setTimeout(() => setAdded(false), 2000)
  }

  const cats: Category[] = [
    'all',
    'soaps',
    'face-washes',
    'serums',
    'moisturizers',
    'sunscreens',
    'lip-tints',
    'under-eye-gels',
  ]

  return (
    <section className="custom-box" aria-labelledby="box-heading">
      <div className="section-intro box-intro">
        <p className="eyebrow">
          <Gift size={16} /> Build Your Custom Skincare Box
        </p>
        <h1 id="box-heading">Curate your ritual</h1>
        <p>
          Pick {BOX_MIN}–{BOX_MAX} products and save {BOX_DISCOUNT * 100}% on
          your personalized box. Multani Mitti soap pairs beautifully with
          almost everything.
        </p>
      </div>

      <div className="box-layout">
        <div className="box-catalog">
          <div className="filters" role="tablist" aria-label="Filter products">
            {cats.map((id) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                className={filter === id ? 'filter is-active' : 'filter'}
                onClick={() => setFilter(id)}
              >
                {id === 'all'
                  ? 'All'
                  : categoryLabels[id as Exclude<Category, 'all'>]}
              </button>
            ))}
          </div>

          <div className="box-grid">
            {filtered.map((product) => {
              const selectedKey = Object.keys(picks).find((k) =>
                k.startsWith(`${product.id}::`),
              )
              const isSelected = Boolean(selectedKey)
              const pick = selectedKey ? picks[selectedKey] : null

              return (
                <article
                  key={product.id}
                  className={
                    isSelected ? 'box-card is-selected' : 'box-card'
                  }
                >
                  <button
                    type="button"
                    className="box-card-main"
                    onClick={() => toggleProduct(product)}
                    aria-pressed={isSelected}
                  >
                    <div
                      className="box-thumb"
                      style={{ backgroundColor: product.accent }}
                    >
                      <img src={product.image} alt="" loading="lazy" />
                      {isSelected && (
                        <span className="box-check" aria-hidden="true">
                          <Check size={14} />
                        </span>
                      )}
                    </div>
                    <div className="box-card-body">
                      <span className="box-cat">
                        {categoryLabels[product.category]}
                      </span>
                      <h3>{product.name}</h3>
                      <p>{formatPrice(product.price)}</p>
                    </div>
                  </button>

                  {isSelected && pick && (
                    <div className="box-card-controls">
                      {product.variants.length > 1 && (
                        <label className="box-variant">
                          <span className="sr-only">Variant</span>
                          <select
                            value={pick.variant.id}
                            onChange={(e) => {
                              const v = product.variants.find(
                                (x) => x.id === e.target.value,
                              )
                              if (v) setVariant(product, v)
                            }}
                          >
                            {product.variants.map((v) => (
                              <option key={v.id} value={v.id}>
                                {v.label} — {formatPrice(v.price)}
                              </option>
                            ))}
                          </select>
                        </label>
                      )}
                      <div className="qty">
                        <button
                          type="button"
                          aria-label="Decrease"
                          onClick={() =>
                            changeQty(
                              pickKey(product.id, pick.variant.id),
                              -1,
                            )
                          }
                        >
                          <Minus size={14} />
                        </button>
                        <span>{pick.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase"
                          onClick={() =>
                            changeQty(
                              pickKey(product.id, pick.variant.id),
                              1,
                            )
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>

        <aside className="box-summary" aria-live="polite">
          <h2>Your box</h2>
          <p className="box-progress">
            {totalItems} of {BOX_MAX} items
            {totalItems < BOX_MIN && (
              <span> · add {BOX_MIN - totalItems} more</span>
            )}
          </p>
          <div
            className="box-meter"
            role="progressbar"
            aria-valuenow={totalItems}
            aria-valuemin={0}
            aria-valuemax={BOX_MAX}
          >
            <span
              style={{ width: `${(totalItems / BOX_MAX) * 100}%` }}
            />
          </div>

          {pickList.length === 0 ? (
            <p className="box-empty">Select products to start building.</p>
          ) : (
            <ul className="box-picks">
              {pickList.map((pick) => (
                <li key={pickKey(pick.product.id, pick.variant.id)}>
                  <span>
                    {pick.product.name}
                    {pick.variant.label !== 'Classic' &&
                      pick.variant.label !== 'Classic Clay' &&
                      ` · ${pick.variant.label}`}
                    {pick.quantity > 1 && ` ×${pick.quantity}`}
                  </span>
                  <strong>
                    {formatPrice(pick.variant.price * pick.quantity)}
                  </strong>
                </li>
              ))}
            </ul>
          )}

          <div className="box-totals">
            <div>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="box-savings">
                <span>Box savings (10%)</span>
                <span>−{formatPrice(discount)}</span>
              </div>
            )}
            <div className="box-total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-block"
            disabled={!canCheckout}
            onClick={addBoxToCart}
          >
            {added ? 'Added to cart' : 'Add box to cart'}
          </button>
          {!canCheckout && (
            <p className="box-hint">
              Choose at least {BOX_MIN} items to unlock your box discount.
            </p>
          )}
        </aside>
      </div>
    </section>
  )
}
