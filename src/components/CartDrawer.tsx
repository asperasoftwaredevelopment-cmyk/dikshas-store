import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'

export function CartDrawer() {
  const {
    items,
    isOpen,
    subtotal,
    closeCart,
    removeItem,
    setQuantity,
    clearCart,
  } = useCart()

  return (
    <>
      <div
        className={isOpen ? 'cart-backdrop is-open' : 'cart-backdrop'}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={isOpen ? 'cart-drawer is-open' : 'cart-drawer'}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
      >
        <div className="cart-header">
          <h2>Your cart</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={closeCart}
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(({ key, product, variant, quantity }) => (
                <li key={key} className="cart-item">
                  <div
                    className="cart-thumb"
                    style={{ backgroundColor: product.accent }}
                  >
                    <img src={variant.image || product.image} alt="" />
                  </div>
                  <div className="cart-item-body">
                    <div className="cart-item-top">
                      <h3>
                        {product.name}
                        <span className="cart-variant">{variant.label}</span>
                      </h3>
                      <button
                        type="button"
                        className="text-btn"
                        onClick={() => removeItem(key)}
                      >
                        Remove
                      </button>
                    </div>
                    <p className="cart-item-price">
                      {formatPrice(variant.price)}
                    </p>
                    <div className="qty">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity(key, quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQuantity(key, quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <button type="button" className="btn btn-primary btn-block">
                Checkout
              </button>
              <button
                type="button"
                className="text-btn clear-btn"
                onClick={clearCart}
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
