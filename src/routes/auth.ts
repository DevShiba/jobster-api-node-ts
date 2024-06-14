import { Router } from "express";
import { register, login, updateUser } from "../controllers/auth";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/update", updateUser);

export default router;