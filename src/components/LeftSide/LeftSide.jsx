import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import LeftSideBottom from './LeftSideBottom'

export default function LeftSide() {
  return (
    <div className='flex flex-col gap-10 px-10 lg:mx-10 my-10 w-full'>
        <LeftSideHeader />
        <LeftSideBottom />
    </div>
  )
}
