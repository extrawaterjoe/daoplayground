import React from "react"

const UserDaos = ({ data }) => {
  return (
    <div className="flex w-full md:w-2/5">
      <pre className="w-full">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default UserDaos
