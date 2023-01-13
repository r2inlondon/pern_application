import { useEffect, useState } from "react";
import { expandBackground } from "../../js-functions/expandBackground";

const Dashboard = () => {
  const [candidates, setCandidates] = useState("");

  const getCandidates = async () => {
    const res = await fetch("http://localhost:5000/candidates");

    const candidatesArray = await res.json();

    setCandidates(candidatesArray);
    try {
    } catch (err) {
      console.error(err);
    }

    return candidatesArray;
  };

  useEffect(() => {
    expandBackground("bg-bigger");
    getCandidates();
  }, []);
  return <h1>Dashboard</h1>;
};

export default Dashboard;
