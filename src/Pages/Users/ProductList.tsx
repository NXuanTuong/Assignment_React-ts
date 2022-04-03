import React, { useEffect, useState } from 'react'
import { list } from '../../api/product'
import ListProduct from '../../components/ListProduct'
import { ProductType } from '../../Types/Product'

type Props = {}

const ProductList = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await list()
      setProducts(data)
    }  
    getProduct()
  }, [])

  return (
    <div>
        <ListProduct products={products}/>
    </div>
  )
}

export default ProductList