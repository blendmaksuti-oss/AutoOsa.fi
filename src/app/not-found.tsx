export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-black text-slate-900">Sivua ei löytynyt</h1>
        <p className="mt-3 text-slate-600">Tarkista osoite tai palaa etusivulle.</p>
      </div>
    </main>
  );
}
