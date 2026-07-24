export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kirjaudu sisään</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Tervetuloa takaisin</h1>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Sähköposti" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Salasana" type="password" />
          <button className="w-full rounded-xl bg-blue-700 px-4 py-3 font-semibold text-white">Kirjaudu sisään</button>
        </div>
      </div>
    </main>
  );
}
