"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecret = exports.dbUrl = exports.port = void 0;
exports.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000";
exports.dbUrl = (_b = process.env.DATABASE_URL) !== null && _b !== void 0 ? _b : "";
exports.jwtSecret = (_c = process.env.JWT_SECRET) !== null && _c !== void 0 ? _c : "";
