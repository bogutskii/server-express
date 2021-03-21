import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';

const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userId', userGetById); //http://localhost:5000/user/6056ebab2e3c27fead4aee39

export default router;
