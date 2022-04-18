import React from "react"
import UtilIcon from "./UtilIcon"
import DaoBalance from "./DaoBalance"
import DaoMembers from "./DaoMembers"

import * as api from "/query"
import { useQuery } from "react-query"

const DaoCard = ({ user, safe }) => {
  const {
    data: daoMembersData,
    error: daoMembersErr,
    isLoading: daoMembersLoading,
  } = useQuery(["daoMembers", safe], () => api.daoMembers(safe), { staleTime: 180000 })

  // check if user is in daoMembersData
  const isMember = daoMembersData?.includes(user)

  return (
    <div className="flex md:flex-row flex-col dark:bg-slate-800 bg-slate-200 space-x-2 rounded-xl p-3">
      <UtilIcon isMember={isMember}/>
      <div className="rounded-full h-32 w-32 border"></div>
      <div className="flex flex-col w-full md:w-2/3">
        <div className="text-xl">{safe?.substring(0, 6) + "..." + safe.substring(safe.length - 4)}</div>
        <DaoBalance safe={safe} />
        <DaoMembers owners={daoMembersData} />
      </div>
    </div>
  )
}

export default DaoCard
