import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validatLoginInput,
} from "../middleware/valdationMiddleware.js";
import rateLimiter from "express-rate-limit";
const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});
router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validatLoginInput, login);
router.get("/logout", logout);

export default router;
