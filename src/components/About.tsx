import { Link } from 'react-router-dom'
import { brand } from '../data/products'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-copy">
        <h2 id="about-heading">Earth-born rituals</h2>
        <p>
          {brand.name} crafts botanical skincare rooted in Multani Mitti and
          time-honoured botanicals — clean formulas, sensorial textures, and
          results you can feel.
        </p>
        <Link to="/box" className="btn btn-secondary">
          Build a custom box
        </Link>
      </div>
      <div className="about-visual" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
          alt=""
        />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-name">{brand.name}</span>
      </div>
      <p>{brand.tagline}</p>
      <nav className="footer-nav" aria-label="Footer">
        <Link to="/shop">Shop</Link>
        <Link to="/box">Custom Box</Link>
        <Link to="/product/multani-mitti-soap">Multani Mitti</Link>
      </nav>
      <p className="footer-note">
        © {new Date().getFullYear()} {brand.name}
      </p>
    </footer>
  )
}
