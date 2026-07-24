import Link from 'next/link';
import { AppImage } from '@/components/AppImage';
import type { Category } from '@prisma/client';

type CategoryWithCount = Category & {
  _count?: {
    products: number;
  } | null;
};

type SubcategoryCardProps = {
  category: CategoryWithCount;
  parentSlug: string;
};

export function SubcategoryCard({ category, parentSlug }: SubcategoryCardProps) {
  return (
    <Link
      href={`/varaosat/${parentSlug}/${category.slug}`}
      className="group overflow-hidden rounded-[24px] border border-[#dcefe3] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#1f6a45] hover:bg-[#f5f7f3]"
    >
      <div className="relative h-40 w-full overflow-hidden bg-[#f5f7f3]">
        <AppImage src={category.image ?? '/images/placeholders/part-placeholder.svg'} alt={category.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#111111]">{category.name}</h3>
          {typeof category._count?.products === 'number' ? (
            <span className="rounded-full bg-[#e7f4ea] px-3 py-1 text-xs font-semibold text-[#1f6a45]">
              {category._count.products} tuotetta
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-[#4f5752]">{category.description}</p>
      </div>
    </Link>
  );
}
