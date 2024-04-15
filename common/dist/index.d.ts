import z from "zod";
export declare const signUpInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    username: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    username?: string | undefined;
    phoneNumber?: string | undefined;
}, {
    email: string;
    password: string;
    username?: string | undefined;
    phoneNumber?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const totalAmountData: z.ZodObject<{
    incomeTotal: z.ZodNumber;
    expenseTotal: z.ZodNumber;
    finalTotal: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    incomeTotal: number;
    expenseTotal: number;
    finalTotal: number;
}, {
    incomeTotal: number;
    expenseTotal: number;
    finalTotal: number;
}>;
export declare const transactionData: z.ZodObject<{
    type: z.ZodEnum<["INCOME", "EXPENSE", "TRANSFER"]>;
    category: z.ZodString;
    extraDetails: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    amount: z.ZodNumber;
    fromAccount: z.ZodString;
    toAccount: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    date: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    date: string;
    category: string;
    extraDetails: string;
    amount: number;
    fromAccount: string;
    toAccount: string;
}, {
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    date: string;
    category: string;
    amount: number;
    fromAccount: string;
    extraDetails?: string | undefined;
    toAccount?: string | undefined;
}>;
export type SignUpInput = z.infer<typeof signUpInput>;
export type SignInInput = z.infer<typeof signinInput>;
export type TotalAmountData = z.infer<typeof totalAmountData>;
export type TransactionData = z.infer<typeof transactionData>;
