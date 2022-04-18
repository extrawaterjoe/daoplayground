import React from "react"
import UserInfo from "./UserInfo"
import UserFeed from "./UserFeed"
import UserDaos from "./UserDaos"

import { useAccount } from "wagmi"

const UserDashboard = ({ address, data }) => {

  const [{ data:userData, error:userErr, loading:userLoading }, disconnect] = useAccount()
  
  return (
    <div className="flex md:flex-row flex-col w-full">
      <UserInfo address={address}/>
      <UserFeed />
      <UserDaos user={userData?.address} data={data} />
    </div>
  )
}

export default UserDashboard
