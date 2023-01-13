import { useEffect, useState } from "react";
import { expandBackground } from "../../utils/expandBackground";
import CandidatesTable from "./CandidatesTable";
import { getCandidates } from "../../api/api-calls";

const Dashboard = () => {
  const [candidates, setCandidates] = useState("");

  const getData = async () => {
    const candidatesArray = await getCandidates();

    setCandidates(candidatesArray);
  };

  useEffect(() => {
    expandBackground("bg-bigger");
    getData();
  }, []);
  return <CandidatesTable />;
};

export default Dashboard;
