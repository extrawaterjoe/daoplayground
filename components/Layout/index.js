import React from "react"
import NavBar from "./NavBar"
import Search from "./Search"
import { useLayoutStore } from "/stores/useLayoutStore"

export const Layout = ({ children }) => {
  const { searchOpen } = useLayoutStore()

  return (
    <div>
      <NavBar />
      {searchOpen ? <Search /> : children}
    </div>
  )
}
