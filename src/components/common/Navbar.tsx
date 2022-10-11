import React from 'react'
import ThemeSwitcher from '../ui/ThemeSwitcher'

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-5'>
      <p className='text-xl font-bold'>Calc</p>
      <div className='flex items-end'>
        <p className='mr-5 font-bold text-sm'>THEME</p>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
