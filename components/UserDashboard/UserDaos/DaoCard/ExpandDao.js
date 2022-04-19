import React from "react"
import { useUserStore } from "/stores/useUserStore"

const ExpandDao = ({ safe }) => {
  const daoExpanded = useUserStore(state => state.daoExpanded)
  const setDaoExpanded = useUserStore(state => state.setDaoExpanded)
  const setExpandedDao = useUserStore(state => state.setExpandedDao)

  const handleClick = () => {
    if(daoExpanded) {
      setDaoExpanded(false)
      setExpandedDao(null)
    } else {
      setDaoExpanded(true)
      setExpandedDao(safe)
    }
  }


  return (
    <button
      className="dark:bg-slate-700 bg-slate-100 rounded-full h-fit w-fit p-1 text-xs border border-white hover:border-teal-300 dark:hover:bg-slate-600"
      onClick={handleClick}
    >
      expand
    </button>
  )
}

export default ExpandDao
