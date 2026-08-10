import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import type { Product, Variant } from '../data/products'

export type CartItem = {
  key: string
  product: Product
  variant: Variant
  quantity: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD'; product: Product; variant: Variant; quantity?: number }
  | { type: 'REMOVE'; key: string }
  | { type: 'SET_QTY'; key: string; quantity: number }
  | { type: 'CLEAR' }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'TOGGLE' }

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  itemCount: number
  subtotal: number
  addItem: (product: Product, variant: Variant, quantity?: number) => void
  removeItem: (key: string) => void
  setQuantity: (key: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

function itemKey(productId: string, variantId: string) {
  return `${productId}::${variantId}`
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const key = itemKey(action.product.id, action.variant.id)
      const qty = action.quantity ?? 1
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + qty } : i,
          ),
        }
      }
      return {
        ...state,
        isOpen: true,
        items: [
          ...state.items,
          {
            key,
            product: action.product,
            variant: action.variant,
            quantity: qty,
          },
        ],
      }
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.key),
      }
    case 'SET_QTY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.key !== action.key),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, quantity: action.quantity } : i,
        ),
      }
    }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  const value = useMemo<CartContextValue>(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.variant.price * i.quantity,
      0,
    )

    return {
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem: (product, variant, quantity) =>
        dispatch({ type: 'ADD', product, variant, quantity }),
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      setQuantity: (key, quantity) =>
        dispatch({ type: 'SET_QTY', key, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
      openCart: () => dispatch({ type: 'OPEN' }),
      closeCart: () => dispatch({ type: 'CLOSE' }),
      toggleCart: () => dispatch({ type: 'TOGGLE' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
