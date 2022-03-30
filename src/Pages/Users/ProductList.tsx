import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListProduct from '../../components/ListProduct'

type Props = {}

const ProductList = (props: Props) => {
  return (
    <div>
        <ListProduct />
    </div>
  )
}

export default ProductList