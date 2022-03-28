import React from 'react'
import Banner from '../../components/Banner'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Header />
        <Banner />
        <Content />
        <Footer />
    </div>
  )
}

export default HomePage