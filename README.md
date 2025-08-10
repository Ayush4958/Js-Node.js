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

# 📘 Lecture 4 – RESTful API using Express and JSON File Storage

This lecture demonstrates building a RESTful API with Express.js, performing CRUD operations on a mock user database stored in MOCK_DATA.json, and implementing a custom logging middleware from scratch.


- ✅ Middleware with express.urlencoded() for form data parsing

- ✅ Custom middleware to log every incoming request with:

- Date
- Time
- Path accessed
- Logs stored in logs.txt

- ✅ REST API endpoints:

- GET /api/users – Get all users
- GET /api/users/:id – Get a single user by ID
- POST /api/users/:id – Add a new user and save to JSON

- ✅ HTML rendering of user list with template literals
