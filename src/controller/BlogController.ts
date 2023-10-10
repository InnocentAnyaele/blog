import { Request, Response } from "express";
import pool from "../utils/database";
const BlogService = require('../service/BlogService')

    
    const viewBlogs = async (req:Request, res:Response) => {
        try{
            const rows = await BlogService.viewBlogs(1)
            res.status(200).json(rows)
        }
        catch(err) {
            console.error('error from controller', err);
            res.status(500).json({message: "Internal server error"});

        }
    }
 
const postBlog = async (req:Request, res:Response) => {
    }
    
    const viewBlog = async (req:Request, res:Response) => {
        try{
            const blogId = parseInt(req.params.id);
            const rows = await BlogService.viewBlog(1, blogId);
            console.log(rows)
            res.status(200).json(rows)
        }
        catch(err) {
            console.error('error from controller', err);
            res.status(500).json({message: "Internal server error"});

        }
    }


    const updateBlog = (req:Request, res:Response) => {

    }

    const deleteBlog = (req:Request, res:Response) => {

    }

    module.exports = {
        postBlog, viewBlog, viewBlogs, updateBlog, deleteBlog
    }
    
