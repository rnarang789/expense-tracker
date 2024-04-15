"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionData = exports.totalAmountData = exports.signinInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    username: zod_1.default.string().optional(),
    phoneNumber: zod_1.default.string().min(10).max(10).optional(),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(5),
});
exports.totalAmountData = zod_1.default.object({
    incomeTotal: zod_1.default.number(),
    expenseTotal: zod_1.default.number(),
    finalTotal: zod_1.default.number(),
});
exports.transactionData = zod_1.default.object({
    type: zod_1.default.enum(["INCOME", "EXPENSE", "TRANSFER"]),
    category: zod_1.default.string(),
    extraDetails: zod_1.default.string().optional().default(""),
    amount: zod_1.default.number(),
    fromAccount: zod_1.default.string(),
    toAccount: zod_1.default.string().optional().default(""),
    date: zod_1.default.string(),
});
