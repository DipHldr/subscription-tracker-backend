import {Router} from 'express'
import { getUser, getUserById } from '../controllers/user.controller.js'
import authotize from '../middlewares/auth.middleware.js'

const userRouter=Router()

userRouter.get('/',getUser)

userRouter.get('/:id',authotize,getUserById)

userRouter.post('/',(req,res)=>res.send({title:'CREATE new user'}))

userRouter.put('/:id',(req,res)=>res.send({title:'UPDATE user'}))

userRouter.delete('/:id',(req,res)=>res.send({title:'DELETE a user'}))

export default userRouter;