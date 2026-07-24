'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  CarFront,
  ChevronRight,
  Droplets,
  Gauge,
  Headphones,
  Lightbulb,
  Menu,
  Package2,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  UserRound,
  Wrench,
} from 'lucide-react';
import { CategoryMenu } from '@/components/CategoryMenu';
import { VehicleSelector } from '@/components/vehicle-selector';

const products = [
  {
    brand: 'Bosch',
    name: 'Jarrulevy 330 mm',
    partNumber: '0 986 479 120',
    price: '89,90 €',
    previousPrice: '109,90 €',
    compatibility: 'Audi A3 2018',
    stock: 'Varastossa',
    icon: ShieldCheck,
  },
  {
    brand: 'MANN-FILTER',
    name: 'Ilmansuodatin Premium',
    partNumber: 'C 3212',
    price: '24,90 €',
    compatibility: 'Volkswagen Golf',
    stock: 'Nopea toimitus',
    icon: Package2,
  },
  {
    brand: 'Castrol',
    name: 'Edge 5W-30 1 l',
    partNumber: 'B1',
    price: '34,90 €',
    compatibility: 'Monia malleja',
    stock: 'Uutuus',
    icon: Droplets,
  },
];

const brands = ['Bosch', 'Brembo', 'MANN-FILTER', 'SKF', 'NGK', 'Castrol'];

const benefits = [
  { title: 'Nopea toimitus', text: 'Tilaukset käsitellään nopeasti ja toimitus hoidetaan luotettavasti.', icon: Truck },
  { title: 'Turvallinen maksaminen', text: 'Turvalliset maksutavat ja selkeä tilausprosessi.', icon: ShieldCheck },
  { title: 'Laaja valikoima', text: 'Ammattilaisille ja tavallisille autoilijoille sopivia osia.', icon: Package2 },
  { title: 'Helppo palautus', text: 'Palautukset ja asiakaspalvelu ovat selkeät ja joustavat.', icon: BadgeCheck },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fcfcfb] text-[#111111]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 py-3 sm:px-6 lg:px-8 lg:py-6">
        <header className="sticky top-3 z-40 rounded-[24px] border border-[#dcefe3] bg-[#0f3d2e] px-3 py-3 text-white shadow-[0_18px_50px_rgba(15,61,46,0.12)] sm:px-4 lg:px-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 whitespace-nowrap text-lg font-black tracking-tight">
              <span className="rounded-full bg-white/10 p-2"><CarFront size={18} /></span>
              <span>AutoOsa.fi</span>
            </Link>

            <div className="hidden flex-1 lg:flex">
              <label className="flex w-full items-center gap-2 rounded-full border border-white/15 bg-white px-3 py-2 text-[#111111]">
                <Search size={18} className="text-[#1f6a45]" />
                <input
                  aria-label="Hae varaosaa"
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Hae varaosaa, tuotenumeroa tai tuotemerkkiä"
                />
              </label>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button className="hidden rounded-full border border-white/15 bg-white/10 p-2.5 transition hover:bg-white/20 sm:block" aria-label="Käyttäjätili">
                <UserRound size={18} />
              </button>
              <Link href="/cart" className="relative rounded-full border border-white/15 bg-[#1f6a45] p-2.5 transition hover:bg-[#2ba966]" aria-label="Ostoskori">
                <ShoppingCart size={18} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#8fe3a8] text-[11px] font-black text-[#0f3d2e]">2</span>
              </Link>
              <button className="rounded-full border border-white/15 bg-white/10 p-2.5 transition hover:bg-white/20 lg:hidden" aria-label="Avaa valikko" onClick={() => setMobileMenuOpen((open) => !open)}>
                <Menu size={18} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 lg:hidden">
            <label className="flex flex-1 items-center gap-2 rounded-full border border-white/15 bg-white px-3 py-2 text-[#111111]">
              <Search size={18} className="text-[#1f6a45]" />
              <input
                aria-label="Hae varaosaa"
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Hae varaosaa"
              />
            </label>
          </div>

          <nav className="mt-3 hidden items-center gap-4 text-sm font-medium text-white/90 lg:flex">
            <Link href="/products" className="transition hover:text-[#8fe3a8]">Tuotteet</Link>
            <Link href="/varaosat" className="transition hover:text-[#8fe3a8]">Varaosat</Link>
            <Link href="/brands" className="transition hover:text-[#8fe3a8]">Tuotemerkit</Link>
            <Link href="/contact" className="transition hover:text-[#8fe3a8]">Asiakaspalvelu</Link>
          </nav>

          {mobileMenuOpen && (
            <nav className="mt-3 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm font-medium lg:hidden">
              <Link href="/products" className="rounded-xl px-3 py-2 transition hover:bg-white/10">Tuotteet</Link>
              <Link href="/varaosat" className="rounded-xl px-3 py-2 transition hover:bg-white/10">Varaosat</Link>
              <Link href="/brands" className="rounded-xl px-3 py-2 transition hover:bg-white/10">Tuotemerkit</Link>
              <Link href="/contact" className="rounded-xl px-3 py-2 transition hover:bg-white/10">Asiakaspalvelu</Link>
            </nav>
          )}
        </header>

        <section className="grid gap-5 rounded-[28px] border border-[#dcefe3] bg-white p-4 shadow-[0_16px_40px_rgba(15,61,46,0.06)] sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e9f7ee] px-3 py-1 text-sm font-semibold text-[#1f6a45]">
              <Sparkles size={16} /> Luotettava varaosakauppa Suomessa
            </div>
            <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Varaosat autoosi helposti
            </h1>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#4f5752] sm:text-lg">
              Löydä sopivat varaosat nopeasti rekisterinumerolla, auton tiedoilla tai tuotehaulla.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f6a45] px-5 py-3 font-semibold text-white transition hover:bg-[#0f3d2e]">
                Etsi varaosia <ArrowRight size={18} />
              </Link>
              <Link href="/varaosat" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcefe3] bg-[#f5f7f3] px-5 py-3 font-semibold text-[#0f3d2e] transition hover:bg-white">
                Selaa varaosakategorioita <ChevronRight size={18} />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#4f5752]">
              <div className="flex items-center gap-2 rounded-full bg-[#f5f7f3] px-3 py-2">
                <Truck size={16} className="text-[#1f6a45]" /> Nopea käsittely
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f5f7f3] px-3 py-2">
                <ShieldCheck size={16} className="text-[#1f6a45]" /> Turvallinen tilaus
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#0f3d2e] p-5 text-white">
            <div className="rounded-[20px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fe3a8]">Tämä viikko</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl bg-white p-4 text-[#111111]">
                  <p className="text-sm text-[#4f5752]">Suosittuja osia</p>
                  <p className="mt-1 text-xl font-black">Jarrut ja suodattimet</p>
                </div>
                <div className="rounded-2xl bg-[#1f6a45] p-4">
                  <p className="text-sm text-[#dfeee3]">Huolto</p>
                  <p className="mt-1 text-xl font-black">Öljyt ja nesteet valmiina</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <VehicleSelector />

        <CategoryMenu />

        <section className="rounded-[28px] border border-[#dcefe3] bg-white p-4 shadow-[0_12px_30px_rgba(15,61,46,0.04)] sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Suositut tuotteet</p>
              <h2 className="text-2xl font-black text-[#111111]">Suositut tuotteet</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-[#1f6a45]">Katso koko valikoima</Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className="rounded-[24px] border border-[#dcefe3] bg-[#fcfdfb] p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#e9f7ee] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6a45]">{product.stock}</span>
                    <button className="rounded-full border border-[#dcefe3] p-2 text-[#4f5752] transition hover:border-[#1f6a45] hover:text-[#1f6a45]" aria-label={`Lisää ${product.name} ostoskoriin`}>
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                  <div className="mt-4 flex h-28 items-center justify-center rounded-[20px] bg-[#e9f7ee] text-[#1f6a45]">
                    <Icon size={28} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[#1f6a45]">{product.brand}</p>
                  <h3 className="mt-1 font-semibold text-[#111111]">{product.name}</h3>
                  <p className="mt-1 text-sm text-[#4f5752]">Tuotenumero: {product.partNumber}</p>
                  <p className="mt-3 text-sm text-[#4f5752]">Yhteensopivuus: {product.compatibility}</p>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-lg font-black text-[#111111]">{product.price}</p>
                      {product.previousPrice ? <p className="text-sm text-[#4f5752] line-through">{product.previousPrice}</p> : null}
                    </div>
                    <button className="rounded-full bg-[#1f6a45] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#0f3d2e]">Lisää ostoskoriin</button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-[28px] border border-[#dcefe3] bg-white p-4 shadow-[0_12px_30px_rgba(15,61,46,0.04)] sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Suositut tuotemerkit</p>
              <h2 className="text-2xl font-black text-[#111111]">Suositut tuotemerkit</h2>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {brands.map((brand) => (
              <div key={brand} className="rounded-[18px] border border-[#dcefe3] bg-[#f5f7f3] p-4 text-center font-semibold text-[#111111]">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#dcefe3] bg-[#0f3d2e] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fe3a8]">Miksi AutoOsa.fi</p>
            <h2 className="mt-2 text-2xl font-black">Luotettava ja moderni varaosakauppa</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="rounded-[20px] border border-white/15 bg-white/10 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#8fe3a8]">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-3 font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-[#dfeee3]">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-[0_12px_30px_rgba(15,61,46,0.04)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Uutiskirje</p>
            <h2 className="mt-2 text-2xl font-black text-[#111111]">Tilaa AutoOsa.fi uutiskirje</h2>
            <p className="mt-3 text-sm leading-7 text-[#4f5752]">Saat tietoa tarjouksista, uutuuksista ja ajankohtaisista tuotteista. Uutiskirjeen tilaaminen on suunniteltu tulevan integraation tueksi.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Sähköpostiosoite</span>
                <input className="w-full rounded-full border border-[#dcefe3] bg-[#f5f7f3] px-4 py-3 outline-none" placeholder="Sähköpostiosoitteesi" />
              </label>
              <button className="rounded-full bg-[#1f6a45] px-4 py-3 font-semibold text-white transition hover:bg-[#0f3d2e]">Tilaa</button>
            </div>
          </div>
        </section>
      </div>

      <footer id="yhteystiedot" className="border-t border-[#dcefe3] bg-[#0f3d2e] py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 text-sm text-[#dfeee3] sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.7fr] lg:px-8">
          <div>
            <h3 className="text-lg font-black text-white">AutoOsa.fi</h3>
            <p className="mt-3 max-w-sm leading-7 text-[#dfeee3]">Suomalainen verkkokauppa auton varaosille, huolto-osille, öljyille ja lisävarusteille.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Asiakaspalvelu</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/contact" className="transition hover:text-[#8fe3a8]">Ota yhteyttä</a></li>
              <li><a href="#" className="transition hover:text-[#8fe3a8]">Usein kysytyt kysymykset</a></li>
              <li><a href="#" className="transition hover:text-[#8fe3a8]">Toimitus</a></li>
              <li><a href="#" className="transition hover:text-[#8fe3a8]">Palautukset</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">AutoOsa.fi</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="/about" className="transition hover:text-[#8fe3a8]">Meistä</a></li>
              <li><a href="#" className="transition hover:text-[#8fe3a8]">Yritystiedot</a></li>
              <li><a href="/contact" className="transition hover:text-[#8fe3a8]">Yhteystiedot</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Seuraa</h4>
            <div className="mt-3 flex items-center gap-2 text-[#dfeee3]">
              <Headphones size={16} /> <span>Asiakaspalvelu</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
