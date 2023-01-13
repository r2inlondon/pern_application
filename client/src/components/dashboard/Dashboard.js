import { useEffect } from "react";
import { expandBackground } from "../../js-functions/expandBackground";

const Dashboard = () => {
  useEffect(() => {
    expandBackground("bg-bigger");
  });
  return <h1>Dashboard</h1>;
};

export default Dashboard;
