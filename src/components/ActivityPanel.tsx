const activity = [
  { book: 'Claudia’s Life Story', member: 'Livia Hart', status: 'Returned', due: 'Sept 14, 2035' },
  { book: 'The Coffee Shop Next Door', member: 'Noah Trent', status: 'Borrowed', due: 'Sept 11, 2035' },
  { book: 'The Book of Prayer', member: 'Celina Moore', status: 'Returned', due: 'Sept 02, 2035' },
  { book: 'Floral Dreams', member: 'Isla Ray', status: 'Overdue', due: 'Sept 05, 2035' },
]

const recent = [
  { title: 'Inventory Updated', detail: 'Admin added 15 new books to Science & Tech.' },
  { title: 'New Member Registered', detail: 'Olive James signed up for a Standard membership.' },
  { title: 'Book Returned', detail: 'Echoes of Apart returned by Livia Hart.' },
]

export default function ActivityPanel() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="border bg-[#F7F6F4] p-6 shadow-2xl/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Library Activity</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Last week</h3>
          </div>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300">Updated</span>
        </div>

        <div className="mt-6 space-y-4">
          {activity.map((item) => (
            <div key={item.book} className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                <span>{item.member}</span>
                <span>{item.due}</span>
              </div>
              <p className="mt-3 text-base font-semibold text-white">{item.book}</p>
              <span className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                item.status === 'Overdue'
                  ? 'bg-rose-500/15 text-rose-300'
                  : 'bg-emerald-500/15 text-emerald-300'
              }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="border bg-[#F7F6F4] p-6 shadow-2xl/20 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Top Authors</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">This week</h3>
            </div>
            <span className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300">Live</span>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="rounded-3xl bg-slate-950/70 p-4">
              <div className="flex items-center justify-between">
                <span>Ava Thornton</span>
                <span className="font-semibold text-white">6 books</span>
              </div>
              <p className="mt-1 text-slate-400">365 borrowers</p>
            </li>
            <li className="rounded-3xl bg-slate-950/70 p-4">
              <div className="flex items-center justify-between">
                <span>Leo Vance</span>
                <span className="font-semibold text-white">5 books</span>
              </div>
              <p className="mt-1 text-slate-400">342 borrowers</p>
            </li>
            <li className="rounded-3xl bg-slate-950/70 p-4">
              <div className="flex items-center justify-between">
                <span>Mira Ellison</span>
                <span className="font-semibold text-white">4 books</span>
              </div>
              <p className="mt-1 text-slate-400">326 borrowers</p>
            </li>
          </ul>
        </div>

        <div className="border bg-[#F7F6F4] p-6 shadow-2xl/20 backdrop-blur-xl">
          <div>
            <p className="text-sm text-slate-400">Recent Activities</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">This week</h3>
          </div>
          <div className="mt-6 space-y-3 text-slate-300">
            {recent.map((item) => (
              <div key={item.title} className="rounded-3xl bg-slate-950/70 p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
