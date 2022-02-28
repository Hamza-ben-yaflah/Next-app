import { Button, Layout, Table } from "antd";
import React from "react";

const { Header } = Layout;
function rent() {
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
      title: "Periode",
      dataIndex: "periode",
      key: "periode",
    },

    {
      title: "ImageCar",
      dataIndex: "imageCar",
      key: "imageCar",
    },
  ];
  return (
    <>
      <Header>
        <Button type="primary" size="large">
          + Add Car to Rent
        </Button>
      </Header>
      <Table columns={columns}></Table>
    </>
  );
}

export default rent;
