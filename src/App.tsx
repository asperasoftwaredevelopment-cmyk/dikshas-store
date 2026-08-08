import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProductGrid } from './components/ProductGrid'
import { About, Footer } from './components/About'
import { CartDrawer } from './components/CartDrawer'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <ProductGrid />
          <About />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
