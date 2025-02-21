import Info from "../Schema/sequlizeSchema.js";



// Create user
export const createdUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, isActive, address } = req.body;
    const user = await Info.create({ name, email, phoneNumber, isActive, address });
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user." });
  }
};

// Get all users
export const getUsersAll = async (req, res) => {
  try {
    const users = await Info.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users." });
  }
};

// Get user by ID
export const getUserbyId = async (req, res) => {
  try {
    const user = await Info.findByPk(req.params.id);
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
export const updatedUsers = async (req, res) => {
  try {
    const { name, email, phoneNumber, isActive, address } = req.body;
    const user = await Info.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.isActive = isActive;
    user.address = address;
    await user.save();

    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user." });
  }
};

// Delete user by ID
export const deletesUser = async (req, res) => {
  try {
    const user = await Info.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user." });
  }
};
