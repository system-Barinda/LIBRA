import ActivityPanel from './components/ActivityPanel'
import OverviewCards from './components/OverviewCards'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-400 ">
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
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
