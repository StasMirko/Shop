import {Router} from 'express';
import {userController} from '../../controller';
import {checkIsEmailExistsMiddleware} from '../../middleware';

const router = Router();

router.post('/', checkIsEmailExistsMiddleware, userController.createUser);
router.post('/confirm', userController.confirmUser);

export const userRouter = router;
