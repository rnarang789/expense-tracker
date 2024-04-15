import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "./config";

interface ExtendedRequest extends Request {
  userId: string;
}

interface JwtPayload {
  id: string;
}

export function authMiddleware(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(403).json({ error: "Error Validating Token" });
  }

  try {
    const decoded = jwt.verify(
      authToken.split(" ")[1],
      jwtSecret
    ) as JwtPayload;
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Error Validating Token" });
  }
}
