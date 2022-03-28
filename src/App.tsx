import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Users/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </div>
  )
}

export default App
