import React from "react"
import UserInfo from "./UserInfo"
import UserFeed from "./UserFeed"
import UserDaos from "./UserDaos"

const UserDashboard = ({ address, data }) => {
  
  return (
    <div className="flex md:flex-row flex-col w-full">
      <UserInfo address={address}/>
      <UserFeed />
      <UserDaos data={data} />
    </div>
  )
}

export default UserDashboard
