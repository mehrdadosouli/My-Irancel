import React from 'react'
import { Link } from 'react-router-dom'


export default function RightSide() {
  return (
    <div className='flex flex-col items-center gap-6 bg-white-50 p-10 ml-10 w-[25%]'>
        <div>
            <img src="" alt="" />
            <h2>ایرانسل من</h2>
        </div>
        <div className=''>
            <input type="text" placeholder='جستجو...' className=' rounded-2xl text-lg p-2 border border-gold-400 outline-none'/>
        </div>
        <div className='flex flex-col text-2xl gap-8'>
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
  )
}
