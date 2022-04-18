import React from "react"
import Link from "next/link"
import { HiOutlineHome } from "react-icons/hi"

const HomeBtn = () => {
  return (
    <Link href="/">
      <a className="">
        <div className="nav-btn">
          <HiOutlineHome />
        </div>
      </a>
    </Link>
  )
}

export default HomeBtn
