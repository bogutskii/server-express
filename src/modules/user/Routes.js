import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);

export default router;
