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