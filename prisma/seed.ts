import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();

  const categories = [
    {
      name: 'Moottori',
      slug: 'moottori',
      description: 'Moottorin huolto‑osat ja osa‑sarjat ajoneuvon suorituskyvyn säilyttämiseksi.',
      image: '/images/categories/moottori.svg',
      sortOrder: 1,
      children: [
        {
          name: 'Moottoriöljyt',
          slug: 'moottorioljyt',
          description: 'Moottoriöljyt ja öljynsuodattimet tehokkaaseen voiteluun.',
          image: '/images/categories/moottorioljyt.svg',
          sortOrder: 1,
        },
        {
          name: 'Jakohihnat ja ketjut',
          slug: 'jakohihnat-jaa-ketjut',
          description: 'Jakohihnat, ketjut ja kiristimet moottorin ajoitukseen.',
          image: '/images/categories/jakohihnat.svg',
          sortOrder: 2,
        },
        {
          name: 'Tiivisteet',
          slug: 'tiivisteet',
          description: 'Moottorin tiivisteet, kannentiivisteet ja öljytiivisteet.',
          image: '/images/categories/tiivisteet.svg',
          sortOrder: 3,
        },
      ],
    },
    {
      name: 'Jarrut',
      slug: 'jarrut',
      description: 'Jarrujärjestelmän osat ja huoltopaketit turvalliseen pysäyttämiseen.',
      image: '/images/categories/jarrut.svg',
      sortOrder: 2,
      children: [
        {
          name: 'Jarrulevyt',
          slug: 'jarrulevyt',
          description: 'Jarrulevyt ja kiinnikkeet moderniin jarrutukseen.',
          image: '/images/categories/jarrulevyt.svg',
          sortOrder: 1,
        },
        {
          name: 'Jarrupalat',
          slug: 'jarrupalat',
          description: 'Jarrupalat ja jarrusatulat tehokkaaseen pysäytykseen.',
          image: '/images/categories/jarrupalat.svg',
          sortOrder: 2,
        },
        {
          name: 'Jarrunesteet',
          slug: 'jarrunesteet',
          description: 'Jarrunesteet ja -täyttöaineet jarrujärjestelmän huoltoon.',
          image: '/images/categories/jarrunesteet.svg',
          sortOrder: 3,
        },
      ],
    },
    {
      name: 'Sähkö ja valaistus',
      slug: 'sahko-ja-valaistus',
      description: 'Sähkökomponentit, akut ja valaistusratkaisut ajoneuvon käyttöön.',
      image: '/images/categories/sahko-osat.svg',
      sortOrder: 3,
      children: [
        {
          name: 'Akut ja laturit',
          slug: 'akut-ja-laturit',
          description: 'Akut, laturit ja käynnistyskomponentit ajon varmistamiseen.',
          image: '/images/categories/battery.svg',
          sortOrder: 1,
        },
        {
          name: 'Sytytys',
          slug: 'sytytys',
          description: 'Sytytystulpat, johtosarjat ja sytytysjärjestelmän osat.',
          image: '/images/categories/ignition.svg',
          sortOrder: 2,
        },
        {
          name: 'Ajovalot ja vilkut',
          slug: 'ajovalot-ja-vilkut',
          description: 'Ajovalot, sumuvalot ja vilkut turvalliseen tieajoon.',
          image: '/images/categories/lighting.svg',
          sortOrder: 3,
        },
      ],
    },
    {
      name: 'Alusta ja ohjaus',
      slug: 'alusta-ja-ohjaus',
      description: 'Jousitus-, ohjaus- ja alustan osat vakauteen ja ajomukavuuteen.',
      image: '/images/categories/alusta-ja-jousitus.svg',
      sortOrder: 4,
      children: [
        {
          name: 'Iskunvaimentimet',
          slug: 'iskunvaimentimet',
          description: 'Iskunvaimentimet, jouset ja alustan huolto-osat.',
          image: '/images/categories/iskunvaimentimet.svg',
          sortOrder: 1,
        },
        {
          name: 'Ohjausnivelet',
          slug: 'ohjausnivelet',
          description: 'Ohjausnivelet, raidetangot ja ohjausventtiilit.',
          image: '/images/categories/ohjausnivelet.svg',
          sortOrder: 2,
        },
        {
          name: 'Pallonivelet',
          slug: 'pallonivelet',
          description: 'Pallonivelet, johtokumit ja osat ohjauksen toimintaan.',
          image: '/images/categories/pallonivelet.svg',
          sortOrder: 3,
        },
      ],
    },
    {
      name: 'Jäähdytys ja ilmastointi',
      slug: 'jaahdytys-ja-ilmastointi',
      description: 'Jäähdytys- ja ilmastointiosat moottorin ja matkustamon hallintaan.',
      image: '/images/categories/cooling.svg',
      sortOrder: 5,
      children: [
        {
          name: 'Radiatorit',
          slug: 'radiatorit',
          description: 'Radiatorit, vesipumput ja jäähdytysjärjestelmän komponenteet.',
          image: '/images/categories/radiator.svg',
          sortOrder: 1,
        },
        {
          name: 'Ilmastointikompressorit',
          slug: 'ilmastointikompressorit',
          description: 'Ilmastointikompressorit, kennot ja tiivistesarjat.',
          image: '/images/categories/ac-compressor.svg',
          sortOrder: 2,
        },
        {
          name: 'Venttiilit ja kennot',
          slug: 'venttiilit-ja-kennot',
          description: 'Ilmastoinnin venttiilit ja lämmönvaihtimet.',
          image: '/images/categories/air-conditioning.svg',
          sortOrder: 3,
        },
      ],
    },
    {
      name: 'Vaihteisto ja voimansiirto',
      slug: 'vaihteisto-ja-voimansiirto',
      description: 'Vaihteiston ja voimansiirron osat sekä huoltotarvikkeet.',
      image: '/images/categories/vaihteiston-osat.svg',
      sortOrder: 6,
      children: [
        {
          name: 'Vaihteistoöljyt',
          slug: 'vaihteistooljyt',
          description: 'Vaihteistoöljyt ja tiivistesarjat voimansiirron suojaamiseen.',
          image: '/images/categories/vaihteistooljyt.svg',
          sortOrder: 1,
        },
        {
          name: 'Kytkinosat',
          slug: 'kytkinosat',
          description: 'Kytkinpaketit, paineasetelmat ja vaihteiston vaihto-osat.',
          image: '/images/categories/kytkin.svg',
          sortOrder: 2,
        },
        {
          name: 'Voimansiirto-osat',
          slug: 'voimansiirto-osat',
          description: 'Vetoakselit, tasauspyörästöt ja voimansiirron korjausosat.',
          image: '/images/categories/voimansiirto.svg',
          sortOrder: 3,
        },
      ],
    },
  ];

  const brands = [
    { name: 'Bosch', slug: 'bosch' },
    { name: 'Mobil', slug: 'mobil' },
    { name: 'Varta', slug: 'varta' },
  ];

  await prisma.brand.createMany({ data: brands, skipDuplicates: true });

  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        image: category.image,
        sortOrder: category.sortOrder,
        isActive: true,
        children: {
          create: category.children.map((child) => ({
            name: child.name,
            slug: child.slug,
            description: child.description,
            image: child.image,
            sortOrder: child.sortOrder,
            isActive: true,
          })),
        },
      },
    });
  }

  const [engineCategory, brakingCategory, batteryCategory] = await Promise.all([
    prisma.category.findUnique({ where: { slug: 'moottorioljyt' } }),
    prisma.category.findUnique({ where: { slug: 'jarrupalat' } }),
    prisma.category.findUnique({ where: { slug: 'akut-ja-laturit' } }),
  ]);

  const [bosch, mobil, varta] = await Promise.all([
    prisma.brand.findUnique({ where: { slug: 'bosch' } }),
    prisma.brand.findUnique({ where: { slug: 'mobil' } }),
    prisma.brand.findUnique({ where: { slug: 'varta' } }),
  ]);

  const products = [
    {
      name: 'Mobil 5W-30',
      slug: 'mobil-5w-30',
      description: 'Korkealaatuinen moottoriöljy kaikille bensiiniautoille.',
      price: 39.9,
      comparePrice: 49.9,
      stock: 25,
      featured: true,
      bestseller: true,
      categoryId: engineCategory?.id,
      brandId: mobil?.id,
    },
    {
      name: 'Bosch Jarrupala',
      slug: 'bosch-jarrupala',
      description: 'Luotettava jarrupala pitkälle ajomatkalle.',
      price: 84.9,
      comparePrice: 99.0,
      stock: 18,
      featured: true,
      newArrival: true,
      categoryId: brakingCategory?.id,
      brandId: bosch?.id,
    },
    {
      name: 'Varta 70 Ah Akku',
      slug: 'varta-70-ah-akku',
      description: 'Kestävä ja tehokas akku talvikuukausia varten.',
      price: 159.9,
      comparePrice: 189.9,
      stock: 12,
      bestseller: true,
      categoryId: batteryCategory?.id,
      brandId: varta?.id,
    },
  ];

  await prisma.product.createMany({
    data: products.filter((product) => product.categoryId && product.brandId) as any[],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
