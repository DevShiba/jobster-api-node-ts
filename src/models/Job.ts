import mongoose, { Document, Schema } from "mongoose";

interface IJob extends Document {
  company: string;
  position: string;
  status: string;
  createdBy: mongoose.Types.ObjectId;
  jobType: string;
  jobLocation: string;
}

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide company name"],
    maxlength: 50,
  },
  position: {
    type: String,
    required: [true, "Please provide position"],
    maxlength: 100,
  },
  status: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
  jobType: {
    type: String,
    enum: ["full-time", "part-time", "remote", "internship"],
    default: "full-time",
  },
  jobLocation: {
    type: String,
    default: "my city",
    required: true,
  },
});

const Job = mongoose.model<IJob>("Job", JobSchema);
export default Job;
