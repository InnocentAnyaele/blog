import express from 'express'
import { viewBlogs } from '../controller/BlogController'
import { checkIfUserIsSignedIn } from '../middleware/userMiddleware'

const router = express.Router()
router.get('/', checkIfUserIsSignedIn, viewBlogs)
router.get('/:id', checkIfUserIsSignedIn, viewBlogs)
router.post('/', checkIfUserIsSignedIn, viewBlogs)
router.post('/:id', checkIfUserIsSignedIn, viewBlogs)
router.delete('/:id',checkIfUserIsSignedIn, viewBlogs)

export default router