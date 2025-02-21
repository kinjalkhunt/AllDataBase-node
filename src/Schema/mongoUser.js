import { mongoose } from "mongoose";

// Create Schema
const userschema = new mongoose.Schema({
    name: ({
        type: String,
        required: true
    }),
    email: ({
        type: String,
        required: true,
        unique: true,
    }),
    password: ({
        type: String,
        required: true,
    }),
    phoneNumber: ({
        type: Number,
        required: true
    })

})

// create Model 
const User = mongoose.model("User", userschema);
export default User;


// import { DataTypes, Model } from "sequelize";
// import sequelize from "../DBConnection/connection.js";
// import { AppDataSource } from "../DBConnection/connection.js";
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// class User extends Model {}

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: "User",
//     tableName: "users",
//     timestamps: true,
//   }
// );

// export default User;

// if we use node with ts in our project then make it this type schema

// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// @Entity("student")// Name of the table in MySQL
// export class Student {
//   @PrimaryGeneratedColumn() // Auto-generated primary key
//   id!: number;

//   @Column({ type: "varchar", length: 255 })
//   name!: string;

//   @Column({ type: "varchar", length: 255 })
//   email!: string;

//   // Define `affected` as a column if you need it in the database
//   @Column({ type: "int", default: 0 })
//   affected!: number;
// }

// import "reflect-metadata"; // Ensure this is at the top of your file

// // if we use javascript in our project then make it this type schema
// const Student = new EntitySchema({
//   name: "Student",
//   tableName: "saller",
//   columns: {
//     id: {
//       primary: true,
//       type: "int",
//       generated: true,
//     },
//     name: {
//       type: "varchar",
//       length: 255,
//     },
//     email: {
//       type: "varchar",
//       length: 255,
//       unique: true,
//     },
//     affected: {
//       type: "int",
//       default: 0,
//     },
//   },
// });

// export default Student;
