import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Paths from './paths/Paths'

const App = () => {
  return (
    <div className=' w-full h-full'>
      <div className=" w-full h-full">
        <NavBar />
      </div>
      <div className="">
        <Paths />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
