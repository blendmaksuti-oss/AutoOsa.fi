import { AppImage } from '@/components/AppImage';
import type { Category } from '@prisma/client';

type CategoryBannerProps = {
  category: Category;
};

export function CategoryBanner({ category }: CategoryBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#dcefe3] bg-[#f5f7f3] shadow-sm">
      <div className="relative h-64 w-full sm:h-72">
        <AppImage src={category.image ?? '/images/placeholders/part-placeholder.svg'} alt={category.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-flex rounded-full bg-[#1f6a45]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]">{category.name}</span>
        <h1 className="mt-4 text-3xl font-black">{category.name}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7">{category.description}</p>
      </div>
    </section>
  );
}
