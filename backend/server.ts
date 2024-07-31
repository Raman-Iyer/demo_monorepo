import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import projectRouter from "./src/routes/project";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api", projectRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
