import React from "react"
import Pfp from "./Pfp"
import AddressENS from "./AddressENS"

const UserInfo = () => {
  return (
    <div className="flex w-full flex-col md:w-1/5 p-3 space-y-3">
      <Pfp />
      <AddressENS />
    </div>
  )
}

export default UserInfo
