import Job from "../models/Job";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";
import mongoose from "mongoose";
import { Request, Response } from "express";
//import date-fns

interface CustomRequest extends Request {
  user: { userId: string };
}

export const getAllJobs = async (req: CustomRequest, res: Response) => {
  const { search, status, jobType, sort } = req.query;

  const queryObject: Record<string, any> = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  let result = Job.find(queryObject);

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};

export const getJob = async (req: Request, res: Response) => {};

export const createJob = async (req: Request, res: Response) => {};

export const updateJob = async (req: Request, res: Response) => {};

export const deleteJob = async (req: Request, res: Response) => {};

export const showStats = async (req: Request, res: Response) => {};
