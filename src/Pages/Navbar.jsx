import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className='bg-[#1e1e2f] py-5 px-15 flex justify-end text-2xl gap-5 text-white'>
      <NavLink to="/" className="border-b-2 active:border-sky-800 active:text-sky-800">Home</NavLink>
      <NavLink to="/about" className="border-b-2 active:border-sky-800 active:text-sky-800">About</NavLink>
    </nav>
  )
}

export default Navbar
