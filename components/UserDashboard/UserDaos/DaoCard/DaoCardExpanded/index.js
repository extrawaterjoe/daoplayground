import React from "react"
import DaoTokens from "./DaoTokens"
import DaoNFTs from "./DaoNFTs"

const DaoCardExpanded = ({ safe }) => {

  return (
    <div className="flex flex-col">
      <DaoTokens safe={safe} />
      <DaoNFTs safe={safe} />
    </div>
  )
}

export default DaoCardExpanded
