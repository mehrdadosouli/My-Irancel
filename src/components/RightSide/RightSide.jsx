import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiClose } from "react-icons/tfi";


export default function RightSide() {
  const [isShow,setIsShow]=useState(false)
  console.log(isShow);
  return (
    <div className='relative'>
      <div className={`p-5 flex lg:hidden mx-auto h-14 justify-center items-center absolute top-7 right-4 z-10 hover:cursor-pointer text-gold-50 bg-orange-400 rounded-2xl hover:text-black`} onClick={()=>{setIsShow(!isShow)}}>
      <TfiClose />
      </div>
      <div className={`${!isShow && 'hidden' } lg:flex flex-col items-center gap-6 bg-white-50 p-10 ml-10 h-full`}>
          <div>
              <img src="" alt="" />
              <h2>ایرانسل من</h2>
          </div>
          <div className=''>
              <input type="text" placeholder='جستجو...' className=' rounded-2xl text-lg p-2 border border-gold-400 outline-none'/>
          </div>
          <div className='flex flex-col text-2xl gap-11 hover:[&>*]:text-gold-400'>
            <Link to='/'>صفحه اصلی</Link>
            <Link to='/mypacket'>خرید های من</Link>
            <Link to='/'>کارکرد و فروش</Link>
            <Link to='/'>خدمات</Link>
            <Link to='/'>مدیریت خدمات</Link>
            <Link to='/'>مدیریت سیمکارت</Link>
            <Link to='/'>سوالات متداول</Link>
            <Link to='/'>ارتباط با ما</Link>
          </div>
      </div>
      
    </div>
  )
}
