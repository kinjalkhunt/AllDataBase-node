import { z } from "zod";


export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15), // Adjusted to string type
  isActive: z.boolean(),
  address: z.object({                      // Adjusted to JSON object type
    street: z.string().min(1),
    city: z.string().min(1),
    zip: z.string().min(5),
  }),
});


// export const User = sequelize.define("Info", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   phoneNumber: {
//     type: DataTypes.BIGINT, // Change to BIGINT to store numbers
//     allowNull: false,
//   },
//   isActive: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: true,
//   },
//   address: {
//     type: DataTypes.STRING, // Change to STRING to store as text
//     allowNull: false,
//   }
// });



// // Example usage
// const userData = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
//   phoneNumber: '1234567890',
//   isActive: true,
//   address: {
//     street: '123 Main St',
//     city: 'Sample City',
//     zip: '12345',
//   },
// };

// createUser(userData);
