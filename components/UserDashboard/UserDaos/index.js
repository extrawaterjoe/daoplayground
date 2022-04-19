import React from "react"
import DaoCard from "./DaoCard"

import { useRouter } from "next/router"

import { useUserStore } from '/stores/useUserStore';

const UserDaos = ({ user, data }) => {
  const userSafes = data?.safes
  const expandedDao = useUserStore(state => state.expandedDao)
  const setExpanedDao = useUserStore(state => state.setExpandedDao)
  const setDaoExpanded = useUserStore(state => state.setDaoExpanded)

  const router = useRouter()

  const reset = React.useCallback(() => {
    if (expandedDao) {
      setDaoExpanded(false)
    }
    setExpanedDao(null)
  }, [expandedDao, setDaoExpanded, setExpanedDao])

  React.useEffect(() => {
    router.events.on("routeChangeStart", reset)
    return () => router.events.off("routeChangeStart", reset)
  }, [reset, router.events])

  
  if (!userSafes.length) {
    return (
      <div className="flex w-full flex-col p-3 lg:w-2/5">
        <div className="text-3xl">daos</div>
        <div className="text-xl">No daos found</div>
      </div>
    )
  }
  
  // if expandedDao is set, show expanded dao and remove other daos from view
  if (expandedDao) {
    return (
      <div className="flex w-full flex-col p-3 lg:w-2/5 space-y-3">
        <div className="text-3xl">{expandedDao?.substring(0, 6) + "..." + expandedDao.substring(expandedDao.length - 4)}</div>
        <DaoCard user={user} safe={expandedDao} />
      </div>
    )
  }

  // show all user daos unless expandedDao is set or user has no daos
  // might want to paginate this (infinite scroll)
  if (userSafes.length && !expandedDao) {
    return (
      <div className="flex w-full flex-col p-3 lg:w-2/5 space-y-3">
        <div className="text-3xl">daos</div>
        {userSafes.map((safe, index) => (
          <DaoCard key={index} user={user} safe={safe} />
        ))}
      </div>
    )
  }
}

export default UserDaos
