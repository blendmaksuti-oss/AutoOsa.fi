import Link from 'next/link';
import { AppImage } from '@/components/AppImage';

type CategoryCardProps = {
  category: {
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
    productCount?: number;
    children?: unknown[];
  };
  basePath?: string;
};

export function CategoryCard({ category, basePath = '/varaosat' }: CategoryCardProps) {
  const href = `${basePath}/${category.slug}`;
  const productCount = category.productCount ?? category.children?.length ?? 0;

  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[24px] border border-[#dcefe3] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#1f6a45] hover:bg-[#f5f7f3]"
    >
      <div className="relative h-44 w-full overflow-hidden bg-[#f5f7f3]">
        <AppImage src={category.image ?? '/images/placeholders/part-placeholder.svg'} alt={category.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f3d2e] shadow-sm">
          {productCount} tuotetta
        </div>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-[#111111]">{category.name}</h3>
        <p className="text-sm leading-6 text-[#4f5752]">{category.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#1f6a45]">Tutustu</span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#4f5752]">Katso</span>
        </div>
      </div>
    </Link>
  );
}
