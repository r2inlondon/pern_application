import { useEffect, useState, Fragment } from "react";
import { expandBackground } from "../../utils/expandBackground";
import { Table, Button, Space } from "antd";
import Loader from "../loader/Loader";

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
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <Space>
            <Button
              size="small"
              type="primary"
              ghost
              onClick={(e) => console.log(record)}
            >
              Edit
            </Button>

            <Button
              size="small"
              type="primary"
              danger
              ghost
              onClick={(e) => console.log(e.target)}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    expandBackground("bg-bigger");
    getData();
  }, []);
  return (
    <Fragment>
      <h1>Admin Dashboard</h1>
      {!candidates && <Loader />}
      {candidates && (
        <Table
          dataSource={candidates}
          columns={columns}
          rowKey={(obj) => obj.c_id}
        />
      )}
    </Fragment>
  );
};

export default Dashboard;
