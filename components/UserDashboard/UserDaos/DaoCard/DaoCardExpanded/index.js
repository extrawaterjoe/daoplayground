import React from "react"
import DaoCardNav from "./DaoCardNav"
import DaoTokens from "./DaoTokens"
import DaoNFTs from "./DaoNFTs"

const DaoCardExpanded = ({ isMember, safe }) => {

  return (
    <div className="flex flex-col">
      <DaoCardNav safe={safe}/>
      <DaoTokens safe={safe} />
      <DaoNFTs safe={safe} />
    </div>
  )
}

export default DaoCardExpanded
