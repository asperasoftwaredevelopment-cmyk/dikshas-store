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
        heading="All products"
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

      <section className="skin-cta" aria-labelledby="skin-cta-heading">
        <div className="skin-cta-inner">
          <p className="eyebrow">Skin test</p>
          <h2 id="skin-cta-heading">Not sure where to start?</h2>
          <p>
            Take our three-question skin test for a Multani Mitti–led ritual
            matched to your type and goals.
          </p>
          <Link to="/skin-test" className="btn btn-primary">
            Take the skin test
          </Link>
        </div>
      </section>

      <About />

      <section className="contact-cta" aria-labelledby="contact-cta-heading">
        <div className="contact-cta-inner">
          <h2 id="contact-cta-heading">Talk to the studio</h2>
          <p>Orders, ingredients, wholesale — we respond within a business day.</p>
          <Link to="/contact" className="btn btn-secondary">
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
