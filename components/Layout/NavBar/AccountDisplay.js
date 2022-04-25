import React from "react"
import Link from "next/link"
// import { useAccount, useEnsLookup } from "wagmi"
import {
  useAccount,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'

const AccountDisplay = () => {
  const { data: account, isError, isLoading } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ addressOrName: account?.address })
  const { data: ensName } = useEnsName({ address: account?.address })


  if (account?.address && !isLoading) {
    return (
      <Link href={`/${account?.address}`}>
        <a>
          <div className="relative p-2 rounded-full border bg-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800">
            {ensName
              ? ensName
              : account?.address.substring(0, 6) + "..." + account?.address.substring(account?.address.length - 4)}
          </div>
        </a>
      </Link>
    )
  }

  return (
    <Link href="/">
      <a>
        <div className="relative p-2 rounded-full border bg-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800">
          connect
        </div>
      </a>
    </Link>
  )
}

export default AccountDisplay
