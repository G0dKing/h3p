// Nav.jsx

import { } from 'react'

const Nav = () =>  {
  return (
    <nav className="flex justify-between items-center px-10 py-8">
      <div className="text-white text-lg space-x-4">
        <a href="#" className="hover:text-red-500">HOME</a>
        <a href="#" className="hover:text-red-500">ABOUT</a>
        <a href="#" className="hover:text-red-500">APPS</a>
        <a href="#" className="hover:text-red-500">DESIGN</a>
        <a href="#" className="hover:text-red-500">MUSIC</a>
        <a href="#" className="hover:text-red-500">CONTACT</a>        
      </div>
      <div className="text-white justify-right">
        <a href="#" className="mx-2"><i className="fas fa-shopping-cart"></i></a>
        <a href="#" className="mx-2"><i className="fas fa-search"></i></a>
      </div>
    </nav>
  )
}

export default Nav
