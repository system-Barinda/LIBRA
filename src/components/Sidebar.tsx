const nav = [
  { label: 'Dashboard', active: true },
  { label: 'Inbox' },
  { label: 'Library Activity' },
  { label: 'Books' },
  { label: 'Management' },
  { label: 'Members' },
  { label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="bg-gray-200 p-6">
      <div className="mb-8 flex items-center gap-3 border">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/20 text-orange-300">
          L
        </div>
        <div>
          <p className="text-sm text-slate-400">Library Admin</p>
          <h1 className="text-xl font-semibold text-slate-600">LIBRA</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {nav.map((item) => (
          <button
            key={item.label}
            className={`block w-full rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
              item.active
                ? 'bg-slate-800 text-white shadow-xl shadow-slate-950/20'
                : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl border p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">On-the-Go Management</p>
        <p className="mt-2 text-slate-400">Access books, members, and stats anytime.</p>
        <button className="mt-4 inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
          Try for Free
        </button>
      </div>
    </aside>
  )
}
