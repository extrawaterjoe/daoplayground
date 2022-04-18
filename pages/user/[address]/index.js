import axios from "axios"
import React from "react"
import UserDashboard from "/components/UserDashboard"

const UserPage = ({data}) => {
  return <UserDashboard data={data} />
}

export default UserPage

export const getServerSideProps = async ({query}) => {
  const address = query.address
  try {
    const res = await axios.get(`https://safe-transaction.gnosis.io/api/v1/owners/${address}/safes/`)
    const data = await res.data
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error)  
    return {props: {}}
  }
}