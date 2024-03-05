import { TCartItem } from '../ShoppingItems/ProductDetail'

const ShoppingCartItem: React.FC<TCartItem> = ({ image, title, price }) => {
  return (
    <div className='flex items-center justify-between border-b p-4'>
      <img
        src={image}
        alt={title}
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-lg'>{title}</h3>
      <p className='text-gray-700'></p>
      <p className='text-gray-700'>${price}</p>
    </div>
  )
}

export default ShoppingCartItem
