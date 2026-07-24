import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black text-slate-900">
          AutoOsa.fi
        </Link>
        <nav className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
          <Link href="/products" className="hover:text-blue-700">Tuotteet</Link>
          <Link href="/varaosat" className="hover:text-blue-700">Varaosat</Link>
          <Link href="/brands" className="hover:text-blue-700">Merkit</Link>
          <Link href="/contact" className="hover:text-blue-700">Yhteystiedot</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-slate-200 p-2 text-slate-600">
            <Search size={18} />
          </button>
          <Link href="/cart" className="rounded-full bg-slate-900 p-2 text-white">
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
