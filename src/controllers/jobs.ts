import Job from "../models/Job";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";
import mongoose from "mongoose";
import { Request, Response } from "express";
//import date-fns

export const getAllJobs = async (req: Request, res: Response) => {
  const { search, status, jobType, sort } = req.query;


};

export const getJob = async(req: Request, res: Response)=>{

}

export const createJob = async(req: Request, res: Response)=>{

}

export const updateJob = async(req: Request, res: Response)=>{

}

export const deleteJob = async(req: Request, res: Response)=>{

}

export const showStats = async(req: Request, res: Response)=>{

}