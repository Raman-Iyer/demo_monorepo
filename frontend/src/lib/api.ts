import { Commit, Project } from "../../../common/src/interfaces";
import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:5000/api";

export const getProjects = async (): Promise<Project[]> => {
  const res = await axios.get(`${BASE_URL}/projects`);

  return res.data;
};

export const addProject = async (
  id: string,
  name: string
): Promise<Project> => {
  const res = await axios.post(`${BASE_URL}/add/project`, {
    id,
    name,
  });

  return res.data;
};

export const performCommit = async (
  message: string,
  projectId: string
): Promise<Commit> => {
  const res = await axios.post(`${BASE_URL}/commit`, { message, projectId });

  return res.data;
};
