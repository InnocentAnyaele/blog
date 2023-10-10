import { Request, Response } from "express";
const UserService = require('../service/UserService')

const signUp = async (req:Request, res:Response) => {
    try{
        const username = req.body.username
        const password = req.body.password
        const rows = await UserService.createUser(username, password)
        res.status(200).json({msg : 'User has been created', data: rows})

    }
    catch(err:any) {
        console.log('user controller error', err)
        return res.status(500).json({ message : err.message})
    }

}

const signIn = async (req:Request, res:Response) => {
    try{
        const username = req.body.username
        const password = req.body.password
        const token = await UserService.signIn(username, password)
        res.status(200).json({msg : 'Login in successful', token: token})

    }
    catch(err: any) {
        console.log('user controller error', err)
        return res.status(500).json({ message : err.message})    
    }
}

module.exports = {
    signUp, signIn
}