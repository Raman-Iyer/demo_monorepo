import { Inter } from "next/font/google";
import { generateUuid } from "../../../common/src/utils";
import { useEffect, useState } from "react";
import { addProject, getProjects } from "@/lib/api";
import { Project } from "../../../common/src/interfaces";
import ProjectCard from "@/components/ProjectCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  const addNewProject = async () => {
    const newProject = {
      id: generateUuid(),
      name: `Project ${projects.length + 1}`,
      commit: [],
    };
    const addedProject = await addProject(newProject.id, newProject.name);
    setProjects([...projects, addedProject]);
  };

  return (
    <div>
      <button onClick={addNewProject}>Add Project</button>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} details={project} />
        ))}
      </div>
    </div>
  );
}
