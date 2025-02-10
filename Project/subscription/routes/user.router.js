import { Router } from "express";

const userRouter = Router();

userRouter.get('/user', (req, res) => res.json({ title: 'Fetch all user' }));
userRouter.get('/:id', (req, res) => res.json({ title: 'Get user details' }));
userRouter.post('/', (req, res) => res.json({ title: 'Create new user' }));
userRouter.put('/:id', (req, res) => res.json({ title: 'Update user details' }));
userRouter.delete('/:id', (req, res) => res.json({ title: 'Delete user' }));

export default userRouter;
