export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 AutoOsa.fi. Kaikki oikeudet pidätetään.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-blue-700">Tietoa meistä</a>
          <a href="/contact" className="hover:text-blue-700">Yhteystiedot</a>
          <a href="#" className="hover:text-blue-700">Tietosuojaseloste</a>
        </div>
      </div>
    </footer>
  );
}
