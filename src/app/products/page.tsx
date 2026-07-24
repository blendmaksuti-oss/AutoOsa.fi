import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ProductsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const categorySlug = searchParams?.category;
  const category = categorySlug
    ? await prisma.category.findUnique({ where: { slug: categorySlug } })
    : null;

  const products = await prisma.product.findMany({
    where: categorySlug && category ? { category: { slug: categorySlug } } : categorySlug ? { id: '' } : {},
    include: { category: true, brand: true },
    orderBy: { createdAt: 'desc' },
  });

  const title = categorySlug
    ? category
      ? `Tuotteet kategoriassa ${category.name}`
      : 'Kategoriaa ei löytynyt'
    : 'Kaikki varaosat';
  const subtitle = categorySlug
    ? category
      ? `Näytetään ${products.length} tuotetta kategoriassa ${category.name}.`
      : 'Kategoriaa ei löytynyt. Tarkista URL ja valitse kelvollinen kategoria.'
    : 'Tutustu AutoOsa.fi:n kaikkiin varaosatuotteisiin.';

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Tuotteet</p>
            <h1 className="text-3xl font-black text-slate-900">Kaikki varaosat</h1>
          </div>
          <div className="flex gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1">Suodattimet</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">Lajittelu</span>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200" />
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{product.brand.name}</span>
                  <span className="text-sm text-slate-500">{product.category ? product.category.name : 'Kategoria tuntematon'}</span>
                </div>
                <h2 className="mt-3 font-semibold text-slate-900">{product.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-black text-slate-900">{product.price.toFixed(2)} €</p>
                  <Link href={`/products/${product.slug}`} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                    Näytä
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Tuotteita ei löytynyt</p>
            <p className="mt-3 text-sm leading-7 text-slate-500">{category ? 'Tälle kategorialle ei löytynyt tuotteita.' : 'Tälle haulle ei löytynyt tuotteita. Yritä poistaa suodatin tai valita toinen kategoria.'}</p>
            <div className="mt-6">
              <Link href="/products" className="inline-flex rounded-full bg-[#1f6a45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#29884a]">
                Näytä kaikki tuotteet
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
