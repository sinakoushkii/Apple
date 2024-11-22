import { navbarLinks } from '@/constants'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='flex items-center justify-evenly py-3 border-2 w-900'>
        <span className='font-normal text-xs'>apple</span>
        {navbarLinks.map(link=>(
          <Link className='font-normal text-xs' to={link.route}>{link.label}</Link>
        ))}
        <span className='font-normal text-xs'>search</span>
        <span className='font-normal text-xs'>cart</span>
      </div>
    </div>
  )
}

export default Navbar