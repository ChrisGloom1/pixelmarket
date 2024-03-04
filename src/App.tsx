import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import LoginPage from './pages/LoginPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import Navbar from './components/Header/Header'
import './index.css'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<ProductsPage />}
        />
        <Route
          path='login'
          element={<LoginPage />}
        />
        <Route
          path='shopping-cart'
          element={<ShoppingCartPage />}
        />
        <Route
          path='product/:id'
          element={<ProductDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
