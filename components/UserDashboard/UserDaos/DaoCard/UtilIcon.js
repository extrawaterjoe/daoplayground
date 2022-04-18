import React from 'react'
import Image from 'next/image'
import {IoMdAddCircleOutline} from 'react-icons/io'

const UtilIcon = ({isMember}) => {
  // follow button if not following
  // uniswap button if user is an owner of the dao

  return (
    <div className='absolute space-y-1'>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border text-white border-slate-400 bg-slate-200 p-1 shadow hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-700">
        {isMember ? <Image src="/icons/uniswap-uni-logo.svg" alt="add" width={18} height={18} /> : <IoMdAddCircleOutline />}
      </button>
    </div>
  )
}

export default UtilIcon