export const port: string = process.env.PORT ?? "3000";
export const dbUrl: string = process.env.DATABASE_URL ?? "";
export const jwtSecret: string = process.env.JWT_SECRET ?? "";
export const dbDirectUrl: string = process.env.DIRECT_URL ?? "";
export const bcryptSaltRounds: number = 12;
