import { useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide";
import CenterSide from "./components/CenterSide/CenterSide";
import RightSide from "./components/RightSide/RightSide";
function App() {
  return (
    <>
      <div className="flex bg-white-300 h-full">
        <RightSide />
        <CenterSide />
        <LeftSide />
      </div>
    </>
  );
}

export default App;
