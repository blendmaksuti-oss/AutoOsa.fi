export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="h-24 rounded-[28px] bg-slate-200/80 animate-pulse" />
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="h-64 rounded-[28px] bg-slate-200/80 animate-pulse" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-52 rounded-[24px] bg-slate-200/80 animate-pulse" />
              ))}
            </div>
          </div>
          <div className="h-[540px] rounded-[24px] bg-slate-200/80 animate-pulse" />
        </div>
      </div>
    </main>
  );
}
