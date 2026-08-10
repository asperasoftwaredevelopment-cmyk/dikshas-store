import { Link } from 'react-router-dom'
import { brand } from '../data/products'

export function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-hero about-page-hero" aria-labelledby="about-page-heading">
        <p className="eyebrow">About us</p>
        <h1 id="about-page-heading">{brand.name}</h1>
        <p>
          Botanical skincare rooted in Multani Mitti — clay from the earth,
          crafted into daily rituals for clear, calm, protected skin.
        </p>
      </section>

      <section className="about-story" aria-labelledby="story-heading">
        <div className="about-story-copy">
          <h2 id="story-heading">Born from clay</h2>
          <p>
            Multani Mitti — Fuller&apos;s earth — has clarified skin for
            generations. We refine that tradition into a modern ritual: our
            bestselling Multani Mitti Soap, then a full line of face washes,
            serums, moisturizers, sunscreens, lip tints, and under-eye gels.
          </p>
          <p>
            Every formula balances botanical actives with sensorial textures —
            no harsh stripping, no empty claims. Just earth-born care you can
            feel.
          </p>
        </div>
        <div className="about-story-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1400&q=80"
            alt=""
          />
        </div>
      </section>

      <section className="about-pillars" aria-labelledby="pillars-heading">
        <div className="section-intro">
          <h2 id="pillars-heading">What we stand for</h2>
          <p>Three promises behind every bottle and bar.</p>
        </div>
        <div className="pillars-grid">
          <article>
            <h3>Clay-first clarity</h3>
            <p>
              Multani Mitti anchors our hero cleanse — oil control without
              compromising the barrier.
            </p>
          </article>
          <article>
            <h3>Honest botanicals</h3>
            <p>
              Recognizable ingredients, thoughtful concentrations, and textures
              made for everyday use.
            </p>
          </article>
          <article>
            <h3>Your ritual, your box</h3>
            <p>
              Build a custom box of 3–6 products and save — or take our skin
              test for a guided edit.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta-band" aria-label="Explore">
        <h2>Start with Multani Mitti</h2>
        <p>Shop the bestseller, build a box, or discover your match.</p>
        <div className="hero-actions">
          <Link to="/product/multani-mitti-soap" className="btn btn-primary">
            Shop Multani Mitti
          </Link>
          <Link to="/skin-test" className="btn btn-secondary">
            Take the skin test
          </Link>
        </div>
      </section>
    </div>
  )
}
