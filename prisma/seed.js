const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const expenseCategories = [
  // Necessary expenses
  { name: 'Groceries', description: 'Food and drinks' },
  { name: 'Housing', description: 'Rent and utilities' },
  { name: 'Transportation', description: 'Commute costs' },
  { name: 'Clothing', description: 'Necessary clothing' },
  { name: 'Household Supplies', description: 'Essential household items' },
  { name: 'Health Products', description: 'Hygiene products and medications' },
  { name: 'Emergency Medical', description: 'Urgent medical expenses' },
  { name: 'Savings', description: 'Savings for emergencies' },

  // Desired expenses
  { name: 'Hobbies', description: 'Hobby-related expenses' },
  { name: 'Entertainment', description: 'Leisure activities' },

  // Luxury expenses
  { name: 'Luxury Items', description: 'High-end goods and services' },
  { name: 'Brand Name Products', description: 'Designer and luxury brands' },
  { name: 'Tech Gadgets', description: 'Innovative devices' },
];

async function main() {
  await prisma.purchaseCategory.deleteMany({});

  for (const category of expenseCategories) {
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
