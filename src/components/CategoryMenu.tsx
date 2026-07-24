import { getTopCategories } from '@/lib/category-service';
import { CategoryCard } from '@/components/CategoryCard';

export async function CategoryMenu() {
  const categories = await getTopCategories();

  return (
    <section className="rounded-[28px] border border-[#dcefe3] bg-white p-4 shadow-[0_20px_50px_rgba(15,61,46,0.06)] sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Varaosat</p>
          <h2 className="text-2xl font-black text-[#111111]">Pääkategoriat</h2>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
