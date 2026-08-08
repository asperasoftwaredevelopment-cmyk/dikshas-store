export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="hero-veil" />
      </div>

      <div className="hero-content">
        <p className="brand-lockup">Diksha&apos;s Store</p>
        <h1 id="hero-heading">Clean homes, the Indian way.</h1>
        <p className="hero-sub">
          Everyday cleaning essentials from brands Indian families trust — for
          kitchen, bathroom, laundry, and floors.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#shop">
            Shop products
          </a>
        </div>
      </div>
    </section>
  )
}
