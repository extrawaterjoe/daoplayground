import React from "react"
import { HiSearch } from "react-icons/hi"
import { useLayoutStore } from "/stores/useLayoutStore"

const SearchBtn = () => {
  const setSearchOpen = useLayoutStore(state => state.setSearchOpen)

  return (
    <div className="nav-btn" onClick={setSearchOpen}>
      <HiSearch />
    </div>
  )
}

export default SearchBtn
