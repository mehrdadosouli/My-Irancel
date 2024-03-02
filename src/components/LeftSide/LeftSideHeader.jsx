import React, { useEffect } from 'react'
import img1 from "../../assets/1.jpg"
export default function LeftSideHeader() {
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(response=>console.log(response))
  },[])
  return (
    <div className='flex p-10 bg-white-50 justify-center rounded-3xl gap-10 border border-gold-400'>
            <div className='w-[5rem] h-[5rem] object-cover rounded-full overflow-hidden border-4 border-gold-400'>
              <img src={img1} alt="" />
            </div>
            <div className='flex flex-col text-left w-52'>
                <h3>سلام مهرداد اصولی</h3>
                <span>09905354491</span>
            </div>
    </div>
  )
}
