import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import BusinessRelocation from '../../pages/BusinessRelocation'
import FamilyRelocation from '../../pages/FamilyRelocation'
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
      <Route
        path='business-relocation'
        element={<BusinessRelocation/>}
      />
      <Route
        path='family-relocation'
        element={<FamilyRelocation/>}
      />
     </Routes>
  )
}

export default Main