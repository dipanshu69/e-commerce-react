import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../Component/Directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
