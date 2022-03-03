import React, { useState } from "react";
import Image from "next/image";
import { Button, Modal, Typography } from "antd";
import styles from "./CardCar.module.css";
import { ICarCard } from "../../@types/generated/contentful";
const { Text } = Typography;
function CardCar({ car }: { car: ICarCard }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className={styles.container} data-testid="car">
      <Image
        src={"https:" + car.fields.imageCar?.fields.file.url}
        alt=" car image"
        width={100}
        height={100}
      />
      <Text>{car.fields.carName}</Text>
      <Text>{`$ ${car.fields.price}K`}</Text>
      <Button
        type="primary"
        size="large"
        className={styles.btn}
        onClick={showModal}
      >
        {car.fields.buyButton}
      </Button>
      <Modal
        title="Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Text>Car : {car.fields.carName}</Text>
        <br />
        <Text>Owner : {car.fields.owner}</Text>
        <br />
        <Text>Owner PhoneNumber : {car.fields.phoneNumber}</Text>
        <br />
        <Text>Year : {car.fields.year}</Text>
        <br />
        <Text>Distance : {car.fields.distance} Kilometers</Text>
        <br />
        <Text>Price : {car.fields.price}k</Text>
      </Modal>
    </div>
  );
}

export default CardCar;
