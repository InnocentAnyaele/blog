## How to use this backend API

This backend API provides the following routes:

### User Routes
- POST Sign up -> /api/user/signUp -> username, password
- POST Sign in -> /api/user/signIn -> username, password 

After you sign in you will be provided with a token which you'll add to your 'Bearer token headers' to authenticate you.

### Blog Routes
- GET View all blogs -> /api/blog
- GET View blog -> /api/blog/{blogId} -> 
- POST Create blog -> /api/blog
- PUT Update blog -> /api/blog/{blogId}
- DELETE Delete blog -> /api/blog/{blogId}

**Note:** These routes require a JWT token in the request header, which is provided upon sign in.

### Setup
1. Clone git repo
2. Create .env file and edit the ff. postgres config
    - DB_HOST
    - DB_PORT
    - DB_PASSWORD
    - DB_NAME=blog
3. Download node
4. Run "npm install" in project path in cmd
5. Run "npm start" in project path in cmd
6. Create a user
7. Sign in
8. Use the blog routes
