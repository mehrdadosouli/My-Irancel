import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import LeftSideBottom from './LeftSideBottom'

export default function LeftSide() {
  return (
    <div className='flex flex-col gap-10 mx-10 my-10  w-[25%]'>
        <LeftSideHeader />
        <LeftSideBottom />
    </div>
  )
}
