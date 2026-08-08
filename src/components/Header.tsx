import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function Header() {
  const { itemCount, openCart } = useCart()

  return (
    <header className="site-header">
      <a href="#top" className="brand">
        <span className="brand-mark" aria-hidden="true" />
        <span className="brand-name">Diksha&apos;s Store</span>
      </a>

      <nav className="header-nav" aria-label="Primary">
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
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
