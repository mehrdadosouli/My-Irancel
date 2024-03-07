import React from 'react'
import RightSide from '../RightSide/RightSide'
import LeftSide from '../LeftSide/LeftSide'
import CenterBoxPanel from '../MyPacket/CenterBoxPanel'
export default function MyProfile() {
  

  return (
    <div className='bg-white-200 min-h-[50rem] flex justify-between lg:flex-row flex-col'>
        <div>
          <RightSide />
        </div>
        <div className='flex lg:hidden'>
          <LeftSide />
        </div>
          <CenterBoxPanel />
        <div className='hidden lg:flex'>
          <LeftSide />
        </div>
    </div>
  )
}
