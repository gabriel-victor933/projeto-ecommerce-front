import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Suspense, lazy} from "react"
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<div style={{height: "800px"}}>initial</div>} />
        <Route path="/hair" element={<div>hair</div>} />
        <Route path="/body" element={<div>body</div>} />
        <Route path="/face" element={<div>face</div>} />
        <Route path="/kits" element={<div>kits</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/checkout" element={<div>checkout</div>} />
      </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
