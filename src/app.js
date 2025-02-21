import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import mongoConnection from "./DBconnection/mongoConnection.js";


// import connectDB from "./DBConnection/connection.js";
// import { createUser, deleteUser, getUserById, getUsers, updateUser } from "./Controller/typeormController.js";
// import { createUser, deleteUser, getUserById, getUsers, updateUser } from "./Controller/seqController.js";

// import { deleteUser, getUserById, getUsers, registerUser, updateUser } from "./Controller/userController.js";
// import { deleteUser, getUserById, getUsers, registerUser, updateUser } from "./Controller/fireController.js";

dotenv.config();  
const app = express();
app.use(express.json());

// mongoose route

// app.post("/create", registerUser)
// app.get("/getAll", getUsers)
// app.get("/get/:id", getUserById)
// app.put("/update/:id", updateUser)
// app.delete("/delete/:id", deleteUser)


// Firebase Route
// app.post("/create", registerUser)
// app.get("/getAll", getUsers)
// app.get("/get/:id", getUserById)
// app.put("/update/:id", updateUser)
// app.delete("/delete/:id", deleteUser)

// sequlize Route
// app.post("/users", createUser);
// app.get("/usersAll", getUsers); 
// app.get("/users/:id", getUserById); 
// app.put("/users/:id", updateUser); 
// app.delete("/users/:id", deleteUser); 

// typeorm Route
// app.post("/users", createUser); // Create user
// app.get("/usersAll", getUsers); // Get all users
// app.get("/users/:id", getUserById); // Get user by ID
// app.put("/users/:id", updateUser); // Update user by ID
// app.delete("/users/:id", deleteUser); // Delete user by ID


const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
    res.send("Hello World");
});
mongoConnection();
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});



