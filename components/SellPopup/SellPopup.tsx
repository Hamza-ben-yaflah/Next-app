import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Image,
  Upload,
} from "antd";
import React, { useState } from "react";

export interface CarProp {
  id: number;
  ownerName: string;
  carName: string;
  ownerPhoneNumber: string;
  price: number;
  image: string;
}

export interface SellPopupProp {
  showPopup: boolean;
  handleCancel: () => void;
  handleAdd: (carInfo: CarProp) => void;
}

const { Option } = Select;

const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="DT">DT</Option>
  </Select>
);
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 80 }} defaultValue="216">
      <Option value="216">+216</Option>
    </Select>
  </Form.Item>
);

function SellPopup({ showPopup, handleCancel, handleAdd }: SellPopupProp) {
  const handelSubmit = (value: CarProp) => {
    handleAdd(value);
    handleCancel();
  };

  return (
    <Modal
      title="Basic Modal"
      visible={showPopup}
      footer={[
        <Button key="back" type="primary" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Form onFinish={handelSubmit}>
        <Form.Item name="id" label="Id" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="ownerName"
          label="Owner Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="carName" label="Car Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="ownerPhoneNumber"
          label="Owner Phone Number"
          rules={[{ required: true }]}
        >
          <Input addonBefore={prefixSelector} />
        </Form.Item>
        <Form.Item name="price" label="price" rules={[{ required: true }]}>
          <InputNumber addonAfter={selectAfter} />
        </Form.Item>
        <Form.Item
          name="imageCar"
          label="imageCar"
          rules={[{ required: true }]}
        >
          <Input type="file" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default SellPopup;
