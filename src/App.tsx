import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/Users/AboutPage'
import BlogPage from './Pages/Users/BlogPage'
import ContactPage from './Pages/Users/ContactPage'
import HomePage from './Pages/Users/HomePage'
import ProductList from './Pages/Users/ProductList'
import WebsiteUser from './Pages/Users/WebsiteUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<WebsiteUser />}>
            <Route index element={<HomePage />}></Route>
            <Route path='product'>
              <Route index element={<ProductList />}></Route>
            </Route>
            <Route path='about'>
              <Route index element={<AboutPage />}></Route>
            </Route>
            <Route path='blog'>
              <Route index element={<BlogPage />}></Route>
            </Route>
            <Route path='contact'>
              <Route index element={<ContactPage />}></Route>
            </Route>
          </Route>
        </Routes>
    </div>
  )
}

export default App
