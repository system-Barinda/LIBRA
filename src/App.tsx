import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F4] text-slate-400 flex">
      <div className="sideBar border h-full w-[20%]">
        <Sidebar />
      </div>

      <div className="border h-full w-[80%]">
        <div><Navbar /></div>

        <br />

        
      </div>
    </div>
  );
}

export default App;