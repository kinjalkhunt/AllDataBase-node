import { db } from "../DBconnection/fireConnection.js";
import { userSchema } from "../Schema/fireSchema.js";

export const registerUser = async (req, res) => {
    try {
      const userData = req.body;
      console.log("Received User Data:", req.body);
      // Validate input data
      const validatedData = userSchema.parse(userData);
      console.log("Validated Data:", validatedData);

      // Add the user document to Firestore
      const userRef = db.collection('Users').doc(); 
      await userRef.set(validatedData);
  
      res.status(201).json({
        message: "User created successfully!",
        userId: userRef.id,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({
        message: "Error creating user.",
        error: error.message,
      });
    }
  };
  
  // Function to get all users
  export const getUsers = async (req, res) => {
    try {
      const snapshot = await db.collection('Users').get();
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching users." });
    }
  };
  
  // Function to get a user by ID
  export const getUserById = async (req, res) => {
    const { id } = req.params;
    
    try {
      const userRef = db.collection('Users').doc(id);
      const doc = await userRef.get();
  
      if (!doc.exists) {
        return res.status(404).json({ message: "User not found." });
      }
  
      res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Error fetching user." });
    }
  };
  
  // Function to update a user
  export const updateUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
  
    try {
      // Validate input data
      const validatedData = userSchema.parse(userData);
  
      const userRef = db.collection('Users').doc(id);
      await userRef.update(validatedData);
  
      res.status(200).json({ message: "User updated successfully!" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(400).json({
        message: "Error updating user.",
        error: error.message,
      });
    }
  };
  
  // Function to delete a user
  export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const userRef = db.collection('Users').doc(id);
      await userRef.delete();
  
      res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user." });
    }
  };