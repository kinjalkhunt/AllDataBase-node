// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @Entity() //when setup with ts base at that time use this type schema
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   email: string;

//   @Column()
//   phoneNumber: string;

//   @Column()
//   isActive: boolean;

//   @Column()
//   address: string;
// }
import { EntitySchema } from "typeorm"; //when setup with js base at that time use this type schema

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    phoneNumber: {
      type: "varchar",
    },
    isActive: {
      type: "boolean",
    },
    address: {
      type: "varchar",
    },
  },
});
