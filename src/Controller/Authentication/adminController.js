import express from "express"
import LoginModel from "../../Schema/loginSchema.js"

export const loginAdmin = async (req, res) => { 
    try {
        const {userName, email, password} = req.body
        const user = await LoginModel.findOne({email})
        if(user)
            return res.status(400).json({message:"User already exists"})

        // create login
        const newLogin = new LoginModel({
            userName,
            email,
            password
        })
        await newLogin.save()
        res.status(201).json(newLogin)
        
    } catch (error) {
        console.error("Error in loginAdmin:", error); // Debugging line
        res.status(400).json({ message: error.message });
    }
    
}