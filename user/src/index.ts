import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from './routes/user.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user/",userRouter)


app.listen(process.env.PORT, () => {
  console.log(`User service is running on ${process.env.PORT}`);
});
