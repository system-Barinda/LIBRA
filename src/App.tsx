function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F4] text-slate-400 flex">
      <div className="sideBar border h-screen w-[30%]">
        <h1>Sidebar</h1>
      </div>

      <div className="border h-screen w-[70%]">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;