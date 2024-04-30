import React, { useEffect, useState ,useMemo, memo } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.jpg";
import { getFromLocalStorage } from "../../utils/funcs.js"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function LeftSideHeader() {
  const [userInfo, setUserInfo] = useState([]);
  const [token,setToken]=useState('')
  const memorizeInfo=useMemo(()=>userInfo, [userInfo])

  function fetchUser(){ 
   return fetch("http://localhost:5000/getinfo",{
      method:'POST', 
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({token})
    })
    .then(res=>res.json())
    .then(data=>setUserInfo(data))   
  }

  const { mutate }=useMutation(['getinfo'],fetchUser)

  useEffect(() => {
    const user=JSON.parse(getFromLocalStorage('user')).token
    setToken(user)
      mutate()
  },[token]);
  
  return (
    <div className="flex p-10 bg-white-50 lg:justify-center justify-between items-center rounded-3xl lg:gap-10 gap-52 border border-gold-400">
      <div className="w-[7rem] h-[7rem] flex justify-center items-center rounded-full overflow-hidden border-4 border-gold-400">
        {memorizeInfo.length ? (
          <Link to='/myprofile'><img src={`http://localhost:5173/backend/public/photos/${memorizeInfo[0].profile}`} alt="" /></Link> 
        ) : (
          <img src={img1} alt="photo" />
        )}
      </div>
      <div className="flex lg:flex-col gap-10 text-left lg:w-52 justify-center">
        {!memorizeInfo.length ? (
          <>
            <Link to="/register">ثبت نام / ورود</Link>
          </>
        ) : (
          <>
           <Link to='/myprofile'><h3>سلام { memorizeInfo[0].username } { memorizeInfo[0].userfamily}</h3></Link>
            <span>{memorizeInfo[0].phone}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default memo(LeftSideHeader)