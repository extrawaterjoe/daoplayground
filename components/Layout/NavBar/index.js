import React from 'react'
import HomeBtn from './HomeBtn'
import AccountDisplay from './AccountDisplay'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <div className='z-50 flex sticky top-0 flex-row bg-slate-300 dark:bg-slate-900 space-x-3 p-3'>
      <HomeBtn />
      <AccountDisplay />
      <ThemeToggle />
    </div>
  )
}

export default NavBar