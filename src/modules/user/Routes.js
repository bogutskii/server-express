import { Router } from 'express';
import userRegister from './userRegister';

const router = Router();

router.post('/', userRegister);

export default router;
