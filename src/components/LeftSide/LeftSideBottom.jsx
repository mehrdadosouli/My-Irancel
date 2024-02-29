import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaWifi } from "react-icons/fa";

export default function LeftSideBottom() {
  return (
    <div className='flex flex-col items-center gap-10 p-10 bg-gold-50 rounded-3xl border border-gold-400 h-full'>
        <h3>شارژ باقی مانده سیمارت</h3>
        <div className='rounded-full backgroundImage w-48 h-48 bg-gold-400 flex justify-center items-center'>
            <div className='rounded-full w-40 h-40 bg-white-50 flex justify-center items-center'>3000تومان</div>
        </div>
        <div className='p-3 bg-gold-400 rounded-3xl text-white-50'>
            <span>سیم کارت رو شارژ کن!</span>
        </div>
        <span>خدمات فعال</span>
        <div className='flex justify-center items-center gap-5'>
        <div className='p-5 bg-gold-400 rounded-3xl'>
            <SlEnvolopeLetter />
        </div>
            <div className='flex flex-col text-xl'>
                <span>بسته پیامکی هفتگی</span>
                <span>تا تاریخ 31 خرداد 1400</span>
            </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <div className='p-5 bg-gold-400 rounded-3xl'>
                <FaWifi />
            </div>
            <div className='flex flex-col text-xl'>
                <span>بسته اینترنت هفتگی</span>
                <span>تا تاریخ 31 خرداد 1400</span>
            </div>
        </div>
    </div>
  )
}
