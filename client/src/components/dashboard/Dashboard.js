import { useEffect, useState, Fragment } from "react";
import { expandBackground } from "../../utils/expandBackground";
import {
  Table,
  Button,
  Space,
  Form,
  Typography,
  Input,
  InputNumber,
} from "antd";
import Loader from "../loader/Loader";
import { getCandidates, updateCandidate } from "../../api/api-calls";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Dashboard = () => {
  const [candidates, setCandidates] = useState("");
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.c_id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      ...record,
    });
    setEditingKey(record.c_id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    const dataToUpdate = await form.validateFields();
    const oldData = candidates.find((item) => key === item.c_id);
    const newData = { ...oldData, ...dataToUpdate };

    const res = await updateCandidate(key, newData);

    console.log(res);
  };

  const getData = async () => {
    const candidatesArray = await getCandidates();

    setCandidates(candidatesArray);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      editable: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      editable: true,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: true,
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
        const editable = isEditing(record);

        return editable ? (
          <span>
            <Typography.Link
              style={{ marginRight: 8 }}
              onClick={() => save(record.c_id)}
            >
              Save
            </Typography.Link>

            <Space>
              <Button onClick={cancel}>Cancel </Button>
            </Space>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  useEffect(() => {
    expandBackground("bg-bigger");
    getData();
  }, []);

  return (
    <Fragment>
      <h1>Admin Dashboard</h1>
      {!candidates && <Loader />}
      {candidates && (
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={candidates}
            columns={mergedColumns}
            rowClassName="editable-row"
            rowKey={(obj) => obj.c_id}
            pagination={{
              onChange: cancel,
            }}
          />
        </Form>
      )}
    </Fragment>
  );
};

export default Dashboard;
