import React from 'react'
import HomeBtn from './HomeBtn'
import AccountDisplay from './AccountDisplay'
import ThemeToggle from './ThemeToggle'

const NavBar = () => {
  return (
    <div className='z-50 flex sticky top-0 flex-row justify-between bg-slate-300 dark:bg-slate-900 space-x-3 p-3'>
      <HomeBtn />
      <div className='flex flex-row space-x-3'>
      <AccountDisplay />
      <ThemeToggle />
      </div>
    </div>
  )
}

export default NavBar