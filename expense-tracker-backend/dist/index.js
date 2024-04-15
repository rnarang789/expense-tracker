"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const config_1 = require("./config");
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use((0, cors_1.default)());
app.use("/", userRouter_1.default);
app.listen(config_1.port, () => {
    console.log(`listening to port ${config_1.port}`);
});
