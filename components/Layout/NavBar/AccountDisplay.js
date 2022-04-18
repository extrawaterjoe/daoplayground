import React from "react"
import Link from "next/link"
import { useAccount, useEnsLookup } from "wagmi"

const AccountDisplay = () => {
  const [{ data, error, loading }, disconnect] = useAccount()
  const [{ data: ensData, error: ensError, loading: ensLoading }, lookupAddress] = useEnsLookup({
    address: data?.address,
  })

  if (data?.address && !loading) {
    return (
      <Link href={`/user/${data?.address}`}>
        <a>
          <div className="relative p-2 rounded-full border bg-slate-200 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800">
            {ensData
              ? ensData
              : data?.address.substring(0, 6) + "..." + data?.address.substring(data?.address.length - 4)}
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
