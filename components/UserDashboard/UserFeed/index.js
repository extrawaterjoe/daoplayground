import React from "react"
import Router from "next/router"
import { useRouter } from "next/router"
import FeedCard from "./FeedCard"

import * as api from "/query"
import { useQuery } from "react-query"

const UserFeed = ({ data }) => {
  const daos = React.useMemo(() => {
    return data?.safes.map((dao, i) => (
      <div className="dark:bg-slate-800 bg-slate-100 rounded-full p-1" onClick={() => setDao(dao)} key={i}>
        {dao?.substring(0, 6) + "..." + dao.substring(dao.length - 4)}
      </div>
    ))
  }, [data])

  const [dao, setDao] = React.useState()
  const router = useRouter()

  const reset = React.useCallback(() => {
    setDao()
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
      <div className="text-3xl">feed</div>
      <div className="flex flex-row space-x-2 overflow-x-auto no-scrollbar">{daos}</div>
      {daoTxs}
    </div>
  )
}

export default UserFeed
