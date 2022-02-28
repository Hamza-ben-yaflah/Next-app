import React, { useState } from "react";
import { Button, Layout, Modal, Space, Table } from "antd";
import SellPopup from "../components/SellPopup/SellPopup";
import { CarProp } from "../components/SellPopup/types";

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
          <Button
            type="primary"
            onClick={() => {
              setIsopen(!isOpen);
              setData(record);
            }}
          >
            Edit
          </Button>
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

  const [data, setData] = useState<CarProp | undefined>();

  const handleDelete = (record: CarProp) => {
    const Newcars = cars.filter((car: CarProp) => car.id !== record.id);
    setCars([...Newcars]);
  };

  const [isOpen, setIsopen] = useState<boolean>(false);
  const [cars, setCars] = useState<CarProp[]>([]);

  const handleEditAdd = (carInfo: CarProp) => {
    if (cars.find((car: CarProp) => car.id === carInfo.id)) {
      const updatedcars = cars.map((car: CarProp) => {
        if (car.id === carInfo.id) {
          return carInfo;
        }
        return car;
      });
      setCars(updatedcars);
    } else {
      setCars([...cars, carInfo]);
    }
  };

  const handleCancel = () => {
    setIsopen(!isOpen);
    setData(undefined);
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
          handleEditAdd={handleEditAdd}
          data={data}
        />
      )}
    </>
  );
}

export default Sell;
