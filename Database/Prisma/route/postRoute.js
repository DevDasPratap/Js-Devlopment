import { Router } from "express";
import { createPost, deletePost, getPosts, getSinglePost, searchPost, updatePost } from "../controller/postController.js";

const router = Router()

router.post('/', createPost)
router.put('/', updatePost)
router.get('/', getPosts)
router.get("/search", searchPost); //alway use before : id type route
router.get('/:id', getSinglePost)
router.delete('/:id', deletePost)

export default router