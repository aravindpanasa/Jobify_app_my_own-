import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  /* try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        next(error);
    }*/

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    console.log(userAlreadyExists);
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create(req.body);
  const token = user.createJWT(); //Invoking the custom instance method
  //  res.status(201).json({ user });
  res.status(StatusCodes.CREATED).json({
    //As select filed not works with create() so we are manually handling it
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password"); //As we put select false for password s we dont get password in the document so it sats this.password to null in checkPassword to undefined. in order to solve it we need to spectify about password explicitly.
  if (!user) {
    throw new UnAuthenticatedError("Invalid crenditials");
  }
  console.log(user);
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid crenditials");
  }

  const token = user.createJWT();
  user.password = undefined; //as we included password explicitly we in the findone statemnt. No we dont want send the password to front end so we are putting to undefined.
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
