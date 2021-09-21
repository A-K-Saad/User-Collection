import React, { useState } from "react";

import Display from "./display";
import User from "./user";
import data from "../data";

const Intro = () => {
  const [users, setUsers] = useState(data);

  const filterUser = (job, event) => {
    console.log(event);
    const newUsers = data.filter((user) => user.job === job);
    if (job === "All") {
      setUsers(data);
      return;
    }
    setUsers(newUsers);
  };

  return (
    <div className="intro-section container">
      <i className="fas fa-users user-icon"></i>
      <h2>User Collection</h2>
      <p>
        P. W. User collection. As designers attempting to creating functional
        work, oftentimes we are required to make our designs look as finished as
        possible. Help us improving the best.
      </p>
      <Display filterUser={filterUser} users={users} />
      <div className="row mt-5">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
