import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavLinks = () => {
  return (
    <>
      <NavLink to='/'>
        <div className='hover:text-white text-xl md:text-md sm:text-sm'>
          Products
        </div>
      </NavLink>
      <NavLink to='shopping-cart'>
        <div className='hover:text-white text-xl md:text-md sm:text-sm'>
          Cart
        </div>
      </NavLink>
      <NavLink to='login'>
        <div className='hover:text-white text-xl md:text-md sm:text-sm'>
          Login
        </div>
      </NavLink>
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='flex justify-end md:w-1/3'>
        <div></div>
        <div className='text-gray-200 hidden w-full justify-between md:flex'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X color='#E4E7EB' /> : <Menu color='#E4E7EB' />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='text-gray-200 flex flex-col basis-full items-center '>
          <NavLinks />
        </div>
      )}
    </>
  )
}

export default Nav
