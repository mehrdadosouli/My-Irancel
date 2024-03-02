import React, { useState } from 'react'
import { swal } from '../../utils/funcs.js'
export default function LoginAndRegister() {
  const [formName,setFormName]=useState('login')
  const [registered,setRegistered]=useState({
    username:'',
    userfamily:'',
    password:'',
    phone:'',
  })

  const changeHandlerRegister=(event)=>{
      setRegistered(prev=>({...prev,[event.target.name]:event.target.value}))
  }
  const submitSignUpHandler=(event)=>{
    event.preventDefault()
    if(!registered.username.length){
      swal('ثبت نام', 'ثبت نام با موفقیت انجام شد', 'success', 'عالی', () => window.location.href = '/' );
    }
    let allRegistered={
      username:registered.username.trim(),
      userfamily:registered.userfamily.trim(),
      password:registered.password.trim(),
      phone:registered.phone.trim(),
    }
    fetch('http://localhost:5000/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(allRegistered)
    })
    .then(res=>{
      if(res.status==200){
        swal('ثبت نام', 'ثبت نام با موفقیت انجام شد', 'success', 'عالی', () => window.location.href = '/' );
      }else{
        swal('ثبت نام','ثبت نام با موفقیت انجام نشد','warrning','باشه',()=>window.location.href ='/register')
      }
      ;return res.json()
    })
    .then(dat=>console.log(dat))
    .catch(err=>console.log(err)) 
  }
  const submitLoginHandler=(event)=>{
    
  }
  const signUpHandler=(event)=>{
    setFormName('signup')
  }
  const loginHandler=(event)=>{
    setFormName('login')
  }

  return (
    <div className='flex justify-center items-center min-h-[100vh] bg-yellow-200'>
        <div className={`flex flex-col p-24 shadow-2xl w-[500px] gap-10 bg-slate-700 rounded-3xl relative overflow-hidden ${formName=='login' ? 'min-h-[49rem]' : 'min-h-[59rem]'}`}>
          <h1 className='mx-auto p-3 text-white-50 hover:cursor-pointer w-fit' onClick={loginHandler}>Login</h1>
          <form action="#" className='flex flex-col gap-10 [&>*]:p-5 [&>*]:rounded-2xl [&>*]:outline-0 [&>*]:placeholder:text-lg'>
            
            <input autoComplete='on' type="text" name="username" id="usernamelogin"placeholder='نام' />
            <input autoComplete='on' type="number" name="phone" id="phonelogin" placeholder='شماره موبایل'/>
            <button onClick={submitLoginHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Login</button>
          </form>

        <div className={`flex flex-col px-24 py-12  shadow-2xl w-[500px] gap-10 bg-slate-500 rounded-t-[11rem] transition-all absolute ${formName=='login' ? ' bottom-[-40rem]': ' bottom-0' }`}>
          <h1 className='mx-auto p-3 text-white-50 hover:cursor-pointer w-fit' onClick={signUpHandler}>Sign Up</h1>
          <form action="#" className='flex flex-col gap-10 [&>*]:p-5 [&>*]:rounded-2xl [&>*]:outline-0 [&>*]:placeholder:text-lg'>
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.username} name="username" id="usernamesignup"placeholder='نام' />
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.userfamily} name="userfamily" id="userfamilysignup"placeholder='نام خانوادگی' />
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.password} name="password" id="passwordsignup"placeholder='پسورد' />
            <input autoComplete='on' type="number" min='11' max='12' onChange={changeHandlerRegister} value={registered.phone} name="phone" id="phonesignup" placeholder='شماره موبایل'/>
            <button onClick={submitSignUpHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Sign Up</button>
          </form>
        </div>
        </div>
    </div>
  )
}
