import React from "react"
import DaoMemberBtn from "./DaoMemberBtn"

const DaoMembers = ({ owners }) => {
  const daoMembers = owners?.map((member, index) => <DaoMemberBtn key={index} member={member} />)

  return <div className="flex flex-row flex-wrap">{daoMembers}</div>
}

export default DaoMembers
