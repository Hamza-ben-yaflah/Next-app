import React, { useContext } from "react";
import CardCar from "../CardCar/CardCar";
import styles from "./CardCarsContainer.module.css";
import { carContext } from "../../pages/buy";

function CardCarsContainer() {
  const cars = useContext(carContext);
  return (
    <div className={styles.container}>
      {cars.map((car: any) => (
        <CardCar key={car.sys.id} car={car} />
      ))}
    </div>
  );
}

export default CardCarsContainer;
