import React from "react"

const DaoCard = ({ safe }) => {
  return (
    <div className="flex md:flex-row flex-col dark:bg-slate-800 bg-slate-200 space-x-2 rounded-xl p-3">
      <div className="rounded-full h-36 w-36 border"></div>
      <div className="flex flex-col">
        <div className="text-xl">{safe.substring(0, 6)}...</div>
      </div>
    </div>
  )
}

export default DaoCard
