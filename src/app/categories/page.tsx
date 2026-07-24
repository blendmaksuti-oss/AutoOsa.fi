import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({ include: { products: true } });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Kategoriat</p>
          <h1 className="text-3xl font-black text-slate-900">Selaa luokkia</h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{category.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{category.products.length} tuotetta saatavilla</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
