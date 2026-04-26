import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Only initialize Prisma if NOT in build phase
const isBuild = process.env.NEXT_PHASE === 'phase-production-build';
const db = (globalThis.prisma || (isBuild ? null : new PrismaClient())) as PrismaClient;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export { db };
