import React from 'react'
import { useAccount } from 'wagmi'

const AccountDisplay = () => {
  const [{ data, error, loading }, disconnect] = useAccount()
  
  return (
    <div className="relative p-2 rounded-full bg-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800">
      account
    </div>
  )
}

export default AccountDisplay