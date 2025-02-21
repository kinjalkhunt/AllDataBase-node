// import admin from "firebase-admin";
// import dotenv from "dotenv";
// import fs from "fs";
// import path from "path";

// dotenv.config();

// // Manually read the JSON file
// const serviceAccountPath = path.resolve("serviceAccount.json"); // Adjust path if needed
// const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// if (!admin.apps.length) {
//   try {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: process.env.FIREBASE_URL,
//       storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     });
//     console.log("🔥 Firebase connected successfully");
//   } catch (error) {
//     console.error(`❌ Error connecting to Firebase: ${error.message}`);
//     process.exit(1);
//   }
// }

// const db = admin.firestore();

// export { db };
import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// Ensure the service account JSON file path is correct
const serviceAccountPath = path.resolve("serviceAccount.json");
if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ Service account file not found.");
  process.exit(1);
}
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
    console.log("🔥 Firebase connected successfully");
  } catch (error) {
    console.error(`❌ Error connecting to Firebase: ${error.message}`);
    process.exit(1);
  }
}

const db = admin.firestore();
export { db };
