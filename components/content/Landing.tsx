import React from "react";
import Image from "next/image";
import styles from "./Landing.module.css";
import { Row, Col, Button, Space } from "antd";
import { Typography } from "antd";

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
      </Space>
    </div>
  );
};

export default Landig;
