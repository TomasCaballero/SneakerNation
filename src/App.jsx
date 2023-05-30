import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Sneakers from './Pages/Sneakers/Sneakers'
import Details from './Pages/Details/Details'
import { useState } from 'react'
import Cart from './Pages/Cart/Cart'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'


function App() {
  const [arrayCart, setArrayCart] = useState([])
  const [lengthDelCarrito, setLengthDelCarrito] = useState(0)

  console.log(arrayCart)
  console.log(lengthDelCarrito)
  const precioTotal = arrayCart.reduce((acc, prod) => acc + prod.precio, 0)


  return (
    <div className='App'>
      <ScrollToTop/>
      <Navbar arrayCart={arrayCart} lengthDelCarrito={lengthDelCarrito} setArrayCart={setArrayCart} setLengthDelCarrito={setLengthDelCarrito} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sneakers' element={<Sneakers />} />
          <Route path='/sneakers/details/:articulo' element={<Details arrayCart={arrayCart} setArrayCart={setArrayCart} lengthDelCarrito={lengthDelCarrito} setLengthDelCarrito={setLengthDelCarrito} />} />
          <Route path='/cart' element={<Cart arrayCart={arrayCart} lengthDelCarrito={lengthDelCarrito} setArrayCart={setArrayCart} setLengthDelCarrito={setLengthDelCarrito} precioTotal={precioTotal} />} />
        </Routes>
    </div>
  )
}

export default App