import { TCartItem } from '../ShoppingItems/ProductDetail'

type TShoppingCartListProps = {
  id: number
  image: string
  title: string
  price: number
  quantity: number
  setCartItems?: (cartItems: TCartItem[]) => void
  decrementQuantity?: (id: number) => TCartItem[]
  incrementQuantity?: (id: number) => TCartItem[]
  deleteCartItem?: (id: number) => TCartItem[]
}

const ShoppingCartList: React.FC<TShoppingCartListProps> = ({
  id,
  image,
  title,
  price,
  quantity,
  setCartItems,
}) => {
  const getExistingCart = () => {
    const existingCart = sessionStorage.getItem('cart')
    return existingCart ? JSON.parse(existingCart) : []
  }

  const updateCart = (cartItems: TCartItem[]) => {
    // checks wether setCartItems exists because the function is optional in FC type
    if (setCartItems) {
      setCartItems(cartItems)
      sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }

  const decrementQuantity = (id: number) => {
    const cartItems: TCartItem[] = getExistingCart()
    const existingItemIndex = cartItems.findIndex(item => item.id === id)

    // checks if existingItemIndex isn't -1, which means an item with the ID was found in the cart
    if (existingItemIndex !== -1) {
      // If quantity is 1, remove the item, else decrement quantity with 1
      if (cartItems[existingItemIndex].quantity === 1) {
        cartItems.splice(existingItemIndex, 1)
      } else {
        cartItems[existingItemIndex].quantity -= 1
      }
    }
    updateCart(cartItems)
  }

  const incrementQuantity = (id: number) => {
    const cartItems: TCartItem[] = getExistingCart()
    const productIndex = cartItems.findIndex(item => item.id === id)

    // checks if existingItemIndex isn't -1, which means an item with the ID was found in the cart
    if (productIndex !== -1) {
      cartItems[productIndex].quantity += 1
    }

    // checks wether setCartItems exists because the function is optional in FC type
    if (setCartItems) {
      setCartItems(cartItems)
      sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }

  const deleteCartItem = (id: number) => {
    const cartItems: TCartItem[] = getExistingCart()
    const productIndex = cartItems.findIndex(item => item.id === id)

    // checks if existingItemIndex isn't -1, which means an item with the ID was found in the cart
    if (productIndex !== -1) {
      cartItems.splice(productIndex, 1)
    }

    // checks wether setCartItems exists because the function is optional in FC type
    if (setCartItems) {
      setCartItems(cartItems)
      sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }

  return (
    <div className='flex items-center justify-between border-b'>
      <div className='flex'>
        <div className='mr-4 flex items-center'>
          <img
            src={image}
            alt={title}
            className='w-16 h-16 object-contain min-w-14'
          />
        </div>
        <div>
          <div className='flex-grow mt-2'>
            <h3 className='font-semibold text-xs md:text-lg'>{title}</h3>
            <p className='text-gray-700 text-xs md:text-md'>
              Price: ${price.toFixed(2)}
            </p>
          </div>
          <div className='flex items-center mb-4 mt-2 text-center text-xs'>
            <button
              className='px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300'
              onClick={() => decrementQuantity(id)}
            >
              -
            </button>
            <span className='px-2 py-1'>{quantity} pcs</span>
            <button
              className='px-2 py-1 border rounded bg-gray-200 hover:bg-gray-300'
              onClick={() => incrementQuantity(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='ml-4 flex flex-col items-end justify-center sm:pl-6'>
        <button
          className='px-4 py-2 border rounded bg-red-600 text-white hover:bg-red-700 shadow-sm text-xs md:text-sm'
          onClick={() => deleteCartItem(id)}
        >
          X
        </button>
        <div className='flex flex-col items-end justify-center text-end text-xs md:text-sm'>
          <p className='text-gray-700 pt-2'>
            ${(Number(price.toFixed(2)) * Number(quantity)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartList
