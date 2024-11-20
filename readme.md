Here is the `README.md` for the **Node.js Backend** using **SQLite3**:

---

# Node.js Backend for User Management Application

This is the backend for the **User Management Application**, built using **Node.js**, **Express**, and **SQLite3** for persistent user data storage.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Running the Server](#running-the-server)
- [Troubleshooting](#troubleshooting)

---

## Technologies Used

- **Node.js** - JavaScript runtime for building the server.
- **Express** - Web framework for Node.js.
- **SQLite3** - Database for storing user data.
- **CORS** - Cross-Origin Resource Sharing to enable interaction between the frontend and backend.
- **uuid** - A library to generate unique user IDs.

---

## Installation

### Prerequisites

Ensure that you have **Node.js** and **npm** installed. You can check your installations by running:

```bash
node -v
npm -v
```

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-management-app.git
   cd user-management-app
   ```

2. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Setup

1. **Database Initialization**: The backend will automatically create an SQLite3 database file (`users.db`) in the root of the backend folder if it doesn't already exist. The database will store user data in a table called `users`. The table will have the following fields:
   - `id` (TEXT) - Unique identifier for the user
   - `firstName` (TEXT) - User's first name
   - `lastName` (TEXT) - User's last name
   - `email` (TEXT) - User's email address
   - `department` (TEXT) - Department where the user works

2. **API Endpoints**:

   - **GET `/users`**: Fetches all users from the database.
   - **POST `/users`**: Adds a new user to the database.
   - **PUT `/users/:id`**: Updates an existing user by their `id`.
   - **DELETE `/users/:id`**: Deletes a user by their `id`.

---

## API Endpoints

### **GET `/users`**
- **Description**: Retrieves a list of all users.
- **Response**:
  ```json
  [
    {
      "id": "1",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "department": "Engineering"
    },
    {
      "id": "2",
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com",
      "department": "HR"
    }
  ]
  ```

### **POST `/users`**
- **Description**: Adds a new user to the database.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "department": "Engineering"
  }
  ```
- **Response**:
  ```json
  {
    "id": "unique-uuid",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "department": "Engineering"
  }
  ```

### **PUT `/users/:id`**
- **Description**: Updates an existing user by their `id`.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "department": "Engineering"
  }
  ```
- **Response**:
  ```json
  {
    "id": "unique-uuid",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "department": "Engineering"
  }
  ```

### **DELETE `/users/:id`**
- **Description**: Deletes a user by their `id`.
- **Response**:
  ```json
  {
    "message": "User deleted"
  }
  ```

---

## Running the Server

1. To start the server, run the following command:
   ```bash
   node server.js
   ```

2. The backend server will be accessible at `http://localhost:5000`.

3. The backend will automatically handle the creation of the SQLite database (`users.db`) if it does not already exist.

---

## Troubleshooting

1. **Database Errors**: If the database file is not being created, ensure that your application has permission to write to the current directory. Make sure the folder is writable.

2. **API Errors**: If you encounter any API-related issues, check the server logs for error messages. The error message will usually provide a hint about the problem.

3. **CORS Issues**: If you experience CORS errors, ensure that the frontend is running on a different port (e.g., `http://localhost:3000`), and the backend is properly configured with CORS to allow cross-origin requests. The CORS middleware should be set up correctly on the server.

4. **UUID Generation**: If `uuid` isn't generating a unique `id`, make sure the package is installed correctly (`npm install uuid`), and that it's being imported and used properly.

---

**Happy coding!**

---

This `README.md` provides a full guide to setting up and running the backend for the **User Management Application** with Node.js and SQLite3.