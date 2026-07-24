import Link from 'next/link';
import { AppImage } from '@/components/AppImage';

type ProductCardProps = {
  product: {
    id: string;
    slug: string;
    name: string;
    brand: { name: string } | string;
    category?: { name: string } | string | null;
    productNumber?: string | null;
    price: string | number;
    compatibility?: string | null;
    image?: string | null;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const brandName = typeof product.brand === 'string' ? product.brand : product.brand.name;
  const categoryName =
    !product.category || typeof product.category === 'string' ? product.category : product.category.name;
  const price = typeof product.price === 'number' ? product.price.toFixed(2) : product.price;

  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#dcefe3] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-[#f5f7f3]">
        <AppImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-[#4f5752]">{brandName}</p>
        <h3 className="text-lg font-semibold text-[#111111]">{product.name}</h3>
        {product.productNumber ? <p className="text-sm text-[#4f5752]">Tuotenumero: {product.productNumber}</p> : null}
        {product.compatibility ? <p className="text-sm text-[#4f5752]">Sopii: {product.compatibility}</p> : null}
        {categoryName ? <p className="text-sm text-[#4f5752]">{categoryName}</p> : null}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-[#e5ede7] px-5 py-4">
        <p className="text-lg font-black text-[#111111]">{price} €</p>
        <Link
          href={`/products/${product.slug}`}
          className="rounded-full bg-[#1f6a45] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f3d2e]"
        >
          Lisää ostoskoriin
        </Link>
      </div>
    </article>
  );
}
