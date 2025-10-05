import React from 'react'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Clients from './components/Clients'
import Service from './components/Service'
import Review from './components/Review'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Slidebar />
      <Clients />
      <Service />
      <Review />
      <Blog />
      <Footer />
    </>
  )
}

export default App
