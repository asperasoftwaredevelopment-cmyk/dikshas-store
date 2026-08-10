import { Link } from 'react-router-dom'
import { brand, getHeroProduct } from '../data/products'
import { formatPrice } from '../utils/format'

export function Hero() {
  const hero = getHeroProduct()

  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="hero-veil" />
      </div>

      <div className="hero-content">
        <p className="brand-lockup">{brand.name}</p>
        <h1 id="hero-heading">{hero.name}</h1>
        <p className="hero-sub">
          Our bestselling Multani Mitti soap — clay-powered cleanse for clear,
          balanced skin. From {formatPrice(hero.price)}.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to={`/product/${hero.id}`}>
            Shop bestseller
          </Link>
          <Link className="btn btn-ghost" to="/shop">
            Explore all
          </Link>
        </div>
      </div>
    </section>
  )
}
