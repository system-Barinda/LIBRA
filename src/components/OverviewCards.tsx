const categories = [
  { label: 'Fiction', detail: '35% • 6,803 books' },
  { label: 'Non-Fiction', detail: '22% • 4,126 books' },
  { label: 'Science & Tech', detail: '15% • 2,812 books' },
  { label: 'Children', detail: '10% • 1,875 books' },
]

export default function OverviewCards() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
      <div className="border bg-[#F7F6F4] p-6 shadow-2xl/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Library Usage Trends</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Last week</h3>
          </div>
          <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
            Weekly
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <p className="text-sm text-slate-400">Visitors</p>
              <p className="mt-2 text-3xl font-semibold text-white">78</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <p className="text-sm text-slate-400">Borrowers</p>
              <p className="mt-2 text-3xl font-semibold text-white">62</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-orange-500/10 p-4 text-orange-300">
              <p className="text-sm">Borrowed Books</p>
              <p className="mt-2 text-3xl font-semibold">1,250</p>
            </div>
            <div className="rounded-3xl bg-emerald-500/10 p-4 text-emerald-300">
              <p className="text-sm">Returned</p>
              <p className="mt-2 text-3xl font-semibold">1,118</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/80 p-6 shadow-2xl/20 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold text-white">Book Categories</h3>
            <span className="text-sm text-slate-400">Last week</span>
          </div>
          <div className="mt-6 space-y-3">
            {categories.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-1 font-semibold text-white">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-800/70 bg-slate-900/80 p-6 shadow-2xl/20 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Revenue Breakdown</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">This month</h3>
            </div>
            <span className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300">$12,450</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <p className="text-sm text-slate-400">Membership Fees</p>
              <p className="mt-2 text-lg font-semibold text-white">$7,470</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-4">
              <p className="text-sm text-slate-400">Fines & Events</p>
              <p className="mt-2 text-lg font-semibold text-white">$4,980</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
