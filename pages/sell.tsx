import React, { useState } from "react";
import { Button, Layout, Modal, Space, Table } from "antd";
import SellPopup, { CarProp } from "../components/SellPopup/SellPopup";

const { Header } = Layout;

function Sell() {
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
      render: (text: string, record: CarProp) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button
            type="primary"
            onClick={() => {
              handleDelete(record);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (record: CarProp) => {
    const Newcars = cars.filter((car: CarProp) => car.id !== record.id);
    setCars([...Newcars]);
  };

  const [isOpen, setIsopen] = useState<boolean>(false);
  const [cars, setCars] = useState<CarProp[]>([]);

  const handleAdd = (carInfo: CarProp) => {
    setCars([...cars, carInfo]);
  };

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
      <Table columns={columns} dataSource={cars}></Table>
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
