import React from "react"
import { BiCopy } from "react-icons/bi"
import { useEnsName } from "wagmi"

const AddressEns = ({ address }) => {
  const { data: ensName, isError, isLoading: isEnsNameLoading } = useEnsName({
    address,
  })

  if (isEnsNameLoading || !address) {
    return (
      <div className="flex w-full justify-center h-10 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse"></div>
    )
  }

  return (
    <div className="flex flex-row space-x-1 h-10 items-center justify-center w-full">
      <div className={ensName && ensName.length > 18 ? "text-md" : "text-xl"}>
        {ensName ? ensName : address.substring(0, 6) + "..." + address.substring(address.length - 4)}
      </div>
      <button className="flex flex-row space-x-1 bg-slate-200 hover:border-teal-300 dark:bg-slate-800 dark:hover:bg-slate-700 border dark:border-slate-800 dark:hover:border-teal-300 text-xs p-2 rounded-full">
        <BiCopy size={16} />
      </button>
    </div>
  )
}

export default AddressEns
