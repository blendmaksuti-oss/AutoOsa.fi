import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await prisma.product.findUnique({
    where: { slug },
    include: { category: true, brand: true },
  });

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="h-80 rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">{product.brand.name}</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">{product.name}</h1>
            <p className="mt-4 text-slate-600">{product.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {product.category ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{product.category.name}</span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">Kategoria tuntematon</span>
              )}
              <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-600">Varastossa: {product.stock}</span>
            </div>
            <div className="mt-8 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Hinta</p>
              <p className="mt-1 text-3xl font-black text-slate-900">{product.price.toFixed(2)} €</p>
              <button className="mt-4 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white">Lisää koriin</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
