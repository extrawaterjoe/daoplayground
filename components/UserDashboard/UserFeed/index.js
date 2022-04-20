import React from "react"
import { useRouter } from "next/router"
import FeedCard from "./FeedCard"

import { useUserStore } from "/stores/useUserStore"

import * as api from "/query"
import { useQuery } from "react-query"

const UserFeed = ({ data }) => {
  const daos = React.useMemo(() => {
    return data?.safes.map((dao, i) => (
      <div
        className="dark:bg-slate-800 bg-slate-100 border border-slate-100 dark:border-slate-800 hover:dark:border-white hover:border-white hover:dark:bg-slate-700 hover:bg-slate-200 rounded-full p-1"
        onClick={() => setDao(dao)}
        key={i}
      >
        {dao?.substring(0, 6) + "..." + dao.substring(dao.length - 4)}
      </div>
    ))
  }, [data])

  const expandedDao = useUserStore(state => state.expandedDao)
  const expandedDaoBadge = React.useMemo(() => {
    return (
      <div className="dark:bg-slate-800 bg-slate-100 border border-slate-100 dark:border-slate-800 rounded-full p-1">
        {expandedDao?.substring(0, 6) + "..." + expandedDao?.substring(expandedDao?.length - 4)}
      </div>
    )
  }, [expandedDao])

  const [dao, setDao] = React.useState(null)
  React.useEffect(() => {
    if (!expandedDao) {
      setDao(null)
    }
    if (expandedDao) {
      setDao(expandedDao)
    }
  }, [expandedDao])

  const router = useRouter()

  const reset = React.useCallback(() => {
    setDao(null)
  }, [setDao])

  React.useEffect(() => {
    router.events.on("routeChangeStart", reset)
    return () => router.events.off("routeChangeStart", reset)
  }, [reset, router.events])

  const { data: txs, status } = useQuery(["txs", dao], () => api.allDaoTx(dao), {
    enabled: !!dao,
    staleTime: 190000,
  })

  const daoTxs = txs?.results?.map((tx, i) => <FeedCard tx={tx} key={i} />)

  return (
    <div className="flex w-full flex-col p-3 lg:w-2/5 space-y-3">
      {/* <div className="text-3xl">feed</div> */}
      {/* {!expandedDao ? <div className="flex flex-row space-x-2 overflow-x-auto no-scrollbar">{daos}</div> : null} */}
      <div className="top-20 flex flex-row space-x-2 overflow-x-auto no-scrollbar dark:bg-slate-900 bg-slate-200">
        <div className="space-x-3 dark:bg-slate-800 bg-slate-100 border border-slate-100 dark:border-slate-800 hover:dark:border-white hover:border-white hover:dark:bg-slate-700 hover:bg-slate-200 rounded-xl p-1">
        <span>🔥</span><span>hot</span>
        </div>
        <div className="space-x-3 dark:bg-slate-800 bg-slate-100 border border-slate-100 dark:border-slate-800 hover:dark:border-white hover:border-white hover:dark:bg-slate-700 hover:bg-slate-200 rounded-xl p-1">
        <span>💙</span><span>following</span>
        </div>
        <div className="space-x-3 dark:bg-slate-800 bg-slate-100 border border-slate-100 dark:border-slate-800 hover:dark:border-white hover:border-white hover:dark:bg-slate-700 hover:bg-slate-200 rounded-xl p-1">
        <span>⭐</span><span>favorites</span>
        </div>
      </div>
      {/* could be daoTxs or feed items  */}
      {daoTxs}
    </div>
  )
}

export default UserFeed
