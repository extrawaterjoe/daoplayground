import React from "react"
import { useAccount, useEnsLookup } from "wagmi"

const AddressENS = () => {
  const [{ data, error, loading }, disconnect] = useAccount()
  const [{ data: ensData, error: ensError, loading: ensLoading }, lookupAddress] = useEnsLookup({
    address: data?.address,
  })
  return (
    <div className="flex w-full justify-center">
      {ensData ? ensData : data?.address.substring(0, 6) + "..." + data?.address.substring(data?.address.length - 4)}
    </div>
  )
}

export default AddressENS
