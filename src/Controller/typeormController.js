import { AppDataSource } from "../DBconnection/typeormConnection.js";
import  User  from "../Schema/typeOrmSchema.js";



// Create user
export const createUser1 = async (req, res) => {
  try {
    const { name, email, phoneNumber, isActive, address } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create({ name, email, phoneNumber, isActive, address });
    await userRepository.save(user);
    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user." });
  }
};

// Get all users
export const getallUsers = async (req, res) => {
  try {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users." });
  }
};

// Get user by ID
export const getUserByid = async (req, res) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Error fetching user." });
  }
};

// Update user by ID
export const updateUsers = async (req, res) => {
  try {
    const { name, email, phoneNumber, isActive, address } = req.body;
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.isActive = isActive;
    user.address = address;
    await userRepository.save(user);

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user." });
  }
};

// Delete user by ID
export const deletUser = async (req, res) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await userRepository.remove(user);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user." });
  }
};

