export interface Project {
  id: string;
  name: string;
  commit: Commit[];
}

export interface Commit {
  message: string;
  id: string;
}
