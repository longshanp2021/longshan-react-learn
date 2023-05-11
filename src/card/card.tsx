import React from "react";
import { Button, Space, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const data: DataType[] = [];
let columns: ColumnsType<DataType>;

for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export class Card extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isHot: false,
      obj: {},
      defaultValue: 188,
      type: "text",
      value: 188,
      textareaValue: "请撰写一篇关于你喜欢的 DOM 元素的文章.",
    };

    columns = [
      {
        title: "操作",
        key: "operation",
        fixed: "left",
        width: 140,
        render: () => <Button type="primary">购买商品</Button>,
      },
      {
        title: "是否启用",
        className: "row",
        dataIndex: "status",
        fixed: "left",
        width: 60,
        render: (v, item) => <Switch />,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "Column 6",
        dataIndex: "address",
        key: "6",
        width: 150,
      },
      {
        title: "操作2",
        // className: "row",
        width: 120,
        key: "operation1",
        fixed: "right",
        render: (_text, record) => (
          <div>
            <Button
              type="primary"
              onClick={() => {
                this.showComBoModal(record);
              }}
            >
              编辑
            </Button>
          </div>
        ),
      },
    ];
  }
  render() {
    return (
      <Table columns={columns} dataSource={data} scroll={{ x: 1000, y: 500 }} />
    );
  }
  showComBoModal(e: any) {
    console.log(e);
  }
}
