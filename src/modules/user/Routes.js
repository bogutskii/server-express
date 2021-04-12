import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
//import authController from '../authController/authController';
import { check } from 'express-validator';
import userDeleteAll from './userDeleteAll';
import userLogin from './userLogin';

const router = Router();

router.post(
  '/',
  [
    check('username', 'email can`t be empty').notEmpty(),
    check('email', 'email can`t be empty').normalizeEmail().isEmail(),
    check('password', 'password can`t be empty').isLength({ min: 6, max: 15 }),
  ],
  userRegister,
);

router.post('/', userRegister);
router.post('/login', userLogin);
router.get('/', userGetAll);
router.get('/:userId', userGetById); // GET http://localhost:5000/user/6056ebab2e3c27fead4aee39
router.patch('/:userId', userUpdateById); // PATCH http://localhost:5000/user/6056ebab2e3c27fead4aee39
router.delete('/:userId', userDeleteById); // DELETE http://localhost:5000/user/6056ebab2e3c27fead4aee39
router.delete('/', userDeleteAll); // DELETE http://localhost:5000/user/6056ebab2e3c27fead4aee39

export default router;
