import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI as string);
}
export default dbConnect;