import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { CONNECTION_DB } from "./db/Connection_DB";
import productsRoutes from "./router/product.router";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
const port = process.env.PORT || 4000;
dotenv.config({ path: path.join(__dirname, ".env") });
app.use("/ecommerce/products", productsRoutes);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  CONNECTION_DB();
});  