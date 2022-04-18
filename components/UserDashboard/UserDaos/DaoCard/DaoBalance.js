import React from "react"
import { useBalance } from "wagmi"

const DaoBalance = ({ safe }) => {
  const [{ data, error, loading }, getBalance] = useBalance({
    addressOrName: safe,
  })

  return (
    <div className="flex flex-row space-x-2 text-xl">
      <div>{data?.formatted}</div>
      <div>ETH</div>
    </div>
  )
}

export default DaoBalance
