import React from 'react'

const FeedCard = ({tx}) => {
  console.log(tx)
  return (
    <div className="flex md:flex-row flex-col dark:bg-slate-800 bg-slate-200 space-x-2 rounded-xl p-3">
      <div className="rounded-full h-16 w-16 border"></div>
      <div className="flex flex-col">
        <div className="text-xl">{tx?.txType}</div>
      </div>
    </div>

  )
}

export default FeedCard