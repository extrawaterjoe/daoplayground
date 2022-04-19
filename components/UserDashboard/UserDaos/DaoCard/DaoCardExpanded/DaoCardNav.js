import React from "react"

const DaoCardNav = () => {
  return (
    <div className="flex flex-row space-x-2 p-2 my-2 dark:bg-slate-700 bg-slate-300 rounded-xl">
      <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>nfts</div>
      </button>
      <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>tokens</div>
      </button>
      <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>stats</div>
      </button>
      <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>info</div>
      </button>
      {/* <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>notifications</div>
      </button> */}
      {/* <button className="flex flex-col items-center justify-center w-full text-center text-sm border border-slate-100 dark:border-slate-600 hover:border-white dark:hover:border-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500 rounded-lg">
        <div>message</div>
      </button> */}
    </div>
  )
}

export default DaoCardNav
