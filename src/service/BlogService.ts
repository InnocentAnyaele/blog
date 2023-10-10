import pool from "../utils/database";

    
    const viewBlogs = async (userId:number) => {
        try{
            const query = 'SELECT * FROM posts WHERE user_id = $1'
            const result = await pool.query(query, [userId])
            return result.rows
        }
        catch(err) {
            console.error('error from view blog service', err);
            throw err;
        }
    }
 
    const viewBlog = async (userId:number, blogId:number) => {
        try{
            const userId = 1
            const query = 'SELECT * FROM posts WHERE user_id = $1 AND id = $2'
            const result = await pool.query(query, [userId, blogId])
            return result.rows
        }
        catch(err) {
            console.error(err);
            throw err
        }
    }


module.exports = {
    viewBlog, viewBlogs
}
