const {Pool} = require('pg')
import dotenv from 'dotenv'
import { createPostTableQuery, createUserTableQuery } from './queries';

dotenv.config()

const pool = new Pool({
    // host: process.env.DB_HOST,
    // port: Number(process.env.DB_PORT),
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'admin',
    database: 'blog'
})

const createTables = async () => {
    try {
        await pool.query(createUserTableQuery)
        await pool.query(createPostTableQuery)
        console.log('Tables created successfully');
    } catch (error) {
        console.log('Cannot create tables', error);
        throw error;
        return;
    }
};

createTables();



export default pool

  