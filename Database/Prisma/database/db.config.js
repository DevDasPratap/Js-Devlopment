import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    // hit query log
    log: ['query']
})

export default prisma