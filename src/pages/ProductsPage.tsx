import ProductList from '../components/ShoppingItems/ProductList'

const ProductsPage = () => {
  return (
    <div className='mx-auto w-4/5 mb-8 '>
      <h2 className='text-xl py-4 md:text-3xl'>PixelProducts</h2>
      <div className='flex flex-col'>
        <ProductList />
      </div>
    </div>
  )
}

export default ProductsPage
