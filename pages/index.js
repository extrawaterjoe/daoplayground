import React from "react"
import ConnectBtns from "../components/ConnectBtns"

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-3 space-y-3">
      <div className="mb-3 text-3xl">daoplayground</div>
      <div className="mb-3">connect yr wallet</div>
      <ConnectBtns />
    </div>
  )
}

export default Home
