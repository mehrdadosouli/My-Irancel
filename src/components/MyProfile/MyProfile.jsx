import React from 'react'
import RightSide from '../RightSide/RightSide'
import LeftSide from '../LeftSide/LeftSide'
import CenterBoxPanel from '../MyPacket/CenterBoxPanel'

export default function MyProfile() {
  return (
    <div className='bg-white-200 h-[100vh] min-h-[50rem] flex justify-between'>
        <RightSide />
          <CenterBoxPanel />
        <LeftSide />
    </div>
  )
}
