import React from "react"
import ConnectBtns from "../components/ConnectBtns"
import { useConnect } from "wagmi"

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center p-3 space-y-3">
      <h1 className="mb-3 text-3xl">Welcome to babydao</h1>
      <p className="mb-3">Get started by connecting your wallet </p>
      <ConnectBtns />
    </div>
  )
}

export default Home
