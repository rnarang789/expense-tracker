/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose from "mongoose";
export declare const connectDB: () => Promise<void>;
export declare const UserModel: mongoose.Model<{
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
}> & {
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    email: string;
    password: string;
    phoneNumber?: string | null | undefined;
    username?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const TransactionModel: mongoose.Model<{
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    transactionType: string;
    income?: string | null | undefined;
    expense?: string | null | undefined;
    transfer?: string | null | undefined;
    transactionDate?: Date | null | undefined;
    category?: string | null | undefined;
    extraDetails?: string | null | undefined;
    account?: string | null | undefined;
    tansferToAccount?: string | null | undefined;
    userId?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
