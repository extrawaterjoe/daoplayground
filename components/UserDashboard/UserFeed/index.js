import React from "react"
import FeedCard from "./FeedCard"

import * as api from "/query"
import { useQuery, useQueries } from "react-query"
import { allDaoTx } from '/query/index';

const UserFeed = ({ data }) => {
  const daos = data?.safes

  return (
    <div className="flex w-full flex-col p-3 lg:w-2/5 space-y-3">
      <div className="text-3xl">feed</div>
        <FeedCard />
    </div>
  )
}

export default UserFeed
