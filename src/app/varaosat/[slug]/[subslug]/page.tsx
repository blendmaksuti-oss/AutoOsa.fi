import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CategoryBanner } from '@/components/CategoryBanner';
import { ProductCard } from '@/components/ProductCard';
import { getSubcategoryBySlugs } from '@/lib/category-service';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string; subslug: string }>;
};

export default async function SparePartsSubcategoryPage({ params }: PageProps) {
  const { slug, subslug } = await params;
  const category = await getSubcategoryBySlugs(slug, subslug);

  if (!category) {
    notFound();
  }

  const breadcrumbs = category.parent
    ? [
        { name: category.parent.name, slug: category.parent.slug },
        { name: category.name, slug: category.slug },
      ]
    : [{ name: category.name, slug: category.slug }];

  const products = category.products ?? [];

  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="mt-6">
          <CategoryBanner category={category} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <section className="space-y-6">
            <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Alakategoria</p>
                  <h1 className="mt-2 text-3xl font-black text-[#111111]">{category.name}</h1>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4f5752]">{category.description ?? 'Tälle kategoriatasolle ei ole vielä lisätty kuvausta.'}</p>
            </div>

            <section className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-[#111111]">Tuotteet</h2>
                  <p className="mt-2 text-sm leading-7 text-[#4f5752]">Näytetään kategoriassa {products.length} tuotetta.</p>
                </div>
              </div>

              {products.length > 0 ? (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-[24px] border border-dashed border-[#1f6a45]/40 bg-[#f5f7f3] p-8 text-center">
                  <p className="text-lg font-semibold text-[#111111]">Tuotteita ei löytynyt</p>
                  <p className="mt-2 text-sm text-[#4f5752]">
                    Tälle kategoriatasolle ei ole tuotteita lisätty tai ne eivät ole vielä saatavilla. Voit palata ylempään kategoriaan tai tarkistaa muut osaryhmät.
                  </p>
                </div>
              )}
            </section>
          </section>

          <aside className="rounded-[24px] border border-[#dcefe3] bg-[#f5f7f3] p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-[#111111]">Ominaisuudet</h2>
            <p className="mt-3 text-sm leading-7 text-[#4f5752]">
              Tässä näkymässä voidaan näyttää suodattimia, yhteensopivuustietoja ja linkkejä ajoneuvovalintaan.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
