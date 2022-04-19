import React from "react"
import { FaEthereum } from "react-icons/fa"

import * as api from "/query"
import { useQuery } from "react-query"

const DaoTokens = ({ safe }) => {
  const {
    data: daoTokensData,
    error: daoTokensErr,
    isLoading: daoTokensLoading,
  } = useQuery(["daoTokens", safe], () => api.daoTokens(safe), { staleTime: 180000 })

  return (
    <div className="flex flex-col">
      <div className="text-2xl">tokens</div>
      <div className="grid grid-cols-2 gap-2 py-2">
        {daoTokensData?.map((token, i) => (
          <div key={i} className="flex w-full flex-row space-x-2 items-center p-2 dark:bg-slate-700 bg-slate-100 rounded-xl">
            <div className="flex justify-center items-center h-10 w-10 rounded-full border border-white overflow-clip">
              {token?.token?.logoUri ? (
                <img src={token?.token?.logoUri} alt={i} />
              ) : (
                <FaEthereum size={30} />
              )}
            </div>
            <div>{token?.token?.symbol ? token?.token?.symbol : "ETH"}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DaoTokens
