import React from "react"
import Link from "next/link"
import { useEnsLookup } from "wagmi"

const DaoMemberBtn = ({ member }) => {
  // const [{ data: ensData, error: ensError, loading: ensLoading }, lookupAddress] = useEnsLookup({
  //   address: member,
  // })

  return (
    <Link href={`${member}`}>
      <a>
        <div className="p-1 m-1 rounded-full dark:bg-slate-700 bg-slate-100">
          {member.substring(0, 4) + "..." + member.substring(member.length - 4)}
        </div>
      </a>
    </Link>
  )
}

export default DaoMemberBtn
