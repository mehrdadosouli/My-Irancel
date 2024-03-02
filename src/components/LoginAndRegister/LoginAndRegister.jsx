import React, { useState } from 'react'

export default function LoginAndRegister() {
  const [formName,setFormName]=useState('login')
  const submitSignUpHandler=(event)=>{
    event.preventDefault()
    console.log('j');
    
  }
  const submitLoginHandler=(event)=>{
    event.preventDefault()
    fetch('')
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
            <input type="text" name="username" id="usernamelogin"placeholder='نام' />
            <input type="text" name="phone" id="phonelogin" placeholder='شماره موبایل'/>
            <button onClick={submitLoginHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Login</button>
          </form>

        <div className={`flex flex-col px-24 py-12  shadow-2xl w-[500px] gap-10 bg-slate-500 rounded-t-[11rem] transition-all absolute ${formName=='login' ? ' bottom-[-40rem]': ' bottom-0' }`}>
          <h1 className='mx-auto p-3 text-white-50 hover:cursor-pointer w-fit' onClick={signUpHandler}>Sign Up</h1>
          <form action="#" className='flex flex-col gap-10 [&>*]:p-5 [&>*]:rounded-2xl [&>*]:outline-0 [&>*]:placeholder:text-lg'>
            <input type="text" name="username" id="usernamesignup"placeholder='نام' />
            <input type="text" name="userfamily" id="userfamilysignup"placeholder='نام خانوادگی' />
            <input type="text" name="password" id="passwordsignup"placeholder='پسورد' />
            <input type="text" name="phone" id="phonesignup" placeholder='شماره موبایل'/>
            <button onClick={submitSignUpHandler} className='p-10 bg-purple-300 text-white-50 hover:text-blue-400'>Sign Up</button>
          </form>
        </div>
        </div>
    </div>
  )
}
