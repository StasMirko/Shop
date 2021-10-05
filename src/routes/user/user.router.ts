import {Router} from 'express';
import {userController} from '../../controller';
import {
  checkConfirmTokenMiddleware,
  checkIsEmailExistsMiddleware,
  checkIsUserExistMiddleware, checkIsUserValidMiddleware,
  emailValidatorMiddleware
} from '../../middleware';

const router = Router();

router.post('/', checkIsUserValidMiddleware, checkIsEmailExistsMiddleware, userController.createUser);
router.post('/confirm', checkConfirmTokenMiddleware, userController.confirmUser);
router.post('/password/forgot', emailValidatorMiddleware, checkIsUserExistMiddleware, userController.forgotPassword);

export const userRouter = router;
