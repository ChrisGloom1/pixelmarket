import { useEffect, useState } from 'react'
import { TCartItem } from '../components/ShoppingItems/ProductDetail'
import ShoppingCartList from '../components/ShoppingCart/ShoppingCartList'

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([])
  const [numOfWordsInTitle, setNumOfWordsInTitle] = useState<number>(3)

  useEffect(() => {
    const existingCart: string | null = sessionStorage.getItem('cart')
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

  const truncateTitle = (title: string, numOfWords: number) => {
    const words: string[] = title.trim().split(' ') // Split string by spaces
    const truncated: string = words.slice(0, numOfWords).join(' ') // Truncate to the specified number of words

    // Check if the length of the original title is less than or equal to the length of the truncated title
    if (words.length <= numOfWords) {
      return title
    } else {
      return truncated + '...'
    }
  }

  useEffect(() => {
    const handleTitleLengthChange = () => {
      if (window.innerWidth < 400) {
        setNumOfWordsInTitle(3)
      } else if (window.innerWidth < 768) {
        setNumOfWordsInTitle(8)
      } else if (window.innerWidth < 1024) {
        setNumOfWordsInTitle(12)
      } else {
        setNumOfWordsInTitle(100)
      }
    }
    handleTitleLengthChange()
    window.addEventListener('resize', handleTitleLengthChange)
  }, [])

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
                title={truncateTitle(item.title, numOfWordsInTitle)}
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
          className={`bg-green-400 rounded-md px-4 py-2 shadow-sm border mt-4 hover:bg-green-500 ${
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
