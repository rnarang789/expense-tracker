import mongoose from "mongoose";
import { dbUrl } from "./config";

export const connectDB = async function () {
  try {
    await mongoose.connect(dbUrl);
    console.log(`Database conected`);
  } catch (error) {
    console.log(`error connecting to database ${error}`);
  }
};

enum TransactionTypeEnum {
  INCOME,
  EXPENSE,
  TRANSFER,
}

const TransactionSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const UserSchema = new mongoose.Schema({
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

export const UserModel = mongoose.model("User", UserSchema);
export const TransactionModel = mongoose.model(
  "Transactions",
  TransactionSchema
);
