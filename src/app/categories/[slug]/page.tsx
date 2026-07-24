import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categoryTree, findCategoryBySlug, getCategoryPath } from '@/lib/category-data';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = findCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const breadcrumbs = getCategoryPath(slug);

  return (
    <main className="min-h-screen bg-[#f5f7f3] px-4 py-10 text-[#111111] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-6 text-sm text-[#4f5752]">
          <Link href="/" className="hover:text-[#1f6a45]">Etusivu</Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-[#1f6a45]">Kategoriat</Link>
          {breadcrumbs.map((item) => (
            <span key={item.slug}>
              <span className="mx-2">/</span>
              <span className="text-[#111111]">{item.name}</span>
            </span>
          ))}
        </nav>

        <div className="rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1f6a45]">Kategoria</p>
          <h1 className="mt-2 text-3xl font-black text-[#111111]">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f5752]">{category.description}</p>
        </div>

        {category.subcategories && category.subcategories.length > 0 ? (
          <div className="mt-8 rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#111111]">Alakategoriat</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {category.subcategories.map((subcategory) => (
                <Link key={subcategory.slug} href="/products" className="rounded-[20px] border border-[#dcefe3] bg-[#f5f7f3] p-4 transition hover:border-[#1f6a45] hover:bg-white">
                  <h3 className="font-semibold text-[#111111]">{subcategory.name}</h3>
                  <p className="mt-2 text-sm text-[#4f5752]">{subcategory.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-8 rounded-[28px] border border-[#dcefe3] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#111111]">Tuotelistaus</h2>
          <p className="mt-3 text-sm leading-7 text-[#4f5752]">
            Tuotteet ja sopivuusfiltrit ovat valmiiksi rakennettuja jatkokehityksen pohjaksi. Reaaliaikaiset tuotteet ja erikoistuotteet voidaan liittää myöhemmin tähän rajapintaan.
          </p>
          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_280px]">
            <div className="rounded-[20px] border border-[#dcefe3] bg-[#f5f7f3] p-4">
              <p className="text-sm font-semibold text-[#111111]">Suodattimet</p>
              <ul className="mt-3 space-y-2 text-sm text-[#4f5752]">
                <li>• Ajoneuvo</li>
                <li>• Merkki</li>
                <li>• Hinta</li>
                <li>• Saatavuus</li>
                <li>• OE-numero</li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-[#dcefe3] bg-[#f5f7f3] p-4">
              <p className="text-sm font-semibold text-[#111111]">Yhteensopivuus</p>
              <p className="mt-2 text-sm text-[#4f5752]">Tämä osio on valmiina tulevaa auton sopivuustietoa varten.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
