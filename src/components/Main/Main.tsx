import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Investment from '../../pages/Investment'
import Services from '../../pages/Services'

const Main = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home/>}
      /> 
      <Route
        path='about'
        element={<About/>}
      />
      <Route
        path='services'
        element={<Services/>}
      />
       <Route
        path='investment'
        element={<Investment/>}
      />
     </Routes>
  )
}

export default Main