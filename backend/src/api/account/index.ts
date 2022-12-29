import Router from 'express';
import { verifyAdmin, verifyToken } from 'middlewares';
import { createAccount, login, forgot, resetPassword } from './controller';

const router = Router();

router.post('/create', [verifyToken, verifyAdmin], createAccount);
router.post('/login', login);
router.post('/forgot', forgot);
router.post('/reset', resetPassword);

export default router;
