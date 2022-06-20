
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError} from "../errors/index.js"

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

    const userAlreadyExists = await User.findOne({ email});
    if (userAlreadyExists) {
        console.log(userAlreadyExists);
        throw new BadRequestError("Email already in use");
    }

    const user = await User.create(req.body);
    const token = user.createJWT(); //Invoking the custom instance method
  //  res.status(201).json({ user });
    res.status(StatusCodes.CREATED).json({  //As select filed not works with create() so we are manually handling it
        user: {
            email: user.email,
            lastName: user.lastName,
            location: user.location,
            name: user.name,
        },
        token,
        location: user.location,
    });
}

const login = async(req, res) => {
    res.send("login user");
}

const updateUser = async(req, res) => {
    res.send("updateUser");
}

export { register, login, updateUser }