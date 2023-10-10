import pool from "../utils/database";

    
    const viewBlogs = async (userId:number) => {
        try{
            const query = 'SELECT * FROM posts WHERE user_id = $1'
            const result = await pool.query(query, [userId])
            return result.rows
        }
        catch(err) {
            console.error('error from view blog service', err);
            throw new Error('Internal server error');
        }
    }
 
    const viewBlog = async (userId:number, blogId:number) => {
        try{
            const query = 'SELECT * FROM posts WHERE user_id = $1 AND id = $2'
            const result = await pool.query(query, [userId, blogId])
            return result.rows
        }
        catch(err) {
            console.error(err);
            throw new Error('Internal server error');
        }
    }

    const postBlog = async (userId:number ,title:string, content:string ) => {
        try{
            const query = `INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *`
            const result = await pool.query(query, [userId, title, content])
            return result.rows
        }
        catch(err) {
            console.error(err);
            throw new Error('Internal server error');
        }
    }

    const updateBlog = async (userId:number, blogId:number, title:string, content:string ) => {
        try{
            const checkBlogQuery = 'SELECT * FROM posts WHERE user_id = $1 AND id = $2'
            const checkBlogResult = await pool.query(checkBlogQuery, [userId, blogId])
            if (checkBlogResult.rows.length === 0) {
                throw new Error('Blog does not exist');
            }
            const query = `UPDATE posts SET title = $2, content = $3 WHERE user_id = $1 AND id = $4 RETURNING *`
            const result = await pool.query(query, [userId, title, content, blogId])
            return result.rows
        }
        catch(err:any) {
            console.error(err);
            throw new Error(err.message);
        }
    }


    const deleteBlog = async (userId:number ,blogId:number) => {
        try{
            const checkBlogQuery = 'SELECT * FROM posts WHERE user_id = $1 AND id = $2'
            const checkBlogResult = await pool.query(checkBlogQuery, [userId, blogId])
            if (checkBlogResult.rows.length === 0) {
                throw new Error('Blog does not exist');
            }
            const query = `DELETE FROM posts WHERE user_id = $1 AND id = $2 RETURNING *`
            const result = await pool.query(query, [userId, blogId])
            return result.rows
        }
        catch(err:any) {
            console.error(err);
            throw new Error(err.message);
        }
    }


module.exports = {
    viewBlog, viewBlogs, postBlog, updateBlog, deleteBlog
}
