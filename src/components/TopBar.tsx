const cards = [
  { label: 'Borrowed Books', value: '1,250', delta: '+8.2%' },
  { label: 'Overdue Returns', value: '132', delta: '-5.0%' },
  { label: 'Total Visitors', value: '3,420', delta: '-2.4%' },
]

export default function TopBar() {
  return (
    <header className="rounded-[32px] border border-slate-800/70 bg-slate-900/80 p-6 shadow-2xl/20 backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-orange-300/80">Dashboard</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Good morning, Noah!</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Overview of current library activity, performance, and recent updates.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="rounded-3xl border border-slate-800/80 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900">
            Add book
          </button>
          <button className="rounded-3xl bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
            Invite team
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {cards.map((item) => (
          <article key={item.label} className="rounded-3xl bg-slate-950/90 p-5 shadow-lg shadow-slate-950/20">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-green-400">{item.delta} from last week</p>
          </article>
        ))}
      </div>
    </header>
  )
}
