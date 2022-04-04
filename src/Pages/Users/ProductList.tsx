import React, { useEffect, useState } from 'react'
import { listCate } from '../../api/category'
import { list } from '../../api/product'
import ListProduct from '../../components/ListProduct'
import { CategoryType } from '../../Types/Category'
import { ProductType } from '../../Types/Product'

type Props = {}

const ProductList = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await list()
      setProducts(data)
    }  
    getProduct()
  }, [])

  useEffect(() => {
    const getCategory = async () => {
      const {data} = await listCate()
      console.log(data);
      setCategories(data)
    }
    getCategory()
  }, [])

  return (
    <div>
        <ListProduct categories={categories} products={products}/>
    </div>
  )
}

export default ProductList