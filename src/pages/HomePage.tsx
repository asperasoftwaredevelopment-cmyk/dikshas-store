import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { ProductGrid, ProductCard } from '../components/ProductGrid'
import { About } from '../components/About'
import { getBestsellers, getHeroProduct, type Category } from '../data/products'
import { formatPrice } from '../utils/format'

export function HomePage() {
  const [active, setActive] = useState<Category>('all')
  const hero = getHeroProduct()
  const bestsellers = getBestsellers()

  return (
    <>
      <Hero />

      <section className="featured-bestseller" aria-labelledby="feat-heading">
        <div
          className="featured-media"
          style={{ backgroundColor: hero.accent }}
        >
          <img src={hero.image} alt="" />
        </div>
        <div className="featured-copy">
          <p className="eyebrow">Bestseller</p>
          <h2 id="feat-heading">{hero.name}</h2>
          <p>
            Purified Multani Mitti meets nourishing oils for a clarifying cleanse
            that never feels harsh. Five flavour variants — from Classic Clay to
            Rose and Turmeric.
          </p>
          <p className="featured-price">From {formatPrice(hero.price)}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to={`/product/${hero.id}`}>
              View product
            </Link>
            <Link className="btn btn-ghost" to="/box">
              Add to a custom box
            </Link>
          </div>
        </div>
      </section>

      <section className="bestsellers" aria-labelledby="best-heading">
        <div className="section-intro">
          <h2 id="best-heading">Customer favourites</h2>
          <p>Most-loved formulas for clear, protected, glowing skin.</p>
        </div>
        <div className="product-grid">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <ProductGrid
        active={active}
        onFilterChange={setActive}
        heading="Shop all categories"
        subheading="Soaps, face washes, serums, moisturizers, sunscreens, lip tints, and under-eye gels."
      />

      <section className="box-cta" aria-labelledby="box-cta-heading">
        <div className="box-cta-inner">
          <h2 id="box-cta-heading">Build Your Custom Skincare Box</h2>
          <p>
            Choose 3–6 products, mix variants, and save 10% on your personalized
            ritual.
          </p>
          <Link to="/box" className="btn btn-primary">
            Start building
          </Link>
        </div>
      </section>

      <About />
    </>
  )
}
