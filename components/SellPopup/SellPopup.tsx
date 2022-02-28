import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useEffect } from "react";
import { CarProp, SellPopupProp } from "./types";

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

function SellPopup({
  showPopup,
  handleCancel,
  handleEditAdd,
  data,
}: SellPopupProp) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      carName: data?.carName,
    });
  }, [data, form]);

  const handelSubmit = (value: CarProp) => {
    handleEditAdd(value);
    handleCancel();
  };

  const name = "hamza";
  return (
    <Modal
      title="Owner Details"
      visible={showPopup}
      footer={[
        <Button key="back" type="primary" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
    >
      <Form onFinish={handelSubmit}>
        <Form.Item name="id" label="Id">
          <InputNumber defaultValue={data?.id} />
        </Form.Item>
        <Form.Item name="ownerName" label="Owner Name">
          <Input defaultValue={data?.ownerName} />
        </Form.Item>
        <Form.Item name="carName" label="Car Name">
          <Input defaultValue={data?.carName} />
        </Form.Item>
        <Form.Item name="ownerPhoneNumber" label="Owner Phone Number">
          <Input
            addonBefore={prefixSelector}
            defaultValue={data?.ownerPhoneNumber}
          />
        </Form.Item>
        <Form.Item name="price" label="price">
          <InputNumber addonAfter={selectAfter} defaultValue={data?.price} />
        </Form.Item>
        <Form.Item name="imageCar" label="imageCar">
          <Input type="file" accept="image/*" defaultValue={data?.imageCar} />
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
