import React, { useEffect, useState } from 'react'
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { swal,ToastService,validInputsRegister,setToLocalStorage, getFromLocalStorage } from '../../utils/funcs.js'

export default function LoginAndRegister() {
  
  const [formName,setFormName]=useState('login')
  const [err,setErr]=useState({})
  const [registered,setRegistered]=useState({
    username:'',
    userfamily:'',
    password:'',
    phone:'',
  })
  const [login,setLogin]=useState({
    username:'',
    password:'',
  })
  useEffect(()=>{
    setErr(validInputsRegister(registered))
  },[registered]) 

  const changeHandlerRegister=(event)=>{
      setRegistered(prev=>({...prev,[event.target.name]:event.target.value}))
  }
  const changeHandlerLogin=(event)=>{
    setLogin(prev=>({...prev,[event.target.name]:event.target.value}))
  }
  let allRegistered={
    username:registered.username.trim(),
    userfamily:registered.userfamily.trim(),
    password:registered.password.trim(),
    phone:registered.phone.trim(),
  }
 
  ////////////////////////////////////////////////////// register
  const submitSignUpHandler=(event)=>{
    event.preventDefault()
    if(Object.keys(err).length==4){
      ToastService.error('اینپوت ها را بررسی کنید')
    }else if(Object.keys(err)){
      Object.values(err).forEach(elem=>ToastService.error(elem))
    }
    if(!Object.keys(err).length){
    try {

      fetch('http://localhost:5000/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(allRegistered)
    })
    .then(res=>{
      if(res.status==200 || res.status==201){
        swal('ثبت نام', 'ثبت نام با موفقیت انجام شد', 'success', 'عالی',()=>window.location.href ='/');
      }else if(res.status == 402){
        swal('ثبت نام','همچین یوزری قبلا ثبت نام کرده است','warrning','باشه',()=>{})
      } 
      ;return res.json()
    })
    .then(data=>setToLocalStorage('user',data))
    .catch(err=>console.log(err))

    }catch (error) {
      console.log(error,'نتوانست ارسال کند');
    }
  }else{
      console.log(err);
    }
  }


  /////////////////////////////////////////////////////// login user

  const submitLoginHandler=(event)=>{
    event.preventDefault()
    
    let logined={
      username:login.username.trim(),
      password:Number(login.password.trim()),
    }
    
    if(!login.username.length && !login.password.length){
      ToastService.error('اینپوت ها را بررسی کنید')
    }else if(!login.username.length){
      ToastService.error(' یوزر خود را وارد کنید')
    }else if(!login.password.length){
      ToastService.error('پسورد را وارد کنید')
    }
    console.log(logined);
    try {
    fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(logined)
    })
    .then(res=>{
      if(res.status==200 || res.status==201){
        swal('ورود','ورود با موفقیت انجام شد', 'success', 'عالی',()=>{
            setToLocalStorage('user',logined)
            window.location.href ='/'
        });
      }else{
        swal('ورود','همچین کاربری وجود ندارد','warrning','باشه',()=>{})
      }
      ;return res.json()
    })
    .then(data=>console.log(data))
    }catch (error) {
      console.log('نتوانست ارسال کند');
    }
  }


  /////////////////////////////////////////////////////////////////
  const signUpHandler=()=>{
    setFormName('signup')
  }
  const loginHandler=()=>{
    setFormName('login')
  }

  return (
    <div className='flex justify-center items-center min-h-[100vh] bg-yellow-200'>
      <ToastContainer />
        <div className={`flex flex-col p-24 shadow-2xl w-[500px] gap-10 bg-slate-700 rounded-3xl relative overflow-hidden ${formName=='login' ? 'min-h-[49rem]' : 'min-h-[59rem]'}`}>
          <h1 className='mx-auto p-3 text-white-50 hover:cursor-pointer w-fit' onClick={loginHandler}>Login</h1>
          <form action="#" className='flex flex-col gap-10 [&>*]:p-5 [&>*]:rounded-2xl [&>*]:outline-0 [&>*]:placeholder:text-lg'>
            
            <input autoComplete='on' type="text" name="username" id="usernamelogin"placeholder='نام' onChange={changeHandlerLogin} />
            <input autoComplete='on' type="text" name="password" id="passwordlogin" placeholder='پسورد' onChange={changeHandlerLogin}/>
            <button onClick={submitLoginHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Login</button>
          </form>

        <div className={`flex flex-col px-24 py-12  shadow-2xl w-[500px] gap-10 bg-slate-500 rounded-t-[11rem] transition-all absolute ${formName=='login' ? ' bottom-[-40rem]': ' bottom-0' }`}>
          <h1 className='mx-auto p-3 text-white-50 hover:cursor-pointer w-fit' onClick={signUpHandler}>Sign Up</h1>
          <form action="#" className='flex flex-col gap-10 [&>*]:p-5 [&>*]:rounded-2xl [&>*]:outline-0 [&>*]:placeholder:text-lg'>
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.username} name="username" id="usernamesignup"placeholder='نام' />
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.userfamily} name="userfamily" id="userfamilysignup"placeholder='نام خانوادگی' />
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.password} name="password" id="passwordsignup"placeholder='پسورد' />
            <input autoComplete='on' type="text" onChange={changeHandlerRegister} value={registered.phone} name="phone" id="phonesignup" placeholder='شماره موبایل'/>
            <button onClick={submitSignUpHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Sign Up</button>
          </form>
        </div>
        </div>
    </div>
  )
}
