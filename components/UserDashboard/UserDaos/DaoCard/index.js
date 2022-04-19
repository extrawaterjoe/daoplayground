import React from "react"
import UtilIcon from "./UtilIcon"
import DaoBalance from "./DaoBalance"
import DaoMembers from "./DaoMembers"

import ExpandDao from "./ExpandDao"
import dynamic from 'next/dynamic'
const DaoCardExpanded = dynamic(() => import('./DaoCardExpanded'))

import { useUserStore } from "/stores/useUserStore"

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

  const daoExpanded = useUserStore(state => state.daoExpanded)

  return (
    <div className="flex flex-col dark:bg-slate-800 bg-slate-200 rounded-xl p-3">
      {/* Pfp and Members Section */}
      <div className="flex w-full flex-col lg:flex-row">
        <UtilIcon isMember={isMember} />
        <div className="rounded-full h-32 w-32 border border-white"></div>
        {/* TODO: loading and error states */}
        <DaoMembers owners={daoMembersData} />
      </div>

      {/* Dao Balance + Expand Dao Section */}
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col w-">
          <div className="text-xl">{safe?.substring(0, 6) + "..." + safe.substring(safe.length - 4)}</div>
          <DaoBalance safe={safe} />
        </div>
        <ExpandDao safe={safe}/>
      </div>

      {/* Dao Card Expanded */}
      {daoExpanded ? <DaoCardExpanded isMember={isMember} safe={safe} /> : null}
    </div>
  )
}

export default DaoCard
