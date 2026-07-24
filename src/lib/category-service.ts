import { prisma } from '@/lib/prisma';
import type { Category } from '@prisma/client';

export async function getTopCategories() {
  return prisma.category.findMany({
    where: { parentId: null, isActive: true },
    orderBy: { sortOrder: 'asc' },
    include: {
      children: {
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
      },
    },
  });
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    include: {
      parent: true,
      children: {
        where: { isActive: true },
        orderBy: { sortOrder: 'asc' },
        include: {
          _count: {
            select: { products: true },
          },
        },
      },
    },
  });
}

export async function getSubcategoryBySlugs(parentSlug: string, subslug: string) {
  return prisma.category.findFirst({
    where: {
      slug: subslug,
      isActive: true,
      parent: {
        slug: parentSlug,
      },
    },
    include: {
      parent: true,
      products: {
        where: {},
        include: { brand: true, category: true },
        orderBy: { createdAt: 'desc' },
      },
    },
  });
}

export async function getProductsForCategory(categoryId: string) {
  return prisma.product.findMany({
    where: { categoryId },
    include: { brand: true, category: true },
    orderBy: { createdAt: 'desc' },
  });
}

export type CategoryWithRelations = Category & {
  parent?: Category | null;
  children?: Category[];
};
