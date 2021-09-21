import { useState } from "react";

const Display = ({ filterUser, users }) => {
  const [jobs, setJobs] = useState(users);
  const [active, setActive] = useState("All");

  const uniqueJob = ["All", ...new Set(jobs.map((job) => job.job))];

  return (
    <div>
      {uniqueJob.map((job, index) => {
        return (
          <button
            className={`btn btn-purple ${job === active && "active-btn"}`}
            onClick={(event) => {
              filterUser(job, event);
              setActive(event.target.innerText);
            }}
            key={index}
          >
            {job}
          </button>
        );
      })}
    </div>
  );
};
export default Display;
