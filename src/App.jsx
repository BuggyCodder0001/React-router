import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import {BrowserRouter , Routes , Route} from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='font-medium'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
