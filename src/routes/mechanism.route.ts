import { Router } from 'express';
import { auth } from '../middleware/auth';
import { MechanismController } from '../controllers/mechanism.controller';

const router = Router();
const mechanismController = new MechanismController();

router.post('/borrow/:id', auth, mechanismController.borrow);
router.post('/return/:id', auth, mechanismController.returnBook);

export default router;
