import React from 'react'
import LeftSideHeader from './LeftSideHeader'
import LeftSideBottom from './LeftSideBottom'

export default function LeftSide() {
  return (
    <div className='flex flex-col gap-10 ml-10 mt-10'>
        <LeftSideHeader />
        <LeftSideBottom />
    </div>
  )
}
