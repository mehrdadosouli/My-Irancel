import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiClose } from "react-icons/tfi";


export default function RightSide() {
  const [isShow,setIsShow]=useState(false)
  return (
    <div className='relative lg:ml-10'>
      <div className={`p-5 flex lg:hidden mx-auto h-14 justify-center items-center absolute top-5 right-5 z-20 hover:cursor-pointer text-gold-50 bg-orange-400 rounded-2xl hover:text-black`} onClick={()=>{setIsShow(!isShow)}}>
      <TfiClose />
      </div>
      <div className={`${!isShow && 'hidden' } lg:flex flex-col lg:static absolute z-10 text-center gap-6 bg-white-50 p-10 mx-auto lg:h-full h-fit`}>
          <div>
              <h2>ایرانسل من</h2>
          </div>
          <div className=''>
              <input type="text" placeholder='جستجو...' className=' rounded-2xl text-lg mt-5 p-2 border border-gold-400 outline-none'/>
          </div>
          <div className='flex flex-col text-2xl gap-11 hover:[&>*]:text-gold-400 mt-7'>
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
