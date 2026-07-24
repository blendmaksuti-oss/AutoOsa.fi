import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.upsert({
    where: { slug: 'moottori-oljyt' },
    update: {},
    create: { name: 'Moottoriöljyt', slug: 'moottori-oljyt' },
  });

  const category2 = await prisma.category.upsert({
    where: { slug: 'jarrut' },
    update: {},
    create: { name: 'Jarrut', slug: 'jarrut' },
  });

  const category3 = await prisma.category.upsert({
    where: { slug: 'akut' },
    update: {},
    create: { name: 'Akut', slug: 'akut' },
  });

  const brand1 = await prisma.brand.upsert({
    where: { slug: 'bosch' },
    update: {},
    create: { name: 'Bosch', slug: 'bosch' },
  });

  const brand2 = await prisma.brand.upsert({
    where: { slug: 'mobil' },
    update: {},
    create: { name: 'Mobil', slug: 'mobil' },
  });

  const brand3 = await prisma.brand.upsert({
    where: { slug: 'varta' },
    update: {},
    create: { name: 'Varta', slug: 'varta' },
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'Mobil 5W-30',
        slug: 'mobil-5w-30',
        description: 'Korkealaatuinen moottoriöljy kaikille bensiiniautoille.',
        price: 39.9,
        comparePrice: 49.9,
        stock: 25,
        featured: true,
        bestseller: true,
        categoryId: category1.id,
        brandId: brand2.id,
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
        categoryId: category2.id,
        brandId: brand1.id,
      },
      {
        name: 'Varta 70 Ah Akku',
        slug: 'varta-70-ah-akku',
        description: 'Kestävä ja tehokas akku talvikuukausia varten.',
        price: 159.9,
        comparePrice: 189.9,
        stock: 12,
        bestseller: true,
        categoryId: category3.id,
        brandId: brand3.id,
      },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
