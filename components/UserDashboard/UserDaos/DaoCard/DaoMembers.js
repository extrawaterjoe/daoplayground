import React from "react"
import DaoMemberBtn from "./DaoMemberBtn"
import * as api from "/query"
import { useQuery } from "react-query"
import { useAccount, useEnsLookup } from "wagmi"

const DaoMembers = ({ safe }) => {
  const { data, error, isLoading } = useQuery(["daoMembers", safe], () => api.daoMembers(safe), { staleTime: 180000 })

  const daoMembers = data?.map((member, index) => <DaoMemberBtn key={index} member={member} />)

  return <div className="flex flex-row flex-wrap">{daoMembers}</div>
}

export default DaoMembers
