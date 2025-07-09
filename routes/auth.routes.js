import {Router} from 'express'
import { signIn, signOut, signUp } from '../controllers/auth.controller.js';

const authRouter=Router();

// api/v1/auth/signUp
authRouter.post('/sign-up',signUp)

authRouter.post('/sign-in',signIn)

authRouter.post('/sign-out',signOut)

export default authRouter;