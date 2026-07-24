export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kassa</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Turvallinen maksu</h1>
        <p className="mt-3 text-slate-600">Stripe-integraatio valmiina tulevaa käyttöönottoa varten.</p>
      </div>
    </main>
  );
}
