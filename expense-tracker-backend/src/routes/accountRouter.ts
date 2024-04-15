import { transactionData } from "@engr.rahul/expense-tracker-common/dist";
import { Router } from "express";
import prisma from "../db";
const accountsRouter = Router();

accountsRouter.post("/transact-money", async (req, res) => {
  //TODO: user ID from auth cookie or auth header need to look into that for now

  const { success } = transactionData.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Wrong Inputs",
    });
  }

  if (req.body.type == "TRANSFER") {
    await prisma.transactions.create({
      data: {
        amount: req.body.amount,
        transactionType: "INCOME",
        transactionCategory: req.body.category,
        extraDetails: req.body.extraDetails,
        transactionAccount: req.body.toAccount,
        //TODO: user ID from auth cookie or auth header need to look into that for now
        userId: "",
      },
    });

    await prisma.transactions.create({
      data: {
        amount: req.body.amount,
        transactionType: "EXPENSE",
        transactionCategory: req.body.category,
        extraDetails: req.body.extraDetails,
        transactionAccount: req.body.fromAccount,
        //TODO: user ID from auth cookie or auth header need to look into that for now
        userId: "",
      },
    });
  } else {
    await prisma.transactions.create({
      data: {
        amount: req.body.amount,
        transactionType: req.body.type,
        transactionCategory: req.body.category,
        extraDetails: req.body.extraDetails,
        transactionAccount: req.body.fromAccount,
        //TODO: user ID from auth cookie or auth header need to look into that for now
        userId: "",
      },
    });
  }

  let totalAmountData = await prisma.totalAmount.findFirst({
    //TODO: user ID from auth cookie or auth header need to look into that for now
    where: { userId: "id" },
  });

  if (!totalAmountData) {
    return null;
  }

  if (req.body.type == "INCOME") {
    totalAmountData = {
      ...totalAmountData,
      incomeTotal: totalAmountData?.incomeTotal + req.body.amount,
      finalTotal: totalAmountData.finalTotal + req.body.amount,
    };
  } else if (req.body.type == "EXPENSE") {
    totalAmountData = {
      ...totalAmountData,
      expenseTotal: totalAmountData?.expenseTotal + req.body.amount,
      finalTotal: totalAmountData.finalTotal - req.body.amount,
    };
  }

  await prisma.totalAmount.create({
    data: {
      incomeTotal: totalAmountData.incomeTotal,
      expenseTotal: totalAmountData.expenseTotal,
      finalTotal: totalAmountData.finalTotal,
      userId: "",
    },
  });
  res.json({
    message: "Transaction changes done",
  });
});

export default accountsRouter;
