import React from "react";
import Image from "next/image";
import Car from "../../public/car.jpg";
import { Typography } from "antd";
import styles from "./CardCar.module.css";
const { Text } = Typography;
function CardCar({ car }: { car: any }) {
  console.log(car);

  return (
    <div className={styles.container}>
      <Image
        src={"https:" + car.fields.imageCar.fields.file.url}
        alt=" car image"
        width={100}
        height={100}
      />
      <Text>{car.fields.carName}</Text>
      <Text>{`$ ${car.fields.price}K`}</Text>
    </div>
  );
}

export default CardCar;
