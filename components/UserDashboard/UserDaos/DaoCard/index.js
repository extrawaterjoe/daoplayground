import React from "react"
import DaoBalance from "./DaoBalance"
import DaoMembers from "./DaoMembers"

const DaoCard = ({ safe }) => {
  return (
    <div className="flex md:flex-row flex-col dark:bg-slate-800 bg-slate-200 space-x-2 rounded-xl p-3">
      <div className="rounded-full h-32 w-32 border"></div>
      <div className="flex flex-col w-2/3">
        <div className="text-xl">{safe?.substring(0, 6)}...</div>
        <DaoBalance safe={safe} />
        <DaoMembers safe={safe} />
      </div>
    </div>
  )
}

export default DaoCard
