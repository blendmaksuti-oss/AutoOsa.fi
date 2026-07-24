import { CategoryCard } from '@/components/CategoryCard';
import { getTopCategories } from '@/lib/category-service';

export const dynamic = 'force-dynamic';

export default async function SparePartsPage() {
  const categories = await getTopCategories();

  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Varaosat</p>
          <h1 className="mt-2 text-3xl font-black text-[#111111]">Selaa varaosakategorioita</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f5752]">
            Tutustu AutoOsa.fi:n skaalautuvaan varaosakategoria-arkkitehtuuriin ja löydä oikeat osat ajoneuvoosi nopeasti.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}
