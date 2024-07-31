import express from "express";
import { getProjects, addProject, performCommit } from "../controllers/project";

const router = express.Router();

router.get("/projects", getProjects);
router.post("/add/project", addProject);
router.post("/commit", performCommit);

export default router;
