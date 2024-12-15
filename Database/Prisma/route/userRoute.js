import { Router } from "express";
import { createUser, deleteUser, getSignleUser, getUsers, updateUser } from "../controller/userController.js";

const router = Router()

router.post('/', createUser)
router.put('/:id', updateUser)
router.get('/', getUsers)
router.get('/:id', getSignleUser)
router.delete('/:id', deleteUser)

export default router