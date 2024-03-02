import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.jpg";
export default function LeftSideHeader() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((response) => setUserInfo(response));
  }, []);
  return (
    <div className="flex p-10 bg-white-50 justify-center rounded-3xl gap-10 border border-gold-400">
      <div className="w-[5rem] h-[5rem] object-cover rounded-full overflow-hidden border-4 border-gold-400">
        {userInfo.length ? (
          <img src={userInfo[0].profile} alt="" />
        ) : (
          <img src={img1} alt="" />
        )}
      </div>
      <div className="flex flex-col text-left w-52 justify-center">
        {!userInfo.length ? (
          <>
            <Link to="/register">ثبت نام / ورود</Link>
          </>
        ) : (
          <>
            <h3>سلام {userInfo[0].firstname }{ userInfo[0].lastname}</h3>
            <span>{userInfo[0].phone}</span>
          </>
        )}
      </div>
    </div>
  );
}
