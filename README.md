# Blog Application

A full-stack blog application built with Next.js for the frontend and Express.js with MongoDB for the backend.

## Project Structure

```bash 
📁final-blog-app
├── 📁blog-client-main (Next.js Frontend)
│   ├── 📁public
│   ├── 📁src
│   │   ├── 📁assets
│   │   ├── 📁components
│   │   ├── 📁pages
│   │   ├── 📁styles
│   │   ├── 📁types
│   │   └── 📁utils
│   ├── next.config.mjs
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
└── 📁blog-server-main (Express.js Backend)
├── 📁src
│   ├── 📁config
│   ├── 📁controllers
│   ├── 📁middleware
│   ├── 📁models
│   ├── 📁routes
│   └── app.js
├── .env
└── package.json
```

## Setup Instructions

1. Clone the repository:

```bash
   git clone https://github.com/chiragmathur27/Blog-App.git
   cd Blog-App
```

2. Set up the backend:
```bash 
  cd blog-server-main
  npm install
```
3. Set up the frontend:
```bash
   cd ../blog-client-main
   npm install
```
4. Configure environment variables:
- In `blog-server-main`, create a `.env` file with the following:

  ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=3000
  ```
- In `blog-client-main/src`, ensure `.env.local` is properly configured,.
  ```
  NEXT_PUBLIC_API_URL=http://localhost:3000/api
  ```



## Running the Application

1. Start the backend server:
``` bash
  cd blog-server-main
  npm start
```

2. In a new terminal, start the Next.js development server:
```bash
  cd blog-client-main
  npm run dev
```
