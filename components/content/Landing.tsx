import React from "react";
import Image from "next/image";
import styles from "./Landing.module.css";
import { Row, Col, Button, Space } from "antd";

import { Typography } from "antd";
import Card from "../Card/Card";

const { Title, Text } = Typography;
const Landig = () => {
  return (
    <div>
      <Space direction="vertical" size="large">
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
        <section className={styles.rowWrapper}>
          <Row>
            <Col lg={8} className={styles.col}>
              <Card
                title="Buy"
                description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                Click="Click here"
              />
            </Col>
            <Col lg={8} className={styles.col}>
              <Card
                title="Sell"
                description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                Click="Click here"
              />
            </Col>
            <Col lg={8} className={styles.col}>
              <Card
                title="Rent"
                description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                Click="Click here"
              />
            </Col>
          </Row>
        </section>
      </Space>
    </div>
  );
};

export default Landig;
