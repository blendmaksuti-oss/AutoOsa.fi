import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { name: string; slug: string }[] }) {
  return (
    <nav className="text-sm text-[#4f5752]" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-[#1f6a45]">Etusivu</Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/varaosat" className="transition hover:text-[#1f6a45]">Varaosat</Link>
        </li>
        {items.map((item, index) => (
        <li key={item.slug} className="flex items-center gap-2">
          <span>/</span>
          {index === items.length - 1 ? (
            <span className="text-[#111111]">{item.name}</span>
          ) : (
            <Link href={`/varaosat/${item.slug}`} className="transition hover:text-[#1f6a45]">{item.name}</Link>
          )}
        </li>
      ))}
      </ol>
    </nav>
  );
}
