import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { brand } from '../data/products'
import { useCart } from '../context/CartContext'

export function Header() {
  const { itemCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-name">{brand.name}</span>
      </Link>

      <nav
        className={menuOpen ? 'header-nav is-open' : 'header-nav'}
        aria-label="Primary"
      >
        <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </NavLink>
        <NavLink to="/box" onClick={() => setMenuOpen(false)}>
          Custom Box
        </NavLink>
        <a href="/#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
      </nav>

      <button
        type="button"
        className="cart-trigger"
        onClick={openCart}
        aria-label={`Open cart, ${itemCount} items`}
      >
        <ShoppingBag size={20} strokeWidth={1.75} />
        <span className="cart-label">Cart</span>
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </button>
    </header>
  )
}
