import React, { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage, swal } from '../../utils/funcs'
export default function CenterBoxPanel() {
    const [newInfoUser,setNewInfoUser]=useState([])
    const [id,setId]=useState()
    const [info,setInfo]=useState({
        username:'',
        password:''
    })
    const changeInputHandler=(event)=>{
        setInfo(prev=>({...prev,[event.target.name]:event.target.value}))
    }
    const changeInfoUserHandler=(e)=>{
        e.preventDefault()
        console.log(id[0]);
        fetch('http://localhost:5000/mypanel/edite',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `${info.username},${info.password},${id[0].id}`
            }
        })
        .then(res=>{swal('تغییر یوزر و پسورد', ' با موفقیت اطالاعات تغییر یافت', 'success', 'عالی',()=>setToLocalStorage('user',info));return res.json()})
    }
    useEffect(()=>{
        try {
            let result=JSON.parse(getFromLocalStorage('user'))
            fetch('http://localhost:5000/mypanel',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `${result.username},${result.password}`
            }
        })
        .then(res=>res.json())
        .then(ids=>setId(ids))
        } catch (error) {
            console.log('cant fetch mypanel',error);
        }
    },[])
  return (
    <div className='flex flex-col gap-10 my-10 p-10 rounded-3xl border border-gold-400 justify-evenly w-full'>
            <h1 className='text-center border border-b-1 border-b-blue-200 border-transparent lg:p-5 lg:mt-[-5rem]'>پروفایل من</h1>
    <form action="#" className='flex flex-col gap-28'>
        <div className='flex gap-40 justify-between'>
            <span>عکس پروفایل خود را اظافه کنید</span>
            <input type="file" id='profile' value={info.profile} name='profile' onChange={changeInputHandler} className='inline-flex w-[22rem]'/>
        </div>
        <div className='flex gap-10 justify-between'>
            <span>نام کاربری خود را تغییر دهید</span>
            <input type="text" id='username' value={info.username} name='username' onChange={changeInputHandler} className='border border-orange-200 rounded-xl'/>
        </div>
        <div className='flex gap-10 justify-between'>
            <span>پسورد خود را تغییر دهید</span>
            <input type="text" id='password' value={info.password} name='password' onChange={changeInputHandler} className='border border-orange-200 rounded-xl'/>
        </div>
        <button onClick={changeInfoUserHandler} className='p-5 bg-orange-500 rounded-3xl'>ذخیره</button>
        </form>
    </div>
  )
}
