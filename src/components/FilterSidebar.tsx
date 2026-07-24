export function FilterSidebar() {
  return (
    <aside className="rounded-[24px] border border-[#dcefe3] bg-[#f5f7f3] p-5">
      <h2 className="text-lg font-semibold text-[#111111]">Suodattimet</h2>
      <div className="mt-5 space-y-5 text-sm text-[#4f5752]">
        <div>
          <p className="font-semibold text-[#111111]">Ajoneuvo</p>
          <select className="mt-3 w-full rounded-xl border border-[#dcefe3] bg-white px-3 py-2 outline-none" aria-label="Valitse merkki">
            <option>Valitse merkki</option>
          </select>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">Valmistaja</p>
          <select className="mt-3 w-full rounded-xl border border-[#dcefe3] bg-white px-3 py-2 outline-none" aria-label="Valitse valmistaja">
            <option>Valitse valmistaja</option>
          </select>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">Hinta</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <input className="rounded-xl border border-[#dcefe3] bg-white px-3 py-2 text-sm outline-none" placeholder="Min" aria-label="Min hinta" />
            <input className="rounded-xl border border-[#dcefe3] bg-white px-3 py-2 text-sm outline-none" placeholder="Max" aria-label="Max hinta" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">Saatavuus</p>
          <select className="mt-3 w-full rounded-xl border border-[#dcefe3] bg-white px-3 py-2 outline-none" aria-label="Valitse saatavuus">
            <option>Kaikki</option>
            <option>Varastossa</option>
          </select>
        </div>
        <div>
          <p className="font-semibold text-[#111111]">OE-numero</p>
          <input className="mt-3 w-full rounded-xl border border-[#dcefe3] bg-white px-3 py-2 text-sm outline-none" placeholder="OE-numero" aria-label="OE-numero" />
        </div>
      </div>
    </aside>
  );
}
