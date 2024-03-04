import React, { useState } from 'react'

export default function CenterBoxPanel() {
    const [newInfoUser,setNewInfoUser]=useState([])
    const [info,setInfo]=useState({
        username:'',
        password:''
    })
    const changeInputHandler=(event)=>{
        setInfo(prev=>({...prev,[event.target.name]:event.target.value}))
        console.log(info);
    }
    const changeInfoUserHandler=()=>{

    }
  return (
    <div className='flex flex-col gap-10 my-10 p-10 rounded-3xl border border-gold-400 justify-evenly'>
            <h1 className='text-center border border-b-1 border-b-blue-200 border-transparent p-5 mt-[-5rem]'>پروفایل من</h1>
        <div className='flex gap-40 justify-between'>
            <span>عکس پروفایل خود را اظافه کنید</span>
            <input type="file" id='profile' value={info.profile} name='profile' onChange={changeInputHandler} className='inline-flex w-[22rem]'/>
        </div>
        <div className='flex gap-10 justify-between'>
            <span>نام کاربری خود را تغییر دهید</span>
            <input type="text" id='username' value={info.username} name='username' onChange={changeInputHandler} className='border border-orange-200'/>
        </div>
        <div className='flex gap-10 justify-between'>
            <span>پسورد خود را تغییر دهید</span>
            <input type="text" id='password' value={info.password} name='password' onChange={changeInputHandler} className='border border-orange-200'/>
        </div>
        <button onClick={changeInfoUserHandler} className='p-5 bg-orange-500 rounded-3xl'>ذخیره</button>
    </div>
  )
}
