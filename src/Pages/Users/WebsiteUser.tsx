import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const WebsiteUser = (props: Props) => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default WebsiteUser