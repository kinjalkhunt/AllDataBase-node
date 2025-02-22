// import express from "express";
// import dotenv from "dotenv";
// import "reflect-metadata";
// import mongoConnection from "./DBconnection/mongoConnection.js";
// // import { deleteUser, getUserById, getUsers, registerUser, updateUser } from "./Controller/fireController.js";
// import { createUser, deletedUser, getAllUsers, getUserId, updatedUser } from "./Controller/userController.js";
// // import { createdUser, deletesUser, getUserbyId, getUsersAll, updatedUsers } from "./Controller/seqController.js";
// // import { createUser1, deletUser, getallUsers, getUserByid, updateUsers } from "./Controller/typeormController.js";


// dotenv.config();  
// const app = express();
// app.use(express.json());

// // mongoose route
// app.post("/create", createUser)
// app.get("/getAll", getAllUsers)
// app.get("/get/:id", getUserId)
// app.put("/update/:id", updatedUser)
// app.delete("/delete/:id", deletedUser)


// // // Firebase Route
// // app.post("/create", registerUser)
// // app.get("/getAll", getUsers)
// // app.get("/get/:id", getUserById)
// // app.put("/update/:id", updateUser)
// // app.delete("/delete/:id", deleteUser)

// // sequlize Route
// // app.post("/users", createdUser);
// // app.get("/usersAll", getUsersAll); 
// // app.get("/users/:id", getUserbyId); 
// // app.put("/users/:id", updatedUsers); 
// // app.delete("/users/:id", deletesUser); 

// // // typeorm Route
// // app.post("/users", createUser1); 
// // app.get("/usersAll", getallUsers); 
// // app.get("/users/:id", getUserByid); 
// // app.put("/users/:id", updateUsers); 
// // app.delete("/users/:id", deletUser); 


// const port = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
// mongoConnection();

// app.listen(port, () => {
//     console.log(`🚀 Server is running on port ${port}`);
// });



import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import mongoConnection from "./DBconnection/mongoConnection.js";
import {CreateUser, deletedUser, getAllUsers, getUserId, updatedUser } from "./Controller/userController.js";
import { router } from "./Route/index.js";
dotenv.config();  
const app = express();
app.use(express.json());

// mongoose route
app.post("/create", CreateUser)
app.get("/getAll", getAllUsers)
app.get("/get/:id", getUserId)
app.put("/update/:id", updatedUser)
app.delete("/delete/:id", deletedUser)

app.use("/v1",router)

const port = process.env.PORT || 8000;
// render home page
app.get("/", (req, res) => {
    res.send("Hello I'm All DataBase Project");
});
mongoConnection();

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
