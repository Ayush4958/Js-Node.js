# 📘 Lecture 1 – Node.js File System Module (`fs`)

This lecture introduces basic file system operations in Node.js using the built-in `fs` module. Both asynchronous and synchronous methods are demonstrated.

---

## 📄 Topics Covered

### ✅ 1. Writing to Files
- **Asynchronously** using `fs.writeFile()`
- **Synchronously** using `fs.writeFileSync()`

### ✅ 2. Reading from Files
- **Asynchronously** using `fs.readFile()`
- **Synchronously** using `fs.readFileSync()`

### ✅ 3. Copying Files
- Using `fs.copyFileSync()`

### ✅ 4. Deleting Files
- Using `fs.unlinkSync()`

### ✅ 5. Getting File Info *(Commented)*
- Using `fs.statSync()`

---

# 📘 Lecture 2 – Creating a Basic HTTP Server in Node.js

This lecture demonstrates how to create a basic HTTP server using Node.js' built-in http and url modules.

### 🔧 Key Concepts Used:
- http.createServer() – Creating a web server

- url.parse() – Parsing URL and extracting pathname and query parameters

- fs.appendFile() – Logging requests to server.log

- switch-case – Handling multiple routes

### ⚙️ What This Server Does:
- Logs each incoming request with timestamp to server.log

- Responds to different routes:

- / → Home page response

- /about?myname=YourName → About page with dynamic name

- /contact → Contact page response

- Any other path → 404 message

--- 

# 📘 Lecture 3 – Introduction to Express.js

In this lecture, you set up a basic web server using the popular Express.js framework for Node.js. It simplifies routing and handling HTTP requests.

### 🔧 Key Concepts Used:
- express() – Initializes the express app

- app.get() – Handles GET requests on specific routes

- req.query – Accesses query parameters from the URL

- res.send() – Sends a response to the client

### 🌐 What This Server Does:

Responds to:

- / → Returns a static message from the Home page

- /about?name=YourName → Returns a dynamic message from the About page using query param name

---

# 📘 Lecture 4 – RESTful API with Express, MongoDB (Mongoose) & MVC Architecture
In this lecture, the application is refactored into an MVC (Model-View-Controller) structure while connecting to a MongoDB database using Mongoose. The project includes custom middleware for logging and full CRUD operations for users.

### 🛠 Features Implemented

- MVC Architecture
    - Models – Define database schema and interact with MongoDB.
    - Views – Render HTML responses.
    - Controllers – Contain route logic for handling requests and responses.
    - Routes – Organize API endpoints.
    - Middleware – Reusable functions (logging requests).

- MongoDB Connection via Mongoose.
- Request Logging Middleware – Logs request date, time, and path in logs.txt.
- User CRUD API :-
    - Create, Read, Update, and Delete users.
    - HTML view for displaying users.
