import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F4] text-slate-400 flex">
      <div className="sideBar border h-screen w-[20%]">
        <Sidebar />
      </div>

      <div className="border h-screen w-[80%]">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;