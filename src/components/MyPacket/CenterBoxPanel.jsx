import React, { useEffect, useState } from "react";
import {getFromLocalStorage, setToLocalStorage,swal} from "../../utils/funcs";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/features/irancellSlice.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { EditeMyProfile } from '../../services/EditeMyProfile.jsx';
export default function CenterBoxPanel() {
  const queryClient=useQueryClient()
  const [newInfoUser, setNewInfoUser] = useState([]);
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [info, setInfo] = useState({
    username: "",
    password: "",
    profile: null,
    token: "",
  });

  const { mutate  } = useMutation(
    ["courses"],
    (info) => {
      return fetch("http://localhost:5000/mypanel/edite", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${info.username},${info.password},${info.profile},${info.token}`,
        },
      }).then((res) => res.json());
    },{
      
    }
  );
  const changeInputHandler = (event) => {
    if (event.target.name == "profile") {
      setInfo((prev) => ({
        ...prev,
        [event.target.name]: event.target.files[0].name,
      }));
    } else {
      setInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
  };

  const changeInfoUserHandler = (e) => {
    e.preventDefault();

    try {
      mutate(info);
      window.location.reload()
    } catch (error) {
        console.log('error fetching',error);
    }
  };
  useEffect(() => {
    const getFrom = JSON.parse(getFromLocalStorage("user")).token;
    setInfo((prev) => ({ ...prev, token: getFrom }));
  }, []);

  return (
    <div className="flex flex-col gap-10 my-10 p-10 rounded-3xl border border-gold-400 justify-evenly w-full">
      <h1 className="text-center border border-b-1 border-b-blue-200 border-transparent lg:p-5 lg:mt-[-5rem]">
        پروفایل من
      </h1>
      <form
        action="#"
        className="flex flex-col gap-28"
        onSubmit={changeInfoUserHandler}
      >
        <div className="flex gap-40 justify-between">
          <span>عکس پروفایل خود را اظافه کنید</span>
          <input
            type="file"
            id="profile"
            name="profile"
            onChange={changeInputHandler}
            className="inline-flex w-[22rem]"
          />
        </div>
        <div className="flex gap-10 justify-between">
          <span>نام کاربری خود را تغییر دهید</span>
          <input
            type="text"
            id="username"
            value={info.username}
            name="username"
            onChange={changeInputHandler}
            className="border border-orange-200 rounded-xl"
          />
        </div>
        <div className="flex gap-10 justify-between">
          <span>پسورد خود را تغییر دهید</span>
          <input
            type="text"
            id="password"
            value={info.password}
            name="password"
            onChange={changeInputHandler}
            className="border border-orange-200 rounded-xl"
          />
        </div>
        <button type="submit" className="p-5 bg-orange-500 rounded-3xl">
          ذخیره
        </button>
      </form>
    </div>
  );
}
