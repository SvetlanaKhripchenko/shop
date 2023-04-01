import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <p
            style={{
                fontSize: '40px',
                margin: '0.1em',                
            }}
            >КОСМЕТИКА И ГИГИЕНА</p>
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return content
}

export default App