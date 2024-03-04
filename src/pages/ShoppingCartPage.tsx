import { useEffect, useState } from 'react'
import { TCartItem } from '../components/ShoppingItems/ProductDetail'
import ShoppingCartList from '../components/ShoppingCart/ShoppingCartList'

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([])

  useEffect(() => {
    const existingCart = sessionStorage.getItem('cart')
    const cartItems: TCartItem[] = existingCart ? JSON.parse(existingCart) : []
    setCartItems(cartItems)
  }, [])

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
      .toFixed(2)
  }

  const handleBuyButton = () => {
    alert('Thank you for your purchase!')
    sessionStorage.removeItem('cart')
    setCartItems([])
  }

  return (
    <div className='w-4/5 mx-auto'>
      <div>
        <h2 className='text-xl py-4 md:text-3xl'>PixelCart</h2>
        {cartItems.length >= 1
          ? cartItems.map(item => (
              <ShoppingCartList
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                setCartItems={setCartItems}
              />
            ))
          : 'Your shopping cart is empty. Please check our selection of products to see if you find something of interest. Or not...'}
      </div>
      <div className='flex flex-col'>
        {cartItems.length > 0 && (
          <div className='text-end text-sm mt-4 md:text-lg'>
            Total: ${calculateTotal()}
          </div>
        )}
        <button
          className={`bg-green-400 rounded-md px-4 py-2 shadow-sm border mt-4 ${
            cartItems.length === 0 && 'hidden'
          }`}
          onClick={() => handleBuyButton()}
        >
          Buy & pay now
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartPage
