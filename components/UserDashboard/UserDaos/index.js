import React from "react"
import DaoCard from "./DaoCard"

const UserDaos = ({ data }) => {
  const userSafes = data?.safes

  if (!userSafes.length) {
    return (
      <div className="flex w-full flex-col p-3 md:w-2/5">
        <div className="text-3xl">user daos</div>
        <div className="text-xl">No daos found</div>
      </div>
    )
  }

  if (userSafes.length) {
    return (
      <div className="flex w-full flex-col p-3 md:w-2/5 space-y-3">
        <div className="text-3xl">user daos</div>
        {userSafes.map((safe, index) => (
          <DaoCard key={index} safe={safe} />
        ))}
      </div>
    )
  }
}

export default UserDaos
