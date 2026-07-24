import Image from 'next/image';
import { ArrowRight, Search, ShieldCheck, Truck, Star, Heart, ShoppingCart, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Moottoriöljyt', icon: '🛢️' },
  { name: 'Jarrut', icon: '🛑' },
  { name: 'Akut', icon: '🔋' },
  { name: 'Kumi', icon: '🛞' },
  { name: 'Sähkö', icon: '⚡' },
  { name: 'Korjaus', icon: '🔧' },
];

const products = [
  { name: 'MOBIL 5W-30', price: '39,90 €', badge: 'Suosittu' },
  { name: 'Bosch Jarrupala', price: '84,90 €', badge: 'Uutuus' },
  { name: 'Varta 70 Ah Akku', price: '159,90 €', badge: 'Paras hinta' },
];

const brands = ['Bosch', 'Mobil', 'Varta', 'Philips', 'NGK', 'Valeo'];

const reviews = [
  { name: 'Mika', text: 'Nopeaa toimitusta ja laadukkaat varaosat.' },
  { name: 'Sanna', text: 'Loistava valikoima ja helppo tilata.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <div>
            <p className="text-xl font-black text-slate-900">AutoOsa.fi</p>
            <p className="text-sm text-slate-500">Auton varaosat nopeasti ja luotettavasti</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#tuotteet" className="hover:text-blue-700">Tuotteet</a>
            <a href="#merkit" className="hover:text-blue-700">Merkit</a>
            <a href="#yhteystiedot" className="hover:text-blue-700">Yhteystiedot</a>
          </nav>
        </header>

        <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-3 py-1 text-sm font-semibold text-orange-300">
              <Sparkles size={16} /> Luotettava varaosakauppa Suomessa
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Varaosat autoosi — nopeasti, edullisesti, varmasti.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Etsi oikeat osat, vertaa merkkejä ja tilaa turvallisesti. Valikoimassa moottoriöljyt, akut, jarrut ja paljon muuta.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white/10 p-3 sm:flex-row">
              <label className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-3 text-slate-700">
                <Search size={18} />
                <input className="w-full bg-transparent outline-none" placeholder="Etsi tuotetta, merkkiä tai osaa" />
              </label>
              <button className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-400">
                Hae tuotteita
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Truck size={18} className="text-orange-400" /> Nopea toimitus</div>
              <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-orange-400" /> Turvallinen maksu</div>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-700 to-cyan-600 p-6">
            <div className="rounded-[1.25rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Tämän viikon tarjoukset</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white/90 p-4 text-slate-900">
                  <p className="text-sm text-slate-500">Jarrut</p>
                  <p className="text-xl font-black">-20 %</p>
                </div>
                <div className="rounded-xl bg-slate-900/80 p-4 text-white">
                  <p className="text-sm text-slate-400">Akut</p>
                  <p className="text-xl font-black">Ilmainen asennus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {['Nopea toimitus', 'Laadukkaat merkit', 'Asiakkaan tuki'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">{item}</p>
              <p className="mt-1 text-sm text-slate-500">Luotettavasti ja turvallisesti jokaiselle asiakkaalle.</p>
            </div>
          ))}
        </section>

        <section id="tuotteet" className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kategoriat</p>
              <h2 className="text-2xl font-black text-slate-900">Selaa tuotteita</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-orange-500">Näytä kaikki</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="mt-3 font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-1 text-sm text-slate-500">Valikoimassa parhaat vaihtoehdot</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Suosituimmat</p>
              <h2 className="text-2xl font-black text-slate-900">Featured products</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{product.badge}</span>
                  <button className="rounded-full border border-slate-200 p-2 text-slate-500 hover:text-orange-500"><Heart size={16} /></button>
                </div>
                <div className="mt-5 h-28 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
                <h3 className="mt-5 font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-500">Laadukas ja luotettava valinta kaikille autoilijoille.</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-black text-slate-900">{product.price}</p>
                  <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">Osta</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="merkit" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Merkit</p>
              <h2 className="text-2xl font-black text-slate-900">Luotetut tuotemerkit</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center font-semibold text-slate-700">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Asiakkaiden kokemukset</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900">Miksi valita AutoOsa.fi</h2>
            <div className="mt-6 space-y-4">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, index) => (<Star key={index} size={16} fill="currentColor" />))}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">“{review.text}”</p>
                  <p className="mt-2 font-semibold text-slate-900">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Uutiskirje</p>
            <h2 className="mt-2 text-2xl font-black">Tilaa tarjoukset sähköpostiisi</h2>
            <p className="mt-3 text-sm text-slate-300">Saat ensimmäisenä uutiset uusista tuotteista ja alennuksista.</p>
            <div className="mt-6 flex flex-col gap-3">
              <input className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none" placeholder="Sähköpostiosoitteesi" />
              <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-400">
                Tilaa <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </section>

      <footer id="yhteystiedot" className="border-t border-slate-200 bg-white/80 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 AutoOsa.fi. Kaikki oikeudet pidätetään.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-700">Tietoa meistä</a>
            <a href="#" className="hover:text-blue-700">Yhteystiedot</a>
            <a href="#" className="hover:text-blue-700">Tietosuojaseloste</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
