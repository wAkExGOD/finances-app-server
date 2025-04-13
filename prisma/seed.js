const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const CATEGORIES = [
  { name: 'Food and Drink' },
  { name: 'Purchases' },
  { name: 'Housing' },
  { name: 'Transport' },
  { name: 'Vehicle' },
  { name: 'Life and entertainment' },
  { name: 'Communication, PC' },
  { name: 'Financial expenses' },
  { name: 'Investments' },
  { name: 'Other' },
];

async function main() {
  await prisma.purchaseCategory.deleteMany({});

  for (const category of CATEGORIES) {
    await prisma.purchaseCategory.create({
      data: category,
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
