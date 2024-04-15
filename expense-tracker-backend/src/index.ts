import express from "express";
import "dotenv/config";
import { port } from "./config";
import cors from "cors";
import userRouter from "./routes/userRouter";
import accountsRouter from "./routes/accountRouter";

const app = express();

app.use(cors());
app.use("/user", userRouter);
app.use("/accounts", accountsRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
