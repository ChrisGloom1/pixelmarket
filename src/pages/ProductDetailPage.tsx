import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ShoppingItems/ProductDetail'
import { TProductDetailProps } from '../components/ShoppingItems/ProductDetail'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProductDetailProps | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        )
        setProduct(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProduct()
  }, [])

  return (
    <div className='w-4/5 mx-auto'>
      {product ? (
        <ProductDetail
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetailPage
