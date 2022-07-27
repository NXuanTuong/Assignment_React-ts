import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getAll, signup } from './api/auth'
import { createCate, listCate, removeCate, updateCate } from './api/category'
import { create, list, remove, update } from './api/product'
import Dashboard from './components/Admin/Dashboard'
import PrivateRouter from './components/client/PrivateRouter'
import CategoryAdd from './Pages/Admin/Categories/CategoryAdd'
import CategoryEdit from './Pages/Admin/Categories/CategoryEdit'
import CategoryManager from './Pages/Admin/Categories/CategoryManager'
import ProductAdd from './Pages/Admin/Products/ProductAdd'
import ProductEdit from './Pages/Admin/Products/ProductEdit'
import ProductManager from './Pages/Admin/Products/ProductManager'
import ListUser from './Pages/Admin/User/ListUser'
import UserEdit from './Pages/Admin/User/UserEdit'
import WebsiteAdmin from './Pages/Admin/WebsiteAdmin'
import Signin from './Pages/auth/Signin'
import Signup from './Pages/auth/Signup'
import AboutPage from './Pages/Users/AboutPage'
import BlogPage from './Pages/Users/BlogPage'
import Cart from './Pages/Users/Cart'
import ContactPage from './Pages/Users/ContactPage'
import HomePage from './Pages/Users/HomePage'
import ProductDetail from './Pages/Users/ProductDetail'
import ProductList from './Pages/Users/ProductList'
import Profile from './Pages/Users/Profile'
import WebsiteUser from './Pages/Users/WebsiteUser'
import { CategoryType } from './Types/Category'
import { ProductType } from './Types/Product'
import { Users } from './Types/User'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [users, setUser] = useState<Users[]>([])
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
      setCategories(data)
    }
    getCategory()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const {data} = await getAll()
      setUser(data)
    }
    getUser()
  }, [])

  const onHandleAdd = async (product: ProductType) => {
    const {data} = await create(product)
    setProducts([...products, data]);
  }

  const onHandRemove = async (id: any) => {
    remove(id)

    setProducts(products.filter(item => item._id !== id))
  }

  const onHandleUpdate = async (product: ProductType) => {
    const {data} = await update(product)
    setProducts(products.map(item => item._id === data.id ? product : item))
  }

  const onHandleSignup = async (user: Users) => {
    const {data} = await signup(user)
    setUser([...users, data])
  }

  const onHandRemoveCate = async (id: any) => {
    removeCate(id)

    setCategories(categories.filter(item => item._id !== id))
  }

  const onHandleAddCate = async (category: CategoryType) => {
    const {data} = await createCate(category)
    setCategories([...categories, data])
  }

  const onHandleUpdateCate = async (category: CategoryType) => {
    const {data} = await updateCate(category)
    setCategories(categories.map(item => item._id === data.id ? category : item))
  }
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
          <Route path='details_product/:id' element={<ProductDetail />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          </Route>

          <Route path='/admin' element={<PrivateRouter><WebsiteAdmin /></PrivateRouter>}>
            <Route index element={<Navigate to='dasboard' />}></Route>
            <Route path='dasboard' element={<Dashboard />}></Route>
            <Route path='products'>
              <Route index element={<ProductManager categories={categories} onRemove={onHandRemove} products={products}/>}></Route>
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />}></Route>
              <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate} />}></Route>
            </Route>

            <Route path='category'>
              <Route index element={<CategoryManager onRemoveCate={onHandRemoveCate} category={categories}/>}></Route>
              <Route path='add' element={<CategoryAdd onAddCate={onHandleAddCate} />}></Route>
              <Route path=':id/edit' element={<CategoryEdit onUpdateCate={onHandleUpdateCate} />}></Route>
            </Route>

            <Route path='users'>
              <Route index element={<ListUser users={users}/>}></Route>
              <Route path=':id/edit' element={<UserEdit />}></Route>
            </Route>
          </Route>

          <Route path='signup' element={<Signup onSignup={onHandleSignup}/>}></Route>
          <Route path='signin' element={<Signin />}></Route>
        </Routes>
    </div>
  )
}

export default App
