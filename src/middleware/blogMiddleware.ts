import { Request, Response, NextFunction } from "express";


export const checkIfPostBlogBodyEmpty = (req:Request, res: Response, next:NextFunction ) => {
    try{
        const title:string = req.body.title
        const content:string = req.body.content
        
        if (title == '' || content == ''){
            return res.status(400).json({message: "Title or content cannot be empty"})
        }
    }
    catch(err) {
        console.log('checkIfPostBlogBodyEmpty middleware error', err)
        return res.status(500).json({message: ""})

    }
    next()
}