import { PrismaClient } from "@prisma/client/edge";
import { dbUrl } from "./config";

const prismaClientSingleton = () => {
  return new PrismaClient({ datasourceUrl: dbUrl });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV != "PRODUCTION") globalThis.prismaGlobal = prisma;
