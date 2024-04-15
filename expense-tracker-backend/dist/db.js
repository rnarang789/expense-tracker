"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = exports.UserModel = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const connectDB = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.dbUrl);
            console.log(`Database conected`);
        }
        catch (error) {
            console.log(`error connecting to database ${error}`);
        }
    });
};
exports.connectDB = connectDB;
var TransactionTypeEnum;
(function (TransactionTypeEnum) {
    TransactionTypeEnum[TransactionTypeEnum["INCOME"] = 0] = "INCOME";
    TransactionTypeEnum[TransactionTypeEnum["EXPENSE"] = 1] = "EXPENSE";
    TransactionTypeEnum[TransactionTypeEnum["TRANSFER"] = 2] = "TRANSFER";
})(TransactionTypeEnum || (TransactionTypeEnum = {}));
const TransactionSchema = new mongoose_1.default.Schema({
    income: String,
    expense: String,
    transfer: String,
    transactionDate: Date,
    category: String,
    extraDetails: String,
    account: String,
    tansferToAccount: String,
    transactionType: {
        type: String,
        enum: TransactionTypeEnum,
        default: TransactionTypeEnum.EXPENSE,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
});
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minLength: 6 },
    phoneNumber: {
        type: String,
        unique: true,
        minLength: 10,
        maxLength: 10,
    },
    username: {
        type: String,
        unique: true,
        trim: true,
    },
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
exports.TransactionModel = mongoose_1.default.model("Transactions", TransactionSchema);
