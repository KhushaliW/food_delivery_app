import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'
import ProductMenu from '../components/ProductMenu'
import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
        </div>
    </div>
  )
}

export default LandingPage