## How to use this backend API

This backend API provides the following routes:

### User Routes
- POST Sign up -> /api/user/signUp -> username, password -> returns a JSON object acknowledging success:
- POST Sign in -> /api/user/signIn -> username, password -> returns a JSON object with the following format:
  {
    "token": "string"
  }

After you sign in you will be provided with a token which you'll add to your 'Bearer token headers' to authenticate you.

### Blog Routes
- GET View all blogs -> /api/blog -> returns an array of blogs in the following format:
  [{
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }]
- GET View blog -> /api/blog/{blogId} -> returns a single blog in the following format:
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
- POST Create blog -> /api/blog -> creates a new blog and returns the created blog in the following format:
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
- PUT Update blog -> /api/blog/{blogId} -> updates a blog and returns the updated blog in the following format:
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }
- DELETE Delete blog -> /api/blog/{blogId} -> deletes a blog and returns the deleted blog in the following format:
  {
    "id": "string",
    "title": "string",
    "content": "string",
    "createdAt": "string",
    "updatedAt": "string"
  }

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
