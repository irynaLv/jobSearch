import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validatLoginInput,
} from "../middleware/valdationMiddleware.js";
const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validatLoginInput, login);
router.get("/logout", logout);

export default router;
