import {
  addNewCommit,
  addNewProject,
  connectDb,
  getProjectsFromStore,
} from "../utils/store";
import { RequestHandler } from "express";
import { generateUuid } from "@demo_monorepo/common";

interface ProjectBody {
  id: string;
  name: string;
}

interface CommitBody {
  message: string;
  projectId: string;
}

// @ts-expect-error: req is required in function declaration
export const getProjects: RequestHandler = async (req, res) => {
  connectDb();
  const projects = getProjectsFromStore();

  return res.status(200).json(projects);
};

export const addProject: RequestHandler<
  unknown,
  unknown,
  ProjectBody,
  unknown
> = async (req, res) => {
  connectDb();
  console.log(req.body);
  const { id, name } = req.body;
  const newProj = { id, name, commit: [] };

  addNewProject(newProj);

  return res.status(200).json(newProj);
};

export const performCommit: RequestHandler<
  unknown,
  unknown,
  CommitBody,
  unknown
> = (req: any, res: any) => {
  connectDb();
  const { message, projectId } = req.body;
  const newCommit = { message, id: generateUuid() };

  addNewCommit(newCommit, projectId);

  return res.status(200).json(newCommit);
};
