import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  // no need for await here, hashSync is already using it
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // must use await, takes time
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (err) {
    next(err);
  }
};
