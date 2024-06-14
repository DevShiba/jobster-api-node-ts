import { Router } from "express";
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobs";

const router = Router();

router.route("/").post(createJob).get(getAllJobs).get(getAllJobs);
router.route("/stats").get(showStats);

router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
