import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const More = ({ darkMode, setDarkMode}) => {
  return (
    <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer />
    </div>
  )
}

export default More