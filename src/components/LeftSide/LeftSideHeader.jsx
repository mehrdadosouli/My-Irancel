import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import img1 from "../../assets/1.jpg";
import { getFromLocalStorage } from "../../utils/funcs.js"
export default function LeftSideHeader() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const user=JSON.parse(getFromLocalStorage('user'))
    fetch("http://localhost:5000/getinfo",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>setUserInfo(data))
  },[]);
  return (
    <div className="flex p-10 bg-white-50 justify-center rounded-3xl gap-10 border border-gold-400">
      <div className="w-[5rem] h-[5rem] object-cover rounded-full overflow-hidden border-4 border-gold-400">
        {userInfo.length ? (
          <Link to='/myprofile'><img src={img1} alt="" /></Link>
        ) : (
          <img src={img1} alt="photo" />
        )}
      </div>
      <div className="flex flex-col text-left w-52 justify-center">
        {!userInfo.length ? (
          <>
            <Link to="/register">ثبت نام / ورود</Link>
          </>
        ) : (
          <>
           <Link to='/myprofile'><h3>سلام {userInfo[0].username }{ userInfo[0].userfamily}</h3></Link>
            <span>{userInfo[0].phone}</span>
          </>
        )}
      </div>
    </div>
  );
}
