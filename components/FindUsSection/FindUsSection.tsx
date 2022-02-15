import React from "react";
import { Typography, Row, Col, Button } from "antd";
import Image from "next/image";
import workspace from "../../public/workspace.jpg";
import styles from "./FindUsSection.module.css";
const { Title, Text } = Typography;

function FindUsSection() {
  return (
    <Row>
      <Col lg={12} xxl={12}>
        <Image src={workspace} alt="work image" width={700} height={505} />
      </Col>
      <Col lg={12} xxl={12} className={styles.col2Sectio2}>
        <Title level={2}>How to find BSRcars</Title>
        <Title level={3}>Tunisia</Title>
        <Text>125 ibno sina </Text>
        <Text>Tuins </Text>
        <br />
        <Button type="link">Open in Google Maps</Button>
      </Col>
    </Row>
  );
}

export default FindUsSection;
