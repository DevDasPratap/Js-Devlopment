import { Router } from "express";
import { getAllUser, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/users', authorize, getAllUser);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/', (req, res) => res.json({ title: 'Create new user' }));
userRouter.put('/:id', (req, res) => res.json({ title: 'Update user details' }));
userRouter.delete('/:id', (req, res) => res.json({ title: 'Delete user' }));

export default userRouter;
