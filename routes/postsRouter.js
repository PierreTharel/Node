import {Router} from 'express'
import { getAllPosts, createPost, getPostByID, deletePost } from '../controllers/postsController.js'
import { verifyUser } from '../middlewares/loginVerification.js'

const postsRouter = Router()

postsRouter.get('/posts', verifyUser, getAllPosts )
postsRouter.get('/posts/:id', getPostByID)

postsRouter.post('/posts', createPost)

postsRouter.delete('/posts/:id', deletePost)

export default postsRouter