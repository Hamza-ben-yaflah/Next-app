import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.container}>
      <section className={styles.wraper}>
        <Title style={{ color: "white" }} underline>
          BUY.SEll.RENT
        </Title>
        <Text style={{ color: "white" }}>
          BSRcars make it easy for you to choose your car
        </Text>
      </section>
    </div>
  );
}

export default HeroSection;
