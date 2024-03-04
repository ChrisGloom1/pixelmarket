import { Link } from 'react-router-dom'

type TProductItemProps = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

const ProductItem: React.FC<TProductItemProps> = ({
  id,
  title,
  price,
  description,
  image,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className='w-full border rounded-xl p-4 flex flex-col shadow-md sm:max-w-72'
    >
      <div className='mb-2 h-36 md:h-48'>
        <img
          src={image}
          alt='product image'
          className='w-full h-full object-contain'
        />
      </div>
      <h4 className='text-sm my-2 font-semibold line-clamp-2 md:text-lg'>
        {title}
      </h4>
      <p className='text-xs text-gray-500 mb-4 overflow-hidden line-clamp-2 md:text-sm'>
        {description}
      </p>
      <div className='flex justify-between items-center mt-auto'>
        <p className='text-sm md:text-lg'>${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default ProductItem
