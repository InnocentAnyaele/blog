import { Request, Response } from "express";
const BlogService = require('../service/BlogService')

    
    const viewBlogs = async (req:Request, res:Response) => {
        try{
            const tokenPayload = req.body.payload
            console.log('this is the token payload for the authenticated user', tokenPayload)
            const rows = await BlogService.viewBlogs(tokenPayload.userId)
            res.status(200).json(rows)
        }
        catch(err:any) {
            console.error('error from controller', err);
            res.status(500).json({message: err.message});

        }
    }
 
const postBlog = async (req:Request, res:Response) => {
    try {
        const tokenPayload = req.body.payload
        const title = req.body.title
        const content = req.body.content
        const rows = await BlogService.postBlog(tokenPayload.userId, title, content)
        res.status(200).json(rows)
    }
    catch(err:any) {
        console.error('error from controller', err);
        res.status(500).json({message: err.message});

    }
    }
    
    const viewBlog = async (req:Request, res:Response) => {
        try{
            const blogId = parseInt(req.params.id);
            const tokenPayload = req.body.payload
            const rows = await BlogService.viewBlog(tokenPayload.userId, blogId);
            console.log(rows)
            res.status(200).json(rows)
        }
        catch(err:any) {
            console.error('error from controller', err);
            res.status(500).json({message: err.message});

        }
    }


    const updateBlog = async (req:Request, res:Response) => {
        try{
            const tokenPayload = req.body.payload
            const blogId = parseInt(req.params.id)
            const title = req.body.title
            const content = req.body.content
            const rows = await BlogService.updateBlog(tokenPayload.userId, blogId, title, content)
            res.status(200).json({message :"blog updated", data : rows})
        }
        catch(err:any) {
            console.error('error from controller', err);
            res.status(500).json({message: err.message});
        }
    }

    const deleteBlog = async (req:Request, res:Response) => {
        try{
            const tokenPayload = req.body.payload
            const blogId = parseInt(req.params.id)
            const rows = await BlogService.deleteBlog(tokenPayload.userId, blogId)
            res.status(200).json({message: "blog deleted"})
        }
        catch(err:any) {
            console.error('error from controller', err);
            res.status(500).json({message: err.message});
        }

    }

    module.exports = {
        postBlog, viewBlog, viewBlogs, updateBlog, deleteBlog
    }
    
