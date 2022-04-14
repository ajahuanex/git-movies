import express from "express";
import postRoutes from "./routes/posts.routes.js";
import movieRoutes from "./routes/movies.routes.js";
import { connectDB } from "./db.js";
import {PORT} from "./config.js";

const app = express();
connectDB();

app.use(postRoutes);
app.use(movieRoutes);

app.listen(PORT);
console.log("Server in running port :", PORT);