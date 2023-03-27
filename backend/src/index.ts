import express, { Response } from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import { CONNECTION_DB } from "./db/Connection_DB";
import productsRoutes from "./router/product.router";
import cartRoutes from "./router/cart.router";
import userRoutes from "./router/user.router";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
const port = process.env.PORT || 4000;
dotenv.config({ path: path.join(__dirname, ".env") });
app.use(`/store23/v1/products`, productsRoutes);
app.use(`/store23/v1/cart`, cartRoutes);
app.use(`/store23/v1/user`, userRoutes);
app.use("*", (_, res: Response) =>
  res.status(404).send({
    errpr: "Un handled Route",
  })
);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  CONNECTION_DB();
});
