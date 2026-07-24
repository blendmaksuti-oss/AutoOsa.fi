import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CategoryBanner } from '@/components/CategoryBanner';
import { FilterSidebar } from '@/components/FilterSidebar';
import { SubcategoryCard } from '@/components/SubcategoryCard';
import { getCategoryBySlug } from '@/lib/category-service';

export const dynamic = 'force-dynamic';

export default async function SparePartsCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbs = category.parent
    ? [
        { name: category.parent.name, slug: category.parent.slug },
        { name: category.name, slug: category.slug },
      ]
    : [{ name: category.name, slug: category.slug }];

  const subcategories = category.children ?? [];

  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="mt-6">
          <CategoryBanner category={category} />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#4f5752]">
            Näytä kaikki tuotteet kategoriassa <span className="font-semibold text-[#111111]">{category.name}</span>.
          </p>
          <Link
            href={`/products?category=${category.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-[#1f6a45] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#29884a]"
          >
            Katso kaikki tuotteet
          </Link>
        </div>

        {subcategories.length > 0 ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-5">
              <section className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#111111]">Alakategoriat</h2>
                    <p className="mt-2 text-sm leading-7 text-[#4f5752]">Valitse tarkempi osaryhmä ja etsi sopivia tuotteita.</p>
                  </div>
                  <p className="text-sm text-[#4f5752]">Näytetään {subcategories.length} alakategoriaa</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {subcategories.map((subcategory) => (
                    <SubcategoryCard key={subcategory.slug} category={subcategory} parentSlug={category.slug} />
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-[#dcefe3] bg-[#f5f7f3] p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#111111]">Tuoteryhmän esittely</h2>
                <p className="mt-3 text-sm leading-7 text-[#4f5752]">
                  Tämä kategoriaohjelma on suunniteltu vahvistamaan AutoOsa.fi:n etusivua ja tulevia tuotelistoja. Alakategorioiden kautta valittu kategoria voidaan yhdistää tuotteisiin ja sopivuusvalintaan myöhemmässä vaiheessa.
                </p>
              </section>
            </div>
            <FilterSidebar />
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <section className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#111111]">Tuotelistaus</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f5752]">
                Tämä kategoria ei sisällä enää alikategorioita. Tässä kohtaa voidaan näyttää suoraan sopivat tuotteet ja tarjota järjestelmän haku- ja sopivuusfilttereitä.
              </p>
              <div className="mt-6 rounded-[24px] border border-dashed border-[#1f6a45]/40 bg-[#f5f7f3] p-6 text-center">
                <p className="font-semibold text-[#111111]">Ei tuotteita saatavilla</p>
                <p className="mt-2 text-sm text-[#4f5752]">
                  Tälle kategoriatasolle ei ole vielä tuotteita lisätty. Voit palata ylempään kategoriaan tai jatkaa hakua.
                </p>
                <Link
                  href="/varaosat"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#1f6a45] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f3d2e]"
                >
                  Paluu kategorioihin
                </Link>
              </div>
            </section>
            <FilterSidebar />
          </div>
        )}
      </div>
    </main>
  );
}
