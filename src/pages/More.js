import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const More = ({ darkMode, setDarkMode}) => {
  return (
    <div >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className='bg-sky-300 min-h-screen dark:bg-gray-900'>
          Nothing Here
        </div>
        <Footer />
    </div>
  )
}

export default More