import { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './app/features/irancellSlice.js';

function App() {
  const dispatch=useDispatch()
  
  useEffect(()=>{
    fetch('http://localhost:5000/register')
    .then(res=>res.json())
    .then(data=>dispatch(addUser(data)))
  },[])   
  return (
    <>
      <div className="flex bg-white-300  min-h-[50rem]">
        <RightSide />
        <CenterSide />
        <LeftSide />
      </div>
    </>
  );
}

export default App;
