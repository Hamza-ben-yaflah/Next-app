import { Button, Form, Input, InputNumber, Modal } from "antd";
import React from "react";

function RentPopup() {
  return (
    <Modal
      title="Owner Details"
      footer={[
        <Button key="back" type="primary">
          Cancel
        </Button>,
      ]}
    >
      <Form>
        <Form.Item name="id" label="Id">
          <InputNumber />
        </Form.Item>
        <Form.Item name="ownerName" label="Owner Name">
          <Input />
        </Form.Item>
        <Form.Item name="carName" label="Car Name">
          <Input />
        </Form.Item>
        <Form.Item name="ownerPhoneNumber" label="Owner Phone Number">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="price">
          <InputNumber />
        </Form.Item>
        <Form.Item name="imageCar" label="imageCar">
          <Input type="file" accept="image/*" />
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

export default RentPopup;
