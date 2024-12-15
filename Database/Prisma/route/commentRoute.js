import { Router } from "express";
import { createComment, deleteComment, showAllComments, showComment } from "../controller/commentController.js";

const router = Router()

router.post('/', createComment)
// router.put('/', updatePost)
router.get('/', showAllComments)
router.get('/:id', showComment)
router.delete('/:id', deleteComment)

export default router