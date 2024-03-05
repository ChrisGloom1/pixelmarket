import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

type TProduct = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type TCategory = {
  name: string
}

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [categories, setCategories] = useState<TCategory[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from the API
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)

        // Extract unique categories from the products for filtration
        const allCategories: string[] = response.data.map(
          (product: TProduct) => product.category
        )
        const uniqueCategories: TCategory[] = [...new Set(allCategories)].map(
          category => ({
            name: category,
          })
        )
        setCategories(uniqueCategories)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false
    }
    if (
      searchQuery &&
      !(
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false
    }
    return true
  })

  return (
    <div>
      <div className='flex flex-col-reverse gap-2 md:flex-row'>
        <input
          type='text'
          placeholder='Search by title or description'
          value={searchQuery}
          onChange={handleSearchInputChange}
          className='p-2 border-2 border-gray-300 rounded-md w-full'
        />
        <select
          value={selectedCategory}
          onChange={e => handleCategoryChange(e.target.value)}
          className='p-2 border-2 h-11 border-gray-300 rounded-md'
        >
          <option value=''>All Categories</option>
          {categories.map(category => (
            <option
              key={category.name}
              value={category.name}
            >
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {filteredProducts.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <p className='mt-4 text-center'>No products available or found.</p>
      )}
    </div>
  )
}

export default ProductList
