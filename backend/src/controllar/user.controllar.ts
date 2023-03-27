import { Request, Response } from "express";
import { User, validateUserFields } from "../models/user.model";

export const registerUser = async (req: Request, res: Response) => {
  const { error } = validateUserFields(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  res.status(200).send({
    resala: "Eshta 3alek",
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({
      error: "Invalid email or password",
    });
  }
  res.status(200).send({
    success: true,
    message: "You are logged in successfully",
  });
};
