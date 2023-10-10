import express from 'express'
import { checkIfUserIsSignedIn } from '../middleware/userMiddleware'
import { checkIfPostBlogBodyEmpty } from '../middleware/blogMiddleware'
const BlogController = require('../controller/BlogController')

const router = express.Router()
router.get('/', checkIfUserIsSignedIn, BlogController.viewBlogs)
router.get('/:id', checkIfUserIsSignedIn, BlogController.viewBlog)
router.post('/', checkIfUserIsSignedIn, checkIfPostBlogBodyEmpty, BlogController.postBlog)
router.put('/:id', checkIfUserIsSignedIn, checkIfPostBlogBodyEmpty, BlogController.updateBlog)
router.delete('/:id',checkIfUserIsSignedIn, BlogController.deleteBlog)

export default router