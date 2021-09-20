import React, { useState } from "react";

import Display from "./display";
import User from "./user";
import data from "../data";

const Intro = () => {
  const [users, setUsers] = useState(data);

  const filterUser = (job) => {
    const newUsers = data.filter((user) => user.job === job);
    if (job === "all" || job === "All") {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        doloremque magni eveniet explicabo nobis eligendi earum odio quae
        repellendus alias?
      </p>
      <Display filterUser={filterUser} />
      <div className="row mt-5">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
