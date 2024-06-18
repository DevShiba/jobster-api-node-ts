import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({
      user: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
      token,
    });
};

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    if(!email || !password){
      throw new BadRequestError("Please provide email and password");
    }

    const user = await User.findOne({email});
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({
      user: {
        email: user.email,
        lastName: user.lastName,
        location: user.location,
        name: user.name,
        token,
      },
    });

};

export const updateUser = async (req: Request, res: Response) => {
    const {email, name, lastName, location} = req.body;
      if (!email || !name || !lastName || !location) {
        throw new BadRequestError("Please provide all values");
      }


    
};
