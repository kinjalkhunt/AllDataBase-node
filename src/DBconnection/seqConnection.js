import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// connection with sequelize with nodejs in phpmyadmin

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log("🔥 Sequlize Database connected successfully!");
    })
    .catch((err) => {
        console.error("Sequlize Unable to connect to the database:", err);
    });

export default sequelize;