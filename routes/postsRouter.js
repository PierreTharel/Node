import {Router} from 'express'
import { getAllPosts, createPost, getPostByID, deletePost } from '../controllers/postsController.js'

const postsRouter = Router()

postsRouter.get('/posts', getAllPosts)

postsRouter.get('/posts/:id', getPostByID)

postsRouter.post('/posts', createPost)

postsRouter.delete('/posts/:id', deletePost)

export default postsRouter