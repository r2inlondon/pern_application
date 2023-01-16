import { useEffect, useState, Fragment, useRef } from "react";
import { expandBackground } from "../../utils/expandBackground";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import {
  Table,
  Button,
  Space,
  Form,
  Typography,
  Input,
  InputNumber,
  Popconfirm,
} from "antd";
import Loader from "../loader/Loader";
import {
  getCandidates,
  updateCandidate,
  deleteCandidate,
} from "../../api/api-calls";

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

const Dashboard = ({ componentsObject }) => {
  const [loaderTxt, setLoaderTxt] = useState("Loading");
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

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleLogout = () => {
    expandBackground("bg-bigger");
    componentsObject.action({
      login: true,
      applicationForm: false,
      dashboard: false,
    });
  };

  const cancel = () => {
    setEditingKey("");
  };

  const handleSave = async (key) => {
    const copyCandidates = [...candidates];
    setCandidates("");
    setLoaderTxt("Updating Record");
    const dataToUpdate = await form.validateFields();
    const oldData = copyCandidates.find((item) => key === item.c_id);
    const newData = { ...oldData, ...dataToUpdate };

    const res = await updateCandidate(key, newData);

    getData();
    setEditingKey("");
  };

  const handleDelete = async (id) => {
    // setLoaderTxt("Deleting Record");
    // setCandidates("");
    const res = await deleteCandidate(id);
    getData();
  };

  const getData = async () => {
    const candidatesArray = await getCandidates();

    setCandidates(candidatesArray);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      editable: true,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      editable: true,
      ...getColumnSearchProps("lastname"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      editable: true,
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      onFilter: (value, record) => record.gender.includes(value),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      editable: true,
      ...getColumnSearchProps("email"),
    },
    {
      title: "Answer 1",
      dataIndex: "question1",
      key: "question1",
      ...getColumnSearchProps("question1"),
    },
    {
      title: "Answer 2",
      dataIndex: "question2",
      key: "question2",
      ...getColumnSearchProps("question2"),
    },
    {
      title: "Answer 3",
      dataIndex: "question3",
      key: "question3",
      ...getColumnSearchProps("question3"),
    },
    {
      title: "Actions",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <Typography.Link
              style={{ marginRight: 8 }}
              onClick={() => handleSave(record.c_id)}
            >
              Save
            </Typography.Link>

            <Space>
              <Button onClick={cancel}>Cancel </Button>
            </Space>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              style={{ marginRight: 8 }}
            >
              Edit
            </Typography.Link>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.c_id)}
            >
              <Typography.Link>Delete</Typography.Link>
            </Popconfirm>
          </span>
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
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <Popconfirm title="Sure to Logout?" onConfirm={handleLogout}>
          <Button type="primary" ghost>
            Logout
          </Button>
        </Popconfirm>
      </div>
      {!candidates && <Loader loaderTxt={loaderTxt} />}
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
