import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

let url_link = process.env.MONGO;

mongoose.connect(url_link)
    .then(() => console.log('Database connected now'))
    .then((error) => console.log(error))