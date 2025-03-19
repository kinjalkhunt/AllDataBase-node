// models/info.js
import { DataTypes } from "sequelize";
import sequelize from "../../allDatabase/src/DBconnection/seqConnection.js";

const Info = sequelize.define("Info", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,  // Changed to STRING for phone numbers
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

await sequelize.sync(); 
console.log("Info model was synchronized successfully.");

export default Info;
