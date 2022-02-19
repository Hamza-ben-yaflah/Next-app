import React from "react";
import CardCar from "../CardCar/CardCar";
import styles from "./CardCarsContainer.module.css";

function CardCarsContainer({ cars }: { cars: any }) {
  return (
    <div className={styles.container}>
      {cars.map((car: any) => (
        <CardCar key={car.sys.id} car={car} />
      ))}
    </div>
  );
}

export default CardCarsContainer;
