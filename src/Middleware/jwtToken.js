// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_KEY || "FIDWBF84IGRIibsuxbug8E*G&*†̂‡°·‡̂†›dushood39hudhuieuciuihoho";

// export const authenticateUser = (Request, res, next) => {
//     const token = req.header("Authorization")?.split(" ")[1];
    
//     if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Invalid token" });
//     }
// };


export const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Bearer

    if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token is not valid" });
        req.user = user; 
        next();
    });
};
