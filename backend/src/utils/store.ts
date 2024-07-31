import { LocalStorage } from "node-localstorage";
import { Commit, Project } from "@demo_monorepo/common";

const localStorage = new LocalStorage("./store");

export const connectDb = (): void => {
  const db = JSON.parse(localStorage.getItem("projects"));

  if (!db || db === "") {
    localStorage.setItem("projects", JSON.stringify([]));
  }
};

export const getProjectsFromStore = (): Project[] => {
  const db = JSON.parse(localStorage.getItem("projects"));

  return db;
};

export const addNewProject = (project: Project): void => {
  const db = getProjectsFromStore();
  db.push(project);
  localStorage.setItem("projects", JSON.stringify(db));
};

export const addNewCommit = (commit: Commit, projectId: string) => {
  const db = getProjectsFromStore();
  const project = db.find((p) => p.id === projectId);
  project?.commit.push(commit);
  localStorage.setItem("projects", JSON.stringify(db));
};
