import React, { useEffect, useState } from 'react'
import RightSide from '../RightSide/RightSide'
import LeftSide from '../LeftSide/LeftSide'
import CenterBoxPanel from '../MyPacket/CenterBoxPanel'
import PropTypes from 'prop-types';

export default function MyProfile() {
  const [user,setUser]=useState([])
  useEffect(() => {
    let userData;
      userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, [])

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
