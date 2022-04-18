import React from "react"
import FeedCard from "./FeedCard"

const UserFeed = () => {
  return (
    <div className="flex w-full flex-col p-3 md:w-2/5 space-y-3">
      <div className="text-3xl">feed</div>
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  )
}

export default UserFeed
