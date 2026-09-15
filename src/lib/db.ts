import { db } from "prisma/db"; // Safely imports the generated Prisma 8 runtime client

// 1. Declare the database type footprint to bypass custom class definitions
type PrismaClient = typeof db;

// 2. Prevent connection exhaustion during Next.js local development hot-reloads
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 3. Assign the singleton target instance cleanly
const prisma = globalForPrisma.prisma ?? db;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// 4. Export the single instance as your default PrismaClient profile wrapper
export default prisma as PrismaClient;
