import { Router } from "express";
import { auth } from "../middleware/auth";
import { MechanismController } from "../controllers/mechanism.controller";

const router = Router();

router.post("/borrow/:id", auth, MechanismController.borrow);
router.post("/return/:id", auth, MechanismController.returnBook);

export default router;
