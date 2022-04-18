import React from 'react'

const UserDashboard = ({data}) => {
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default UserDashboard