import React from "react"
import UserInfo from "./UserInfo"
import UserFeed from "./UserFeed"
import UserDaos from "./UserDaos"

const UserDashboard = ({ data }) => {
  return (
    <div className="flex md:flex-row flex-col w-full">
      <UserInfo />
      <UserFeed />
      <UserDaos data={data} />
    </div>
  )
}

export default UserDashboard
