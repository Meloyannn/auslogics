import { SearchOutlined } from "@ant-design/icons";

import SearchFilterDropdown from "../components/search-input";


const parsedFilters = (() => {
  const savedFilters = sessionStorage.getItem('params');

  try {
    return JSON.parse(savedFilters);
  } catch{
    return {
      filterParams:{},
      sortParams:{}
    }
  }
})()

const columns = [
    {
      title: "Row1",
      dataIndex: "row1",
      key: "row1",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.row1.localeCompare(b.row1),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.row1.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
    {
      title: "Row2",
      dataIndex: "row2",
      key: "row2",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.row2.localeCompare(b.row2),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.row2.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
    {
      title: "Date1",
      dataIndex: "date1",
      key: "date1",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.date1.localeCompare(b.date1),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.date1.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
    {
      title: "Date2",
      dataIndex: "date2",
      key: "date2",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.date2.localeCompare(b.date2),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.date2.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
    {
      title: "Number1",
      dataIndex: "number1",
      key: "number1",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.number1.localeCompare(b.number1),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.number1.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
    {
      title: "Number2",
      dataIndex: "number2",
      key: "number2",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.number2.localeCompare(b.number2),
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.number2.toLowerCase().includes(value.toLowerCase());
      },
      filterDropdown: SearchFilterDropdown,
    },
  ];

const setDefaultSortAndFilter = (c) =>
  c.map((col) => ({
    ...col,
    defaultSortOrder: parsedFilters?.sortParams?.[col.key],
    filteredValue: parsedFilters?.filterParams?.[col.key],
  }));


export default setDefaultSortAndFilter(columns)