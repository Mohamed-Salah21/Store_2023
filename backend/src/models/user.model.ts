import { Schema, model } from "mongoose";
import joi from "joi";
interface UserI {
  email: string;
  password: string;
  username: string;
  birthDate: Date;
}
export const validateUserFields = (payload: UserI) => {
  let userSch = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    birthDate: joi.date().required(),
  });
  return userSch.validate(payload);
};
const userSchema = new Schema<UserI>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
});
export const User = model("user", userSchema);
