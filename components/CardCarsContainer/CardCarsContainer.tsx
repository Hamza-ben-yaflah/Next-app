import React, { useContext } from "react";
import CardCar from "../CardCar/CardCar";
import styles from "./CardCarsContainer.module.css";
import { carContext } from "../../pages/buy";
import { ICarCard } from "../../@types/generated/contentful";

function CardCarsContainer() {
  const cars = useContext(carContext);
  return (
    <div className={styles.container}>
      {cars.map((car: ICarCard) => (
        <CardCar key={car.sys.id} car={car} />
      ))}
    </div>
  );
}

export default CardCarsContainer;
