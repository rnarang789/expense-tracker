import z from "zod";

export const signUpInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().optional(),
  phoneNumber: z.string().min(10).max(10).optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export const totalAmountData = z.object({
  incomeTotal: z.number(),
  expenseTotal: z.number(),
  finalTotal: z.number(),
});

export const transactionData = z.object({
  type: z.enum(["INCOME", "EXPENSE", "TRANSFER"]),
  category: z.string(),
  extraDetails: z.string().optional().default(""),
  amount: z.number(),
  fromAccount: z.string(),
  toAccount: z.string().optional().default(""),
  date: z.date(),
});

export type SignUpInput = z.infer<typeof signUpInput>;
export type SignInInput = z.infer<typeof signinInput>;
export type TotalAmountData = z.infer<typeof totalAmountData>;
export type TransactionData = z.infer<typeof transactionData>;
