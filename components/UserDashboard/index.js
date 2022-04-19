import React from "react"
import UserInfo from "./UserInfo"
import UserFeed from "./UserFeed"
import UserDaos from "./UserDaos"

import { useAccount } from "wagmi"

const UserDashboard = ({ address, data }) => {
  // data is the res from querying gnosis for the user's daos
  // address is the address of the profile being viewed
  // data:userData is the data of the signed-in user
  const [{ data:userData, error:userErr, loading:userLoading }, disconnect] = useAccount()
  
  return (
    <div className="flex lg:flex-row flex-col w-full">
      <UserInfo address={address}/>
      <UserDaos user={userData?.address} data={data} />
      <UserFeed data={data}/>
    </div>
  )
}

export default UserDashboard
