import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import recordRoutes from "./routes/recordRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
