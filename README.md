## How to Use This Backend API

This README provides detailed instructions on how to use the backend API, including available routes and setup steps.

### User Routes
- **POST Sign Up**
  - Route: `/api/user/signUp`
  - Parameters: `username`, `password`
  - Returns a JSON object acknowledging success.

- **POST Sign In**
  - Route: `/api/user/signIn`
  - Parameters: `username`, `password`
  - Returns a JSON object with the following format:
    ```json
    {
      "token": "string"
    }
    ```
  After signing in, you will receive a token that you must include in your 'Bearer token headers' to authenticate yourself.

### Blog Routes
- **GET View All Blogs**
  - Route: `/api/blog`
  - Returns an array of blogs, each containing the following fields:
    - `id`
    - `title`
    - `content`
    - `createdAt`
    - `updatedAt`

- **GET View Blog**
  - Route: `/api/blog/{blogId}`
  - Returns a single blog with the following fields:
    - `id`
    - `title`
    - `content`
    - `createdAt`
    - `updatedAt`

- **POST Create Blog**
  - Route: `/api/blog`
  - Creates a new blog and returns the created blog with the following fields:
    - `id`
    - `title`
    - `content`
    - `createdAt`
    - `updatedAt`

- **PUT Update Blog**
  - Route: `/api/blog/{blogId}`
  - Updates a blog and returns the updated blog with the following fields:
    - `id`
    - `title`
    - `content`
    - `createdAt`
    - `updatedAt`

- **DELETE Delete Blog**
  - Route: `/api/blog/{blogId}`
  - Deletes a blog and returns the deleted blog with the following fields:
    - `id`
    - `title`
    - `content`
    - `createdAt`
    - `updatedAt`

**Note:** All of these routes require a JWT token in the request header, which is provided upon signing in.

### Setup
Follow these steps to set up and run the backend API:

1. Clone the Git repository.
2. Create a `.env` file and edit the following PostgreSQL and JWT_SECRET configurations:
    - `DB_HOST=[Hostname]`
    - `DB_PORT=5432`
    - `DB_PASSWORD=[Password]`
    - `DB_NAME=blog`
    - `JWT_SECRET=randomSecretKey`
3. Download and install Node.js.
4. Run `npm install` in the project directory using the command line.
5. Start the server by running `npm start` in the project directory using the command line.
6. Create a user by using the provided user routes.
7. Sign in to obtain an authentication token.
8. Use the blog routes with the obtained token in the request header for authentication.
