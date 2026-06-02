import React from "react";
import ActivityPanel from "./components/ActivityPanel";
import Navbar from "./components/Navbar";
import OverviewCards from "./components/OverviewCards";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
  const [show,setShow] = React.useState(false)
  const handleDespay = () => {
    alert("done")
  }
  return (
    <div className="min-h-screen bg-[#F7F6F4] text-slate-400">
      <div className="mobileMun flex justify-between border h-full w-full text-slate-800">
        <div className="menuRight h-10 mx-5">done</div>
        <div className="menuLeft h-10 mx-5" onClick={handleDespay}>done</div>
      </div>
      {show && <div className="mobileMenu border h-full w-full text-slate-800">
        <div className="menuRight h-10 mx-5">done</div>
        <div className="menuLeft h-10 mx-5" onClick={handleDespay}>done</div>
      </div>}
      <div className="sideBar border h-full w-[20%]">
        <Sidebar />
      </div>

      <div className="border h-full w-[80%]">
        <div><Navbar /></div>

        <br />
        <div><TopBar /></div>
        <div><OverviewCards /></div>
        <div><ActivityPanel /></div>

      </div>
    </div>
  );
}

export default App;