import React from "react";
import { Typography, Row, Col } from "antd";
const { Title } = Typography;
import Card from "../Card/Card";
import styles from "./FeatureSection.module.css";

function FeatureSection() {
  return (
    <section>
      <Row className={styles.titleContainer}>
        <Title level={1}>Looking for something in particular?</Title>
      </Row>
      <Row gutter={48} justify="space-between">
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
  );
}

export default FeatureSection;
