import { Project } from "../../../common/src/interfaces";
import { performCommit } from "@/lib/api";
import React, { useState } from "react";

const ProjectCard = ({ details }: { details: Project }) => {
  const [message, setMessage] = useState("");

  const commit = async () => {
    const commitData = await performCommit(message, details.id);
    details.commit.push(commitData);
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={commit}>Commit</button>
      <h1>{details.name}</h1>
      <p>{details.id}</p>
      {details.commit.length ? (
        <div>
          {details.commit.map((commit) => (
            <p key={commit.id}>
              {commit.id} - {commit.message}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProjectCard;
