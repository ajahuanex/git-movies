import dotenv from "dotenv";
dotenv.config();
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/moviesdb';
export const PORT = process.env.PORT || 4000;