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

export const login = async (req: Request, res: Response) => {};

export const updateUser = async (req: Request, res: Response) => {};
