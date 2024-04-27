import { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";
import { addUser } from './app/features/irancellSlice.js';
import { useDispatch } from "react-redux";

function App() {

  const dispatch=useDispatch()
  useEffect(()=>{
    fetch('http://localhost:5000/register')
    .then(res=>res.json())
    .then(data=>dispatch(addUser(data)))
  },[])   
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-[50rem] bg-white-300">
        <div className="flex">
          <RightSide />
        </div>
        <div className="flex lg:hidden">
          <LeftSide />
        </div>
        <div className="flex">
          <CenterSide />
        </div>
        <div className="lg:flex hidden">
          <LeftSide />
        </div>
        
        
      </div>
    </>
  );
}

export default App;
