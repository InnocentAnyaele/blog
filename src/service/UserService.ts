import pool from "../utils/database";
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');

    const createUser = async (username:string, password:string) => {
        try{
            const userExistsQuery = `SELECT * FROM users WHERE username = $1`
            const userExistsResult = await pool.query(userExistsQuery, [username])
            if (userExistsResult.rows.length === 0) {
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                const createUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`
                const createUserResult = await pool.query(createUserQuery, [username, hashedPassword])
                return createUserResult.rows
            }
            else {
                throw new Error('User already exists')
            }
        }
        catch(err:any) {
            console.error('Could not create user', err);
            throw new Error(err.message);
        }
    }
 
    const signIn = async (username:string, password:string) => {
        try {
            const userExistsQuery = `SELECT * FROM users WHERE username = $1`
            const userExistsResult = await pool.query(userExistsQuery, [username])
            if (userExistsResult.rows.length === 0) {
                throw new Error('Wrong username or password')
            }
            const hashedPassword = userExistsResult.rows[0].password;
            const isMatch = await bcrypt.compare(password, hashedPassword);
            if (!isMatch) {
                throw new Error('Wrong username or password')
            }
            const token = jwt.sign({ userId: userExistsResult.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return token;
        } catch (err:any) {
            console.error('Could not sign in user', err);
            throw new Error(err.message);
        }
    }


module.exports = {
    createUser, signIn
}
