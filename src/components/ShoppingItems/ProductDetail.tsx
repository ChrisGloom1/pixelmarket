import { useState } from 'react'

// Exported to reuse outside of component.
// Could be sent to a file where types are used more than once.
export type TProductDetailProps = {
  id: number
  title: string
  price: number
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

// Exported to reuse outside of component.
// Could be sent to a file where types are used more than once.
export type TCartItem = {
  id: number
  quantity: number
  image: string
  title: string
  price: number
  updateCart?: (cartItems: TCartItem[]) => void
}

const ProductDetail: React.FC<TProductDetailProps> = ({
  id,
  title,
  price,
  description,
  image,
  rating,
}) => {
  const [productBoughtFeedback, setProductBoughtFeedback] =
    useState<boolean>(false)

  const addToCart = (cartItem: TCartItem) => {
    const existingCart = sessionStorage.getItem('cart')
    const cartItems: TCartItem[] = existingCart ? JSON.parse(existingCart) : []

    // Check if the item with the same ID already exists in the cart
    const existingItemIndex = cartItems.findIndex(
      item => item.id === cartItem.id
    )

    if (existingItemIndex !== -1) {
      // If the item exists, increment its quantity
      cartItems[existingItemIndex].quantity += 1
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      cartItems.push({ ...cartItem, quantity: 1 })
    }

    // Update the cart in the session storage
    sessionStorage.setItem('cart', JSON.stringify(cartItems))

    setProductBoughtFeedback(true)
    setTimeout(() => {
      setProductBoughtFeedback(false)
    }, 2000)
  }

  return (
    <div
      className='w-4/5 mx-auto mt-8 p-4 bg-white'
      key={id}
    >
      <div className='flex flex-col items-start justify-between lg:flex-row lg:w-full '>
        <div className='w-full mb-4 border p-4 rounded-3xl shadow-md mr-0 md:w-full md:mr-4 md:mb-0'>
          <img
            src={image}
            alt={title}
            // object-contain makes sure the aspect ratio stays intact
            className='w-full max-h-96 object-contain'
          />
        </div>
        <div className='w-full md:pl-4 md:mt-4'>
          <h1 className='text-3xl font-bold mb-4'>{title}</h1>
          <p className='text-gray-700 mb-4'>{description}</p>
          <div className='flex justify-between my-6 flex-col lg:flex-row'>
            <div className='flex items-center mb-2 text-gray-700'>
              <span className='mr-2'>Rating:</span>
              <span>
                {rating.rate} / 5 ({rating.count})
              </span>
            </div>
            <p className='text-lg mt-2 md:mt-0'>${price.toFixed(2)}</p>
          </div>
          <button
            className='bg-sky-700 text-white py-2 px-4 rounded-3xl hover:bg-sky-600'
            onClick={() => addToCart({ id, title, price, image, quantity: 1 })}
          >
            Add to cart
          </button>
        </div>
      </div>
      {productBoughtFeedback && (
        <div className='text-center mt-4 bg-green-400 rounded-xl border py-4 shadow-md'>
          Product added to cart!
        </div>
      )}
    </div>
  )
}

export default ProductDetail
