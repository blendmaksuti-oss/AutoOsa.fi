export type CategoryNode = {
  name: string;
  slug: string;
  description: string;
  image?: string;
  bannerImage?: string;
  productCount?: number;
  subcategories?: CategoryNode[];
};

export const categoryTree: CategoryNode[] = [
  {
    name: 'Jarrut',
    slug: 'jarrut',
    description: 'Jarrupalat, levyt, satulat ja jarrunesteet.',
    image: '/images/categories/jarrut.svg',
    bannerImage: '/images/categories/jarrut.svg',
    productCount: 62,
    subcategories: [
      { name: 'Jarrupalat', slug: 'jarrupalat', description: 'Etu- ja takajarrupalat.', image: '/images/categories/jarrupalat.svg', productCount: 26 },
      { name: 'Jarrulevyt', slug: 'jarrulevyt', description: 'Levyt ja tuuletetut jarrulevyt.', image: '/images/categories/jarrulevyt.svg', productCount: 18 },
      { name: 'Jarrusatulat', slug: 'jarrusatulat', description: 'Jarrusatulat ja korjaussarjat.', image: '/images/categories/jarrusatulat.svg', productCount: 14 },
      { name: 'Jarrunesteet', slug: 'jarrunesteet', description: 'Jarrunesteet ja nesteet.', image: '/images/categories/jarrunesteet.svg', productCount: 12 },
    ],
  },
  {
    name: 'Moottori',
    slug: 'moottori',
    description: 'Moottorin osat, tiivisteet ja mekanismit.',
    image: '/images/categories/moottori.svg',
    bannerImage: '/images/categories/moottori.svg',
    productCount: 54,
    subcategories: [
      { name: 'Moottorin osat', slug: 'moottorin-osat', description: 'Kampiakselit, nokka-akselit ja enemmän.', image: '/images/categories/moottorin-osat.svg', productCount: 22 },
      { name: 'Venttiilit', slug: 'venttiilit', description: 'Venttiilit ja venttiilikotelo.', image: '/images/categories/venttiilit.svg', productCount: 16 },
      { name: 'Jakohihnat', slug: 'jakohihnat', description: 'Jakohihnat ja kiristimet.', image: '/images/categories/jakohihnat.svg', productCount: 10 },
      { name: 'Tiivisteet', slug: 'tiivisteet', description: 'Moottoritiivisteet ja tiivistysosat.', image: '/images/categories/tiivisteet.svg', productCount: 18 },
    ],
  },
  {
    name: 'Öljyt ja nesteet',
    slug: 'oljyt-ja-nesteet',
    description: 'Moottoriöljyt, jäähdytysnesteet ja voiteluaineet.',
    image: '/images/categories/oljyt-ja-nesteet.svg',
    bannerImage: '/images/categories/oljyt-ja-nesteet.svg',
    productCount: 48,
    subcategories: [
      { name: 'Moottoriöljyt', slug: 'moottorioljyt', description: 'Bensiini- ja dieselöljyt.', image: '/images/categories/moottorioljyt.svg', productCount: 16 },
      { name: 'Vaihteistoöljyt', slug: 'vaihteistooljyt', description: 'Vaihteisto- ja akseliöljyt.', image: '/images/categories/vaihteistooljyt.svg', productCount: 12 },
      { name: 'Jäähdytysnesteet', slug: 'jaahdytysnesteet', description: 'Jäähdytysnesteet ja lisäaineet.', image: '/images/categories/jaahdytysnesteet.svg', productCount: 14 },
      { name: 'AdBlue', slug: 'adblue', description: 'Diesel-käyttöön tarkoitetut tuotteet.', image: '/images/categories/adblue.svg', productCount: 6 },
    ],
  },
  {
    name: 'Suodattimet',
    slug: 'suodattimet',
    description: 'Ilma-, öljy- ja polttoainesuodattimet.',
    image: '/images/categories/suodattimet.svg',
    bannerImage: '/images/categories/suodattimet.svg',
    productCount: 42,
    subcategories: [
      { name: 'Ilmansuodattimet', slug: 'ilmansuodattimet', description: 'Ilman suodattimet.', image: '/images/categories/ilmansuodattimet.svg', productCount: 14 },
      { name: 'Öljynsuodattimet', slug: 'oljynsuodattimet', description: 'Öljynsuodattimet ja huoltovälineet.', image: '/images/categories/oljynsuodattimet.svg', productCount: 15 },
      { name: 'Polttoainesuodattimet', slug: 'polttoainesuodattimet', description: 'Polttoainesuodattimet.', image: '/images/categories/polttoainesuodattimet.svg', productCount: 13 },
    ],
  },
  {
    name: 'Alusta ja jousitus',
    slug: 'alusta-ja-jousitus',
    description: 'Iskunvaimentimet, jouset ja tukivarret.',
    image: '/images/categories/alusta-ja-jousitus.svg',
    bannerImage: '/images/categories/alusta-ja-jousitus.svg',
    productCount: 36,
    subcategories: [
      { name: 'Iskunvaimentimet', slug: 'iskunvaimentimet', description: 'Etu- ja takaiskunvaimentimet.', image: '/images/categories/iskunvaimentimet.svg', productCount: 14 },
      { name: 'Jouset', slug: 'jouset', description: 'Jouset ja madallusjouset.', image: '/images/categories/jouset.svg', productCount: 12 },
      { name: 'Pallonivelet', slug: 'pallonivelet', description: 'Pallonivelet ja nivelepisteet.', image: '/images/categories/pallonivelet.svg', productCount: 10 },
    ],
  },
  {
    name: 'Ohjaus',
    slug: 'ohjaus',
    description: 'Ohjausvaihteet, pumpu ja osat.',
    image: '/images/categories/ohjaus.svg',
    bannerImage: '/images/categories/ohjaus.svg',
    productCount: 28,
    subcategories: [
      { name: 'Ohjausvaihteet', slug: 'ohjausvaihteet', description: 'Ohjausvaihteet ja osat.', image: '/images/categories/ohjausvaihteet.svg', productCount: 10 },
      { name: 'Raidetangot', slug: 'raidetangot', description: 'Raidetangot ja niiden osat.', image: '/images/categories/raidetangot.svg', productCount: 10 },
      { name: 'Ohjausnivelet', slug: 'ohjausnivelet', description: 'Ohjausnivelet ja suojukset.', image: '/images/categories/ohjausnivelet.svg', productCount: 8 },
    ],
  },
  {
    name: 'Voimansiirto',
    slug: 'voimansiirto',
    description: 'Kytkin, vaihteisto ja akselit.',
    image: '/images/categories/voimansiirto.svg',
    bannerImage: '/images/categories/voimansiirto.svg',
    productCount: 31,
    subcategories: [
      { name: 'Kytkin', slug: 'kytkin', description: 'Kytkin ja kytkinlevyt.', image: '/images/categories/kytkin.svg', productCount: 12 },
      { name: 'Vaihteiston osat', slug: 'vaihteiston-osat', description: 'Vaihteiston komponentit.', image: '/images/categories/vaihteiston-osat.svg', productCount: 12 },
      { name: 'CV-nivelet', slug: 'cv-nivelet', description: 'CV-nivelet ja osat.', image: '/images/categories/cv-nivelet.svg', productCount: 7 },
    ],
  },
  {
    name: 'Sähköosat',
    slug: 'sahko-osat',
    description: 'Akut, releet ja johdotukset.',
    image: '/images/categories/sahko-osat.svg',
    bannerImage: '/images/categories/sahko-osat.svg',
    productCount: 38,
    subcategories: [
      { name: 'Akut', slug: 'akut', description: 'Auton akut ja varaosat.', image: '/images/categories/akut.svg', productCount: 14 },
      { name: 'Anturit', slug: 'anturit', description: 'Anturiosat ja kännykkäantureita.', image: '/images/categories/anturit.svg', productCount: 12 },
      { name: 'Johdot', slug: 'johdot', description: 'Johdot ja sähkökaapelit.', image: '/images/categories/johdot.svg', productCount: 12 },
    ],
  },
];

export function findCategoryBySlug(slug: string) {
  const queue: CategoryNode[] = [...categoryTree];

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (node.slug === slug) {
      return node;
    }
    if (node.subcategories) {
      queue.push(...node.subcategories);
    }
  }

  return null;
}

export function getCategoryPath(slug: string) {
  const path: { name: string; slug: string }[] = [];

  function walk(nodes: CategoryNode[], parents: { name: string; slug: string }[]): boolean {
    for (const node of nodes) {
      const currentPath = [...parents, { name: node.name, slug: node.slug }];
      if (node.slug === slug) {
        path.push(...currentPath);
        return true;
      }
      if (node.subcategories && walk(node.subcategories, currentPath)) {
        return true;
      }
    }
    return false;
  }

  walk(categoryTree, []);
  return path;
}
