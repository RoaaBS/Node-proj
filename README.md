
## Description
This project is built with Node.js, Express, and MySQL using Sequelize as the ORM. It includes user authentication with bcrypt for password hashing, 
file/image uploads, and an email-sending feature. Each user can create and manage their own blog posts.

## Features
- User authentication (registration & login)
- Password hashing using bcrypt
- File and image upload functionalityusing Cloudinary
- Blog management for each user
- Sending emails to users
- MySQL database using Sequelize ORM

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MySQL** - Relational database
- **Sequelize** - ORM for MySQL
- **Bcrypt** - Password hashing
- **Cloudinary** - Middleware for file uploads
- **Nodemailer** - Email-sending service

## API Endpoints

### Authentication
- **POST** `/auth/register` - Register a new user
- **POST** `/auth/login` - Authenticate user and return a token
### Users
- **GET** `/users` - Get all users
- **DELETE** `/users/:id` - Delete user
  
### Blog Management
- **POST** `/blog` - Create a new blog post
- **GET** `/blog` - Get all blog posts
- **GET** `/blog/:id` - Get a Details

### File Upload
- **PUT** `/users/:id` - Upload an image or file


