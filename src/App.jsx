import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className= "bg-gray-500">
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={'Home'}></Route>
                <Route path='/about' element={'About'}></Route>
                <Route path='/services' element={'Services'}></Route>
                <Route path='/contact' element={'Contact'}></Route>
            </Routes>
        </Router>
    </main>
  )
}

export default App