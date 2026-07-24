import Link from 'next/link';
import { categoryTree } from '@/lib/category-data';

export const dynamic = 'force-dynamic';

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Kategoriat</p>
          <h1 className="mt-2 text-3xl font-black text-[#111111]">Selaa osakategoriat</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f5752]">
            AutoOsa.fi rakentaa nyt tulevaisuuden mukaista, skaalautuvaa osakategoria-arkkitehtuuria huolto-osille, varaosille ja lisävarusteille.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {categoryTree.map((category) => (
            <div key={category.slug} className="rounded-[24px] border border-[#dcefe3] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-[#111111]">{category.name}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#4f5752]">{category.description}</p>
                </div>
                <span className="rounded-full bg-[#e9f7ee] px-3 py-1 text-sm font-semibold text-[#1f6a45]">Pääkategoria</span>
              </div>

              {category.subcategories && category.subcategories.length > 0 ? (
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {category.subcategories.map((subcategory) => (
                    <Link key={subcategory.slug} href="/products" className="rounded-[18px] border border-[#dcefe3] bg-[#f5f7f3] p-3 text-sm font-medium text-[#111111] transition hover:border-[#1f6a45] hover:bg-white">
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
