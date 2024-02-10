import { useLayoutEffect, useRef, useState } from "react";
import { Table, Divider, Checkbox } from "antd";
import "./App.css";
import columns from "./task/column";
import dataSource from "./task/data";

const defaultCheckedList = columns.map((item) => item.key);

function App() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  useLayoutEffect(() => {
    const t = document.querySelector(".ant-table-body");
    t.addEventListener("scroll", (event) => {
      console.log(event.target.scrollTop);
      console.log(event.target.offsetHeight);

      // Добавить логику для infinite scroll взять позицию скролла и основываясь над этим значением поменять data source
    });
  }, []);

  return (
    <>
      <Divider>Columns displayed</Divider>
      <Checkbox.Group
        value={checkedList}
        options={options}
        onChange={(value) => {
          setCheckedList(value);
        }}
      />
      <div>
        <Table
          dataSource={dataSource}
          columns={newColumns}
          pagination={false}
          scroll={{
            scrollToFirstRowOnChange: false,
            y: 300,
          }}
          onChange={(_, filter, sorter) => {
            const savedParams = {
              filterParams: filter,
              sortParams: {
                [sorter.columnKey]: sorter.order,
              },
            };
            sessionStorage.setItem("params", JSON.stringify(savedParams));
          }}
        />
      </div>
    </>
  );
}

export default App;
