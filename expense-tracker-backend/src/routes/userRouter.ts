import { Router } from "express";
import prisma from "../db";
import bcrypt from "bcrypt";
import { bcryptSaltRounds } from "../config";
const userRouter = Router();
import {
  signUpInput,
  signinInput,
} from "@engr.rahul/expense-tracker-common/dist";

userRouter.post("/signup", async (req, res) => {
  // AUTH

  try {
    const { success } = signUpInput.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Wrong Inputs",
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      return res.status(411).json({
        message: "User already exists",
      });
    }

    const encryptedPass = await bcrypt.hash(
      req.body.password,
      bcryptSaltRounds
    );

    await prisma.user.create({
      data: {
        email: req.body.email,
        password: encryptedPass,
      },
    });

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(411).json({
      message: "User already exists",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  // AUTH

  try {
    const { success } = signinInput.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Wrong Inputs",
      });
    }

    const encryptedPass = await bcrypt.hash(
      req.body.password,
      bcryptSaltRounds
    );

    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
        password: encryptedPass,
      },
    });

    if (!user) {
      return res.status(411).json({
        message: "Error Finding User",
      });
    }

    res.status(200).json({
      message: "Found User",
    });
  } catch (error) {
    res.status(411).json({
      message: "Error Finding User",
    });
  }
});

userRouter.get("/transactions/:id", async (req, res) => {
  try {
    const totalAmountData = await prisma.totalAmount.findUnique({
      where: {
        userId: req.params.id,
      },
      select: {
        incomeTotal: true,
        expenseTotal: true,
        finalTotal: true,
      },
    });

    const transactionsData = await prisma.transactions.findMany({
      where: { userId: req.params.id },
    });

    res.json({
      totalAmountData,
      transactionsData,
    });
  } catch (error) {
    res.status(411).json({ message: "Error fetching user data" });
  }
});

export default userRouter;
