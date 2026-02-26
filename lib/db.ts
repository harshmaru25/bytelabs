import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined;
}


const globalForPrism = globalThis

export const db = globalForPrism.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") {
    globalForPrism.prisma = db;
}