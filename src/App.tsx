import ActivityPanel from './components/ActivityPanel'
import Navbar from './components/Navbar'
import OverviewCards from './components/OverviewCards'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F6F4] text-slate-400 ">
      <div className='w-full border border-blue-300'> <Navbar /></div>
      <div className="mx-auto max-w-screen  py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar />
          <main className="space-y-6">
            <TopBar />
            <OverviewCards />
            <ActivityPanel />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
