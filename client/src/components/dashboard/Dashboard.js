import { useEffect, useState } from "react";
import { expandBackground } from "../../utils/expandBackground";
import { Table } from "antd";

import { getCandidates } from "../../api/api-calls";

const Dashboard = () => {
  const [candidates, setCandidates] = useState("");

  const getData = async () => {
    const candidatesArray = await getCandidates();

    setCandidates(candidatesArray);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Answer 1",
      dataIndex: "question1",
      key: "question1",
    },
    {
      title: "Answer 2",
      dataIndex: "question2",
      key: "question2",
    },
    {
      title: "Answer 3",
      dataIndex: "question3",
      key: "question3",
    },
  ];

  useEffect(() => {
    expandBackground("bg-bigger");
    getData();
  }, []);
  return (
    <Table
      dataSource={candidates}
      columns={columns}
      rowKey={(obj) => obj.c_id}
    />
  );
};

export default Dashboard;
