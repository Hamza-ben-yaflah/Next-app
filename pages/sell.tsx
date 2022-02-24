import React, { useEffect, useState } from "react";
import { Button, Layout, Modal, Space, Table } from "antd";
import SellPopup, { CarProp } from "../components/SellPopup/SellPopup";

const { Header } = Layout;
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },

  {
    title: "OwnerName",
    dataIndex: "ownerName",
    key: "ownerName",
  },
  {
    title: "CarName",
    dataIndex: "carName",
    key: "carName",
  },
  {
    title: "OwnerPhoneNumber",
    dataIndex: "ownerPhoneNumber",
    key: "ownerPhoneNumber",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "ImageCar",
    dataIndex: "imageCar",
    key: "imageCar",
  },
  {
    title: "Action",
    key: "action",
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button type="primary">Delete</Button>
      </Space>
    ),
  },
];

function Sell() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const handleAdd = (carInfo: CarProp) => {
    setData([...data, carInfo]);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleCancel = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <Header>
        <Button type="primary" size="large" onClick={() => setIsopen(!isOpen)}>
          + Add Car to Sell
        </Button>
      </Header>
      <Table columns={columns} dataSource={data}></Table>
      {isOpen && (
        <SellPopup
          showPopup={isOpen}
          handleCancel={handleCancel}
          handleAdd={handleAdd}
        />
      )}
    </>
  );
}

export default Sell;
