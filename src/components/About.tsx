export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-copy">
        <h2 id="about-heading">Made for Indian homes</h2>
        <p>
          Diksha&apos;s Store brings you trusted Indian cleaning products — from
          Lizol and Harpic to Vim, Surf Excel, and Colin — so every corner of
          your home stays fresh and germ-free.
        </p>
      </div>
      <div className="about-visual" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80"
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
        <span className="brand-name">Diksha&apos;s Store</span>
      </div>
      <p>Indian house cleaning essentials for everyday freshness.</p>
      <p className="footer-note">
        © {new Date().getFullYear()} Diksha&apos;s Store
      </p>
    </footer>
  )
}
