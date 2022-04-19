import React from "react"
import Link from "next/link"

const DaoMemberBtn = ({ member }) => {
  return (
    <Link href={`${member}`}>
      <a>
        <div className="p-1 m-1 text-xs rounded-full dark:bg-slate-700 bg-slate-100 border border-slate-100 dark:border-slate-700 dark:hover:bg-slate-600 hover:border-white dark:hover:border-white">
          {member.substring(0, 4) + "..." + member.substring(member.length - 4)}
        </div>
      </a>
    </Link>
  )
}

export default DaoMemberBtn
