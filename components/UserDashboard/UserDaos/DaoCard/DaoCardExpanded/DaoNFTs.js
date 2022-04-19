import React from "react"

import * as api from "/query"
import { useQuery } from "react-query"

const DaoNFTs = ({ safe }) => {
  const {
    data: daoNFTsData,
    error: daoNFTsErr,
    isLoading: daoNFTsLoading,
  } = useQuery(["daoNFTs", safe], () => api.daoNFTs(safe), { staleTime: 180000 })

  return (
    <div className="flex flex-col">
      <div className="text-2xl">nfts</div>
      <div className="grid grid-cols-2 gap-2">
        {daoNFTsData?.map((nft, i) => (
          <div key={i} className="p-2">
            <img src={nft.imageUri} alt={nft.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DaoNFTs
