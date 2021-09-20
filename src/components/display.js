import data from "../data";
const Display = ({ filterUser }) => {

  const allJobs = [];

  data.forEach((user) => {
    const jobs = user.job;
    allJobs.push(jobs);
  });

  const uniqueJob = ["All", ...new Set(allJobs)];
  
  return (
    <div>
      {uniqueJob.map((job) => {
        return (
          <button className="btn btn-purple" onClick={() => filterUser(job)}>
            {job}
          </button>
        );
      })}
    </div>
  );
};
export default Display;
