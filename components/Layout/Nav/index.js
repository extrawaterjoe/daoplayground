import React from 'react'
import AccountDisplay from './AccountDisplay'
import ThemeToggle from './ThemeToggle'

const Nav = () => {
  return (
    <div className='flex flex-row space-x-3 p-3'>
      <AccountDisplay />
      <ThemeToggle />
    </div>
  )
}

export default Nav