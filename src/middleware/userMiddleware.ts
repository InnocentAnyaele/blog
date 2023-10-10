import pool from '../utils/database'
import { NextFunction, Request, Response } from 'express'
const jwt = require('jsonwebtoken');


export const checkIfUserIsSignedIn = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log('decoded token', decoded)
        req.body.payload = decoded
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    next();
}

export const checkIfSignUpBodyEmpty = (req:Request, res: Response, next:NextFunction ) => {
    try{
        const username:string = req.body.username
        const password:string = req.body.password
        
        if (username == '' || password == ''){
            return res.status(400).json({message: "Username or Password cannot be empty"})
        }
    }
    catch(err) {
        console.log('checkIfSignUpBodyEmpty middleware error', err)
        return res.status(500).json({message: ""})

    }
    next()
}
