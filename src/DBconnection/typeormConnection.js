import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port:  3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE,
  synchronize: true, 
  logging: true,
  entities: ["src/schema/typeOrmSchema.js"], // Ensure correct path
//   synchronize: true, // Set to false in production

});


AppDataSource.initialize()
    .then(() => {
        console.log("🚀 typeOrm Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("🔥 typeOrm Error during Data Source initialization", err)
    })