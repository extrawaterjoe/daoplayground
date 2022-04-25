import React from "react"
import { useEnsAvatar } from "wagmi"

const DaoPfp = ({ safe }) => {
  const { data, isError, isLoading } = useEnsAvatar({
    addressOrName: safe,
  })

  return <div className="rounded-full h-32 w-32 border border-white"></div>
}

export default DaoPfp
